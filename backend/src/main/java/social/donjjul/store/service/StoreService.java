package social.donjjul.store.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import social.donjjul.store.domain.Store;
import social.donjjul.store.dto.StoreResponse;
import social.donjjul.store.repository.StoreRepository;

import java.util.List;


@Service
@RequiredArgsConstructor
public class StoreService {
    private final StoreRepository storeRepository;

    public List<StoreResponse> list() {
        return storeRepository.findAll().stream().map(store -> StoreResponse.of(store)).toList();
    }

    public StoreResponse get(Long storeId) {
        Store store = storeRepository.findById(storeId).orElseThrow();
        return StoreResponse.of(store);
    }
}
