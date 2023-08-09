package social.donjjul.board.service;

import com.amazonaws.SdkClientException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.AmazonS3Exception;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class AmazonS3Service {
    private final AmazonS3 amazonS3;
    private static final String bucket = "donjjul";
    private static final String dirName = "board";

    public String upload(MultipartFile multipartFile) {
        String fileName = createFileName(multipartFile.getOriginalFilename());
        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(multipartFile.getSize());
        objectMetadata.setContentType(multipartFile.getContentType());

        try (InputStream inputStream = multipartFile.getInputStream()) {
            // upload multi part file
            amazonS3.putObject(new PutObjectRequest(bucket, fileName, inputStream, objectMetadata).withCannedAcl(CannedAccessControlList.PublicRead));
        } catch (AmazonS3Exception e) {
            log.error("AmazonS3Exception - {} ", e.getMessage());
            return "";
        } catch (SdkClientException e) {
            log.error("SdkClientException - {} ", e.getMessage());
            return "";
        } catch (Exception e) {
            log.error("Amazon other Exception - {} ", e.getMessage());
            return "";
        }

        return amazonS3.getUrl(bucket, fileName).toString();
    }

    private String createFileName(String originalFileName) {
        StringBuilder sb = new StringBuilder();
        return sb.append(dirName).append("/").append(UUID.randomUUID()).append(getFileExtension(originalFileName)).toString();
    }

    private String getFileExtension(String originalFileName) {
        try {
            return originalFileName.substring(originalFileName.lastIndexOf("."));
        } catch (StringIndexOutOfBoundsException e) {
            throw new RuntimeException(String.format("잘못된 형식의 파일($s) 입니다", originalFileName));
        }
    }

    public void deleteImage(String fileName) {
        amazonS3.deleteObject(bucket, fileName);
    }
}
