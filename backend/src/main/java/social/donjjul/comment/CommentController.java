package social.donjjul.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import social.donjjul.auth.AuthMember;
import social.donjjul.comment.dto.CommentRequest;
import social.donjjul.comment.dto.CommentResponse;
import social.donjjul.comment.service.CommentService;
import social.donjjul.member.domain.Member;

import java.util.List;

@RestController
@RequestMapping("/comment")
@RequiredArgsConstructor
public class CommentController {
    private final CommentService commentService;

    @GetMapping("/{boardId}")
    public ResponseEntity<List<CommentResponse>> get(
            @PathVariable Long boardId
    ) {
        return ResponseEntity.ok(commentService.get(boardId));
    }

    @PostMapping("/{boardId}")
    public ResponseEntity<Boolean> create(
            @PathVariable Long boardId,
            @RequestBody CommentRequest request,
            @AuthMember Member member
    ) {
        return ResponseEntity.ok(commentService.create(request, boardId, member));
    }

    @PatchMapping("/{commentId}")
    public ResponseEntity<Boolean> modify(
            @PathVariable Long commentId,
            @RequestBody CommentRequest request
    ) {
        return ResponseEntity.ok(commentService.modify(request, commentId));
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<Boolean> delete(
            @PathVariable Long commentId
    ) {
        return ResponseEntity.ok(commentService.delete(commentId));
    }
}
