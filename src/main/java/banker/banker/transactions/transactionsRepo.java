package banker.banker.transactions;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface transactionsRepo extends JpaRepository<transaction,Integer> {
    @Query("SELECT t from transaction t where account_id=?1")
    Optional<List> findTransByAcct(Integer integer);
}
