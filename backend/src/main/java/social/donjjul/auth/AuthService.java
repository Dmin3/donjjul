package social.donjjul.auth;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import social.donjjul.auth.kakao.KakaoAuthService;
import social.donjjul.auth.kakao.KakaoUserInfoDto;
import social.donjjul.member.domain.Member;
import social.donjjul.member.repository.MemberRepository;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AuthService {
    private final KakaoAuthService kakaoAuthService;
    private final MemberRepository memberRepository;

    public KakaoUserInfoDto login(String code) {
        String accessToken = kakaoAuthService.getKakaoAccessToken(code);
        KakaoUserInfoDto kakaoUserInfo = kakaoAuthService.getKakaoUserInfo(accessToken);

        Optional<Member> findMember = memberRepository.findById(kakaoUserInfo.getId());

        return findMember.isEmpty() ? kakaoUserInfo : null;
    }


}
