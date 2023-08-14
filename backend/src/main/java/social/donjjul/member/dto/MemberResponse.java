package social.donjjul.member.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import social.donjjul.member.domain.Member;

@Data
@NoArgsConstructor
public class MemberResponse {
    private String nickname;
    private String profileImage;

    public static MemberResponse of(Member member){
        return new MemberResponse(member.getNickname(), member.getProfileImage());
    }

    public MemberResponse(String nickname, String profileImage) {
        this.nickname = nickname;
        this.profileImage = profileImage;
    }
}
