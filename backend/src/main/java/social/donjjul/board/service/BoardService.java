package social.donjjul.board.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import social.donjjul.board.domain.Board;
import social.donjjul.board.dto.BoardCreateRequest;
import social.donjjul.board.dto.BoardModifyRequest;
import social.donjjul.board.dto.BoardResponse;
import social.donjjul.board.repository.BoardRepository;
import social.donjjul.likes.domain.Likes;
import social.donjjul.likes.repository.LikesRepository;
import social.donjjul.member.domain.Member;
import social.donjjul.member.repository.MemberRepository;

import java.util.List;


@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class BoardService {
    private final MemberRepository memberRepository;
    private final BoardRepository boardRepository;
    private final LikesRepository likesRepository;

    public List<BoardResponse> list() {
        List<Board> boardList = boardRepository.findAllByFetchJoin();

        return boardList.stream().map(board -> BoardResponse.of(board)).toList();
    }

    public BoardResponse get(Long boardId) {
        Board board = boardRepository.findByIdFetchJoin(boardId).orElseThrow();
        findMember(board.getMember().getId());

        List<Likes> likes = likesRepository.findByBoardId(boardId);

        return BoardResponse.of(board, likes.size());
    }

    public BoardResponse create(Member member, BoardCreateRequest boardCreateRequest) {
        Member findMember = findMember(member.getId());

        // 게시물 생성
        Board board = Board.builder()
                .title(boardCreateRequest.getTitle())
                .content(boardCreateRequest.getContent())
                .member(findMember)
                .build();

        return BoardResponse.of(boardRepository.save(board));
    }

    public BoardResponse modify(Member member, BoardModifyRequest boardModifyRequest, Long boardId) {
        findMember(member.getId());
        Board board = boardRepository.findById(boardId).orElseThrow();

        board.update(boardModifyRequest);

        return BoardResponse.of(boardRepository.save(board));
    }


    public void delete(Member member, Long boardId) {
        findMember(member.getId());
        Board board = boardRepository.findById(boardId).orElseThrow();

        boardRepository.delete(board);
    }

    private Member findMember(String memberId) {
        return memberRepository.findById(memberId).orElseThrow();
    }
}
