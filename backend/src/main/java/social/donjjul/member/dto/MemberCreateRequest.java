package social.donjjul.member.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MemberCreateRequest {
    private String id;
    private String nickname;
    private String profileImage;
}
