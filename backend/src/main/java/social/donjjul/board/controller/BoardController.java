package social.donjjul.board.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import social.donjjul.auth.AuthMember;
import social.donjjul.board.dto.BoardCreateRequest;
import social.donjjul.board.dto.BoardModifyRequest;
import social.donjjul.board.dto.BoardResponse;
import social.donjjul.board.service.BoardService;
import social.donjjul.member.domain.Member;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/board")
public class BoardController {
    private final BoardService boardService;

    @GetMapping
    public ResponseEntity<List<BoardResponse>> list() {
        return ResponseEntity.ok(boardService.list());
    }

    @GetMapping("/{boardId}")
    public ResponseEntity<BoardResponse> get(@PathVariable Long boardId) {
        return ResponseEntity.ok(boardService.get(boardId));
    }

    @PostMapping()
    public ResponseEntity<BoardResponse> create(@AuthMember Member member, @RequestBody BoardCreateRequest boardCreateRequest) {
        return ResponseEntity.ok(boardService.create(member, boardCreateRequest));
    }

    @PatchMapping("/{boardId}")
    public ResponseEntity<BoardResponse> modify(@AuthMember Member member, @RequestBody BoardModifyRequest boardModifyRequest, @PathVariable Long boardId) {
        boardService.modify(member, boardModifyRequest, boardId);

        return ResponseEntity.ok(boardService.modify(member, boardModifyRequest, boardId));
    }

    @DeleteMapping("/{boardId}")
    public ResponseEntity<Boolean> delete(@AuthMember Member member, @PathVariable Long boardId) {
        boardService.delete(member, boardId);

        return ResponseEntity.ok(true);
    }


}
