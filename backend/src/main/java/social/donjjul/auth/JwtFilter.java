package social.donjjul.auth;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@Slf4j
public class JwtFilter extends OncePerRequestFilter {
    public static final String AUTHORIZATION_HEADER = "Authorization";
    public static final String BEARER_PREFIX = "Bearer ";

    private static final List<String> EXCLUDE_URL = List.of("/auth/kakao", "/auth/signup", "/auth/login");

    private final TokenProvider tokenProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        log.info("JWT 필터 실행 시작");

        // 1. Request Header 에서 토큰을 꺼낸다.
        String accessToken = resolveToken(request);

        // 2. JWT 토큰을 검증한다. 검증에 통과하면 토큰에서 Authentication 을 가져와서 SecurityContext 에 저장한다.
        if (StringUtils.hasText(accessToken) && tokenProvider.validateToken(accessToken)) {
            Authentication authentication = tokenProvider.getAuthentication(accessToken);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(request, response);
    }

    // Request Header 에서 토큰 정보를 꺼내오기
    private String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(BEARER_PREFIX)) {
            return bearerToken.substring(7);
        }

        return null;
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        for (String excludeURL : EXCLUDE_URL) {
            if (request.getRequestURI().equalsIgnoreCase(excludeURL)) {
                log.info("현재 경로 : {} , JWTFilter 에서 제외 : {}", request.getServletPath(), true);
                return true;
            }
        }
        return false;
    }
}
