package social.donjjul.auth;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;
import social.donjjul.auth.kakao.KakaoAuthService;
import social.donjjul.auth.kakao.KakaoUserInfoDto;
import social.donjjul.member.domain.Member;
import social.donjjul.member.dto.MemberCreateRequest;
import social.donjjul.member.repository.MemberRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AuthService {
    private final KakaoAuthService kakaoAuthService;
    private final MemberRepository memberRepository;
    private final TokenProvider tokenProvider;

    public KakaoUserInfoDto authKakao(String code) {
        String accessToken = kakaoAuthService.getKakaoAccessToken(code);
        KakaoUserInfoDto kakaoUserInfo = kakaoAuthService.getKakaoUserInfo(accessToken);

        Optional<Member> findMember = memberRepository.findById(kakaoUserInfo.getId());

        if (findMember.isPresent()) {
            kakaoUserInfo.setJoinStatus(true);
            return kakaoUserInfo;
        }

        return kakaoUserInfo;
    }

    public TokenDto login(String memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow();
        Authentication authentication = toAuthentication(member);
        TokenDto tokenDto = tokenProvider.createTokenDto(authentication);
        return tokenDto;
    }

    public TokenDto signup(MemberCreateRequest memberCreateRequest) {
        Optional<Member> findMember = memberRepository.findById(memberCreateRequest.getId());

        if (findMember.isPresent()) {
            throw new RuntimeException("이미 존재합니다.");
        }

        Member member = memberRepository.save(
                Member.createMember(
                        memberCreateRequest.getId(),
                        memberCreateRequest.getNickname(),
                        memberCreateRequest.getProfileImage()
                )
        );

        Authentication authentication = toAuthentication(member);
        TokenDto tokenDto = tokenProvider.createTokenDto(authentication);

        return tokenDto;
    }

    private Authentication toAuthentication(Member member) {
        return new UsernamePasswordAuthenticationToken(member.getId(), "", List.of(new SimpleGrantedAuthority(member.getMemberType().toString())));
    }
}
