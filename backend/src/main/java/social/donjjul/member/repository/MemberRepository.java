package social.donjjul.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import social.donjjul.member.domain.Member;

public interface MemberRepository extends JpaRepository<Member, String> {
}
