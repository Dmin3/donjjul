package social.donjjul.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import social.donjjul.board.domain.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {
}
