package social.donjjul.likes.controller;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import social.donjjul.auth.AuthMember;
import social.donjjul.likes.dto.LikesResponse;
import social.donjjul.likes.service.LikesService;
import social.donjjul.member.domain.Member;

import java.util.List;

@RestController
@RequestMapping("/likes")
@RequiredArgsConstructor
public class LikesController {
    private final LikesService likesService;

    @GetMapping()
    public ResponseEntity<List<LikesResponse>> listLikes() {
        return ResponseEntity.ok(likesService.listLikes());
    }

    @PostMapping("/{boardId}")
    public ResponseEntity<Boolean> likes(
            @PathVariable Long boardId,
            @AuthMember Member member) {
        return ResponseEntity.ok(likesService.likesBoard(boardId, member));
    }
}
