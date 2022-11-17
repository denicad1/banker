package banker.banker.bank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class accountService {

    private final accountRepo repo;

    @Autowired
    public accountService(accountRepo repo) {
        this.repo = repo;
    }

    public List<account> getAccounts() {
       return repo.findAll();
    }

    public void addAccount(account body) {
        repo.save(body);
    }
    public void deleteAccount(int id) {
        repo.deleteById(id);
    }

    public void updateAccount(int id, String name, float amount) {
        account selectedAccount= repo.findById(id).orElseThrow(()-> new IllegalStateException("account doesn't exist"));

    }
}
