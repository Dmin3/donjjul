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

    public List<BoardResponse> list() {
        return boardRepository.findAll().stream().map(board -> BoardResponse.of(board)).toList();
    }

    public BoardResponse get(Long boardId) {
        Board board = boardRepository.findById(boardId).orElseThrow();
        findMember(board.getMember().getId());


        BoardResponse of = BoardResponse.of(board);

        return of;
    }

    public void create(Member member, BoardCreateRequest boardCreateRequest) {
        Member findMember = findMember(member.getId());

        // 게시물 생성
        Board board = Board.builder()
                .title(boardCreateRequest.getTitle())
                .content(boardCreateRequest.getContent())
                .member(findMember)
                .build();

        boardRepository.save(board);
    }

    public void modify(Member member, BoardModifyRequest boardModifyRequest, Long boardId) {
        findMember(member.getId());
        Board board = boardRepository.findById(boardId).orElseThrow();

        board.update(boardModifyRequest);

        boardRepository.save(board);
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
