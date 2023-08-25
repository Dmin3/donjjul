package social.donjjul.board.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BoardCreateRequest {
    private String title;
    private String content;
    private Long storeId;
}
