package banker.banker.transactions;

import org.springframework.data.jpa.repository.JpaRepository;

public interface transactionsRepo extends JpaRepository<transaction,Integer> {
}
