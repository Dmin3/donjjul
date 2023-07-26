package social.donjjul.member.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {
    @Id
    @Column(name = "member_id")
    private String id;

    @Column(length = 50)
    private String name;

    private String email;

    @Enumerated(value = EnumType.STRING)
    private MemberType memberType;

    public static Member createMember(String id, String name, String email) {
        return new Member(id, name, email);
    }

    public Member(String id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.memberType = MemberType.USER;
    }
}
