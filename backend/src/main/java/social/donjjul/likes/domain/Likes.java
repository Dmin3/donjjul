package social.donjjul.likes.domain;

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
public class Likes extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "board_id")
    private Board board;

    @Builder
    public Likes(Member member, Board board){
        this.member = member;
        this.board = board;
    }

}
