package social.donjjul.board.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Image{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "board_id")
    private Board board;

    @Column(length = 2048, nullable = false)
    private String imageUrl;

    private Integer priority;

    public static Image createImage(Board board, String imageUrl, Integer priority){
        return new Image(board, imageUrl, priority);
    }

    public Image(Board board, String imageUrl, Integer priority) {
        this.board = board;
        this.imageUrl = imageUrl;
        this.priority = priority;
    }
}
