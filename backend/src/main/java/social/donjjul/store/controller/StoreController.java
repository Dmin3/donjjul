package social.donjjul.store.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import social.donjjul.store.dto.StoreResponse;
import social.donjjul.store.service.StoreService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/store")
public class StoreController {
    private final StoreService storeService;

    @GetMapping
    public ResponseEntity<List<StoreResponse>> list(){
        return ResponseEntity.ok(storeService.list());
    }

    @GetMapping("/{storeId}")
    public ResponseEntity<StoreResponse> get(
            @PathVariable Long storeId
    ) {
        return ResponseEntity.ok(storeService.get(storeId));
    }
}
