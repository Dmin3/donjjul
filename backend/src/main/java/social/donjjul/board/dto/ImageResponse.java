package social.donjjul.board.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import social.donjjul.board.domain.Image;

@Data
@NoArgsConstructor
public class ImageResponse {
    private Long id;
    private String imageUrl;
    private Integer priority;

    public static ImageResponse of(Image image) {
        return new ImageResponse(image.getId(), image.getImageUrl(), image.getPriority());
    }

    public ImageResponse(Long id, String imageUrl, Integer priority) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.priority = priority;
    }
}
