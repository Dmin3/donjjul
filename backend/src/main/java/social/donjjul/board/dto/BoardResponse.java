package social.donjjul.board.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import social.donjjul.board.domain.Board;
import social.donjjul.store.dto.StoreResponse;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
public class BoardResponse {
    private Long id;
    private String title;
    private String content;

    private String nickname;
    private String profileImageUrl;
    private int likesCount;

    private List<ImageResponse> imageUrlList;
    private StoreResponse storeInfo;

    private LocalDateTime createAt;
    private LocalDateTime modifyAt;

    public static BoardResponse of(Board board) {
        BoardResponse boardResponse = new BoardResponse(
                board.getId(),
                board.getTitle(),
                board.getContent(),
                board.getMember().getNickname(),
                board.getMember().getProfileImage(),
                board.getCreatedAt(),
                board.getModifiedAt()
        );

        if (board.getImageList().size() != 0) {
            List<ImageResponse> imageResponses = board.getImageList().stream().map(image -> ImageResponse.of(image)).toList();
            boardResponse.setImageUrlList(imageResponses);

            return boardResponse;
        }

        return boardResponse;
    }

    public static BoardResponse of(Board board, int likesCount) {
        BoardResponse boardResponse = new BoardResponse(
                board.getId(),
                board.getTitle(),
                board.getContent(),
                board.getMember().getNickname(),
                board.getMember().getProfileImage(),
                board.getCreatedAt(),
                board.getModifiedAt()
        );

        boardResponse.setLikesCount(likesCount);
        boardResponse.setStoreInfo(StoreResponse.of(board.getStore()));

        if (board.getImageList().size() != 0) {
            List<ImageResponse> imageResponses = board.getImageList().stream().map(image -> ImageResponse.of(image)).toList();
            boardResponse.setImageUrlList(imageResponses);

            return boardResponse;
        }

        return boardResponse;
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

    // 게시물에 이미지는 선택적이기에 생성자가 아닌 Setter 로 주입
    private void setImageUrlList(List<ImageResponse> imageUrlList) {
        this.imageUrlList = imageUrlList;
    }
}
