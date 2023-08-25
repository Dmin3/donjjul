package social.donjjul;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import social.donjjul.board.domain.Board;
import social.donjjul.board.repository.BoardRepository;
import social.donjjul.common.config.CorsConfigProperties;
import social.donjjul.likes.domain.Likes;
import social.donjjul.likes.repository.LikesRepository;
import social.donjjul.member.domain.Member;
import social.donjjul.member.repository.MemberRepository;

import javax.annotation.PostConstruct;
import java.util.List;

@SpringBootApplication
@EnableConfigurationProperties(CorsConfigProperties.class)
@RequiredArgsConstructor
public class DonjjulApplication {
    public static void main(String[] args) {
        SpringApplication.run(DonjjulApplication.class, args);
    }
}
