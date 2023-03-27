package banker.banker.bank;

import banker.banker.transactions.transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import banker.banker.transactions.transactionsRepo;

import javax.transaction.Transactional;
import java.lang.reflect.Array;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static java.time.Month.OCTOBER;


@Service
public class accountService {

    private final accountRepo repo;
    private final transactionsRepo transRepo;

    @Autowired
    public accountService(accountRepo repo, transactionsRepo transRepo) {
        this.repo = repo;
        this.transRepo = transRepo;
    }

    public List getAccounts() {
       return repo.findAll(Sort.by("id"));
    }

    public void addAccount(account body) {
        body.setCreationDate(LocalDate.now());
        repo.save(body);
    }
    public void deleteAccount(int id) {
        repo.deleteById(id);
    }
    @Transactional
    public void updateAccount(int id, String name, float amount) {
        account selectedAccount= repo.findById(id).orElseThrow(()-> new IllegalStateException("account doesn't exist"));
        selectedAccount.setAmount(amount);
    }
    public Optional<List> getTransactions(int id){
        return transRepo.findTransByAcct(id);
    }
    public void addTransaction(transaction body) {
        transRepo.save(body);
    }
}
