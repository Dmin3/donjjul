package social.donjjul;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import social.donjjul.common.config.CorsConfigProperties;

@SpringBootApplication
@EnableJpaAuditing
@EnableConfigurationProperties(CorsConfigProperties.class)
public class DonjjulApplication {

    public static void main(String[] args) {
        SpringApplication.run(DonjjulApplication.class, args);
    }

}
