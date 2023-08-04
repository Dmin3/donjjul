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
    private String nickname;

    @Column(columnDefinition = "TEXT")
    private String profileImage;

    @Enumerated(value = EnumType.STRING)
    private MemberType memberType;

    public static Member createMember(String id, String name, String profileImage) {
        return new Member(id, name, profileImage);
    }

    public Member(String id, String nickname, String profileImage) {
        this.id = id;
        this.nickname = nickname;
        this.profileImage = profileImage;
        this.memberType = MemberType.USER;
    }
}
