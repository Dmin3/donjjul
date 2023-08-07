package social.donjjul.board.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import social.donjjul.board.dto.BoardModifyRequest;
import social.donjjul.comment.domain.Comment;
import social.donjjul.common.BaseTimeEntity;
import social.donjjul.member.domain.Member;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Board extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "board")
    List<Comment> commentList = new ArrayList<>();

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Builder
    public Board(Member member, String title, String content){
        this.member = member;
        this.title = title;
        this.content = content;
    }

    public void update(BoardModifyRequest boardModifyRequest) {
        this.title = boardModifyRequest.getTitle();
        this.content = boardModifyRequest.getContent();
    }
}
