package social.donjjul.store.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import social.donjjul.board.domain.Board;
import social.donjjul.board.dto.BoardResponse;
import social.donjjul.board.repository.BoardRepository;
import social.donjjul.store.domain.Store;
import social.donjjul.store.dto.StoreResponse;
import social.donjjul.store.repository.StoreRepository;

import java.util.List;


@Service
@RequiredArgsConstructor
public class StoreService {
    private final StoreRepository storeRepository;
    private final BoardRepository boardRepository;

    public List<StoreResponse> list() {
        return storeRepository.findAll().stream().map(store -> StoreResponse.of(store)).toList();
    }

    public StoreResponse get(Long storeId) {
        Store store = storeRepository.findById(storeId).orElseThrow();
        List<Board> boardList = boardRepository.findByStore(store.getId());

        if (!boardList.isEmpty()) {
            return StoreResponse.of(store, boardList.stream().map(board -> BoardResponse.of(board)).toList());
        }

        return StoreResponse.of(store);
    }
}
