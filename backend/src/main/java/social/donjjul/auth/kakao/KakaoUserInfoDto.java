package social.donjjul.auth.kakao;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class KakaoUserInfoDto {
    private String id;
    private Properties properties;

    public KakaoUserInfoDto(String id, Properties properties) {
        this.id = id;
        this.properties = properties;
    }

    @Data
    @NoArgsConstructor
    static class Properties {
        private String nickname;
        private String profile_image;

        public Properties(String nickname, String profile_image) {
            this.nickname = nickname;
            this.profile_image = profile_image;
        }
    }
}
