package social.donjjul.likes.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LikesResponse {
    private Long boardId;
    private int likesCount;

    public LikesResponse(Long boardId, int likesCount) {
        this.boardId = boardId;
        this.likesCount = likesCount;
    }
}
