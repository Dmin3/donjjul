package social.donjjul.comment.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import social.donjjul.board.domain.Board;
import social.donjjul.common.BaseTimeEntity;
import social.donjjul.member.domain.Member;
import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Comment extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "board_id")
    private Board board;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Builder
    public Comment(Member member, Board board, String content){
        this.member = member;
        this.board = board;
        this.content = content;
    }
}
