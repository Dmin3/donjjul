package social.donjjul.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import social.donjjul.board.domain.Board;

import java.util.List;
import java.util.Optional;

public interface BoardRepository extends JpaRepository<Board, Long> {
    @Query("select distinct b from Board b join fetch b.member join fetch b.imageList")
    List<Board> findAllByFetchJoin();

    @Query("select distinct b from Board b join fetch b.imageList join fetch b.member where b.id = :boardId")
    Optional<Board> findByIdFetchJoin(@Param("boardId") Long boardId);
}
