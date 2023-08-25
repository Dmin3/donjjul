package social.donjjul.board.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import social.donjjul.board.dto.BoardModifyRequest;
import social.donjjul.common.BaseTimeEntity;
import social.donjjul.member.domain.Member;
import social.donjjul.store.domain.Store;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id")
    private Store store;

    @OneToMany(mappedBy = "board")
    List<Image> imageList = new ArrayList<>();

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Builder
    public Board(Member member, Store store, String title, String content){
        this.member = member;
        this.store = store;
        this.title = title;
        this.content = content;
    }

    public void update(BoardModifyRequest boardModifyRequest) {
        this.title = boardModifyRequest.getTitle();
        this.content = boardModifyRequest.getContent();
    }
}
