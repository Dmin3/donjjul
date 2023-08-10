package social.donjjul.board.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import social.donjjul.board.domain.Board;
import social.donjjul.board.domain.Image;
import social.donjjul.board.repository.BoardRepository;
import social.donjjul.board.repository.ImageRepository;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ImageService {
    private final AmazonS3Service amazonS3Service;
    private final BoardRepository boardRepository;
    private final ImageRepository imageRepository;

    public void upload(List<MultipartFile> multipartFileList, Long boardId){
        Board board = boardRepository.findById(boardId).orElseThrow();

        int index = 1;

        for (MultipartFile multipartFile : multipartFileList) {
            String imageUrl = amazonS3Service.upload(multipartFile);

            Image image = Image.createImage(board, imageUrl, index++);

            imageRepository.save(image);
        }
    }











}
