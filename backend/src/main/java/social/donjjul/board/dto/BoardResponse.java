package social.donjjul.board.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import social.donjjul.board.domain.Board;
import social.donjjul.member.domain.Member;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class BoardResponse {
    private Long id;
    private String title;
    private String content;

    private String nickname;
    private String profileImageUrl;

    // TODO : AWS S3 붙히고 테스트 해볼 것.
    private String imageUrl;

    private LocalDateTime createAt;
    private LocalDateTime modifyAt;

    public static BoardResponse of(Board board) {
        return new BoardResponse(
                board.getId(),
                board.getTitle(),
                board.getContent(),
                board.getMember().getNickname(),
                board.getMember().getProfileImage(),
                board.getCreatedAt(),
                board.getModifiedAt()
        );
    }

    public BoardResponse(Long id, String title, String content, String nickname, String profileImageUrl, LocalDateTime createAt, LocalDateTime modifyAt) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.nickname = nickname;
        this.profileImageUrl = profileImageUrl;
        this.createAt = createAt;
        this.modifyAt = modifyAt;
    }
}
