package social.donjjul.auth;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class TokenDto {
    private final String grantType;
    private final String accessToken;
    private final long accessTokenExpiresIn;

    public static TokenDto of(String grantType, String accessToken, long accessTokenExpiresIn) {
        return new TokenDto(grantType, accessToken, accessTokenExpiresIn);
    }

    public TokenDto(String grantType, String accessToken, long accessTokenExpiresIn) {
        this.grantType = grantType;
        this.accessToken = accessToken;
        this.accessTokenExpiresIn = accessTokenExpiresIn;
    }
}
