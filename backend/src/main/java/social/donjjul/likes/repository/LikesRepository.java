package social.donjjul.likes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import social.donjjul.board.domain.Board;
import social.donjjul.likes.domain.Likes;
import social.donjjul.member.domain.Member;

import java.util.List;
import java.util.Optional;

public interface LikesRepository extends JpaRepository<Likes, Long> {

    @Query("select l from Likes l join fetch l.member join fetch l.board where l.member = :member and l.board = :board")
    Optional<Likes> findByMemberAndBoard(@Param("member") Member member, @Param("board") Board board);

    @Query("select l from Likes l join fetch l.board join fetch l.member where l.board.id = :boardId")
    List<Likes> findByBoardId(@Param("boardId") Long boardId);
}
