package social.donjjul.member.controller;

import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import social.donjjul.auth.AuthMember;
import social.donjjul.member.domain.Member;

@RestController
@Slf4j
public class MemberController {
    @GetMapping("/member")
    public String testMember(@AuthMember Member member) {
        log.info("authmeber : {}", member.getId());
        return "문제없이 return";
    }


}
