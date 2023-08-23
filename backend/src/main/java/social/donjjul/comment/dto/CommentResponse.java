package social.donjjul.comment.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import social.donjjul.comment.domain.Comment;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class CommentResponse {
    private Long commentId;
    private String content;
    private String nickname;
    private String profileImage;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    public static CommentResponse of(Comment comment) {
        return new CommentResponse(
                comment.getId(),
                comment.getContent(),
                comment.getMember().getNickname(),
                comment.getMember().getProfileImage(),
                comment.getCreatedAt(),
                comment.getModifiedAt()
        );
    }

    public CommentResponse(Long commentId, String content, String nickname, String profileImage, LocalDateTime createdAt, LocalDateTime modifiedAt) {
        this.commentId = commentId;
        this.content = content;
        this.nickname = nickname;
        this.profileImage = profileImage;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }
}
