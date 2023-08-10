package social.donjjul.member.controller;

import lombok.extern.slf4j.Slf4j;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import social.donjjul.auth.AuthMember;
import social.donjjul.member.domain.Member;
import social.donjjul.member.dto.MemberResponse;

@RestController
@Slf4j
@RequestMapping("/member")
public class MemberController {
    @GetMapping("/me")
    public ResponseEntity<MemberResponse> testMember(@AuthMember Member member) {
        return ResponseEntity.ok(MemberResponse.of(member));
    }
}
