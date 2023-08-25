package social.donjjul.comment.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import social.donjjul.board.domain.Board;
import social.donjjul.board.repository.BoardRepository;
import social.donjjul.comment.domain.Comment;
import social.donjjul.comment.dto.CommentRequest;
import social.donjjul.comment.dto.CommentResponse;
import social.donjjul.comment.repository.CommentRepository;
import social.donjjul.member.domain.Member;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final BoardRepository boardRepository;

    public List<CommentResponse> get(Long boardId) {
        return commentRepository.findAllByBoard_Id(boardId).stream().map(comment -> CommentResponse.of(comment)).toList();
    }

    public Boolean create(CommentRequest request, Long boardId, Member member) {
        Board board = boardRepository.findById(boardId).orElseThrow();

        Comment comment = Comment.builder().content(request.getContent()).member(member).board(board).build();

        commentRepository.save(comment);

        return true;
    }

    public Boolean modify(CommentRequest request, Long commentId) {
        Comment comment = commentRepository.findById(commentId).orElseThrow();

        comment.update(request.getContent());

        return true;
    }

    public Boolean delete(Long commentId) {
        Comment comment = commentRepository.findById(commentId).orElseThrow();
        commentRepository.delete(comment);
        return true;
    }
}
