package social.donjjul.auth;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import social.donjjul.member.domain.Member;


import java.util.List;

/**
 * 엔티티 회원을 연결해주는 어뎁터 역할.
 */
public class MemberAdapter extends User {
    private final Member member;

    public MemberAdapter(Member member) {
        super(member.getId(), "", List.of(new SimpleGrantedAuthority(member.getMemberType().toString())));
        this.member = member;
    }

    public Member getMember() {
        return member;
    }

    public String getId() {
        return member.getId();
    }
}
