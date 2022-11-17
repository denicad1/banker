package banker.banker.bank;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface accountRepo extends JpaRepository<account,Integer> {
}
