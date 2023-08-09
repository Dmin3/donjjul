package social.donjjul.board.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import social.donjjul.board.service.ImageService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/image")
@Slf4j
public class ImageController {
    private final ImageService imageService;

    @PostMapping("/{boardId}")
    public ResponseEntity<Boolean> uploadBoardImage(
            @RequestPart("data") List<MultipartFile> multipartFileList,
            @PathVariable Long boardId
    ) {
        imageService.upload(multipartFileList, boardId);

        return ResponseEntity.ok(true);
    }

}
