package social.donjjul.likes.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import social.donjjul.board.domain.Board;
import social.donjjul.board.repository.BoardRepository;
import social.donjjul.likes.domain.Likes;
import social.donjjul.likes.dto.LikesResponse;
import social.donjjul.likes.repository.LikesRepository;
import social.donjjul.member.domain.Member;

import java.util.*;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
@Transactional
public class LikesService {
    private final LikesRepository likesRepository;
    private final BoardRepository boardRepository;

    public List<LikesResponse> listLikes() {
        Map<Long, List<Likes>> listMap = likesRepository.findAll().stream().collect(Collectors.groupingBy(likes -> likes.getBoard().getId()));

        List<LikesResponse> result = new ArrayList<>();

        for (Long boardId : listMap.keySet()) {
            int likes = listMap.get(boardId).size();

            result.add(new LikesResponse(boardId, likes));
        }

        return result;
    }

    public Boolean likesBoard(Long boardId, Member member) {
        Board board = boardRepository.findById(boardId).orElseThrow();


        Optional<Likes> findLikes = likesRepository.findByMemberAndBoard(member, board);

        if (findLikes.isPresent()) {
            throw new RuntimeException("이미 좋아요한 게시물입니다.");
        }

        Likes likes = Likes.builder().board(board).member(member).build();

        likesRepository.save(likes);

        return true;
    }
}
