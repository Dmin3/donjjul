package social.donjjul.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import social.donjjul.board.domain.Image;

public interface ImageRepository extends JpaRepository<Image, Long> {
}
