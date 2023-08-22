package social.donjjul.store.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import social.donjjul.store.domain.Store;

public interface StoreRepository extends JpaRepository<Store, Long> {
}
