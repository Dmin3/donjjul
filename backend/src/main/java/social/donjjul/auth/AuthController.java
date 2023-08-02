package social.donjjul.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    @GetMapping("/kakao")
    public ResponseEntity<?> authKakao(@RequestParam String code){
        return ResponseEntity.ok(authService.authKakao(code));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(){
        return null;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(){
        return null;
    }
}
