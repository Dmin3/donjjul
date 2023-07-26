package social.donjjul.auth.kakao;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
@Slf4j
public class KakaoAuthService {
    private static final String grant_type = "authorization_code";

    @Value("${kakao.key}")
    private String kakaoAppKey;
    @Value("${kakao.redirect-url}")
    private String redirect_url;

    // 인가코드로 카카오 액세스 토큰을 가져온다.
    public String getKakaoAccessToken(String code) {
        // URI 생성
        URI uri = UriComponentsBuilder
                .fromHttpUrl("https://kauth.kakao.com")
                .path("/oauth/token")
                .queryParam("grant_type", grant_type)
                .queryParam("client_id", kakaoAppKey)
                .queryParam("redirect_uri", redirect_url)
                .queryParam("code", code)
                .encode()
                .build()
                .toUri();

        // 요청 헤더 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.setAcceptCharset(List.of(StandardCharsets.UTF_8));

        // 요청 엔티티
        HttpEntity<Object> request = new HttpEntity<>(headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<KakaoAccessTokenDto> response = restTemplate.exchange(uri, HttpMethod.POST, request, KakaoAccessTokenDto.class);

        return response.getBody().getAccess_token();
    }

    // 카카오 액세스토큰으로 유저 정보를 가져온다.
    public KakaoUserInfoDto getKakaoUserInfo(String accessToken) {
        URI uri = UriComponentsBuilder
                .fromHttpUrl("https://kapi.kakao.com")
                .path("/v2/user/me")
                .encode()
                .build()
                .toUri();

        // 요청 헤더 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.setAcceptCharset(List.of(StandardCharsets.UTF_8));

        // 요청 엔티티
        HttpEntity<Object> request = new HttpEntity<>(headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<KakaoUserInfoDto> response = restTemplate.exchange(uri, HttpMethod.POST, request, KakaoUserInfoDto.class);

        log.info("KAKAO USER INFO {}", response.getBody());

        return response.getBody();
    }
}
