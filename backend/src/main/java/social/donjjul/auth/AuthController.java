package social.donjjul.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import social.donjjul.auth.kakao.KakaoUserInfoDto;
import social.donjjul.member.dto.MemberCreateRequest;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    @GetMapping("/kakao")
    public ResponseEntity<KakaoUserInfoDto> authKakao(@RequestParam String code) {
        return ResponseEntity.ok(authService.authKakao(code));
    }

    @PostMapping("/login")
    public void login(@RequestParam String memberId, HttpServletResponse response) {
        TokenDto tokenDto = authService.login(memberId);
        response.setHeader(HttpHeaders.AUTHORIZATION, tokenDto.getGrantType() + tokenDto.getAccessToken());
    }

    @PostMapping("/signup")
    public void signup(@RequestBody MemberCreateRequest memberCreateRequest, HttpServletResponse response) {
        TokenDto tokenDto = authService.signup(memberCreateRequest);
        response.setHeader(HttpHeaders.AUTHORIZATION, tokenDto.getGrantType() + tokenDto.getAccessToken());
    }

    // 체크 용도
    @GetMapping("/check")
    public String check(){
        return "check check";
    }
}
