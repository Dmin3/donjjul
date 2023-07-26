package social.donjjul.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    @GetMapping("/login")
    public ResponseEntity<?> login(@RequestParam String code){
        return ResponseEntity.ok(authService.login(code));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(){
        return null;
    }
}
