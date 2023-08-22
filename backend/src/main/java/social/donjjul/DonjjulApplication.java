package social.donjjul;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import social.donjjul.board.domain.Board;
import social.donjjul.board.repository.BoardRepository;
import social.donjjul.common.config.CorsConfigProperties;
import social.donjjul.likes.domain.Likes;
import social.donjjul.likes.repository.LikesRepository;
import social.donjjul.member.domain.Member;
import social.donjjul.member.repository.MemberRepository;

import javax.annotation.PostConstruct;
import java.util.List;

@SpringBootApplication
@EnableConfigurationProperties(CorsConfigProperties.class)
@RequiredArgsConstructor
public class DonjjulApplication {
    private final MemberRepository memberRepository;
    private final BoardRepository boardRepository;
    private final LikesRepository likesRepository;


    public static void main(String[] args) {
        SpringApplication.run(DonjjulApplication.class, args);
    }

    @PostConstruct
    public void testData() {


        Member member = new Member("zzz", "zzz", null);
        Member member1 = new Member("zz1", "zzz", null);
        Member member2 = new Member("zz2", "zzz", null);

        List<Member> memberList = List.of(member1, member2, member);

        memberRepository.saveAll(memberList);

        Board board = new Board(member, "sdasda11", "dasdad");

        Board board1 = new Board(member, "sdasda11", "dasdad");

        Board board2 = new Board(member, "sdasda22", "dasdad");

        List<Board> boards = List.of(board1,board2,board);

        boardRepository.saveAll(boards);

        List<Likes> likes = List.of(new Likes(member, board),
                new Likes(member, board1),
                new Likes(member, board2),
                new Likes(member2, board),
                new Likes(member2, board1),
                new Likes(member2, board2),
                new Likes(member1, board));

        likesRepository.saveAll(likes);


    }

}
