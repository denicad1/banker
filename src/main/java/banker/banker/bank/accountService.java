package banker.banker.bank;

import antlr.collections.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import banker.banker.transactions.transactionsRepo;

import java.lang.reflect.Array;
import java.util.ArrayList;


@Service
public class accountService {

    private final accountRepo repo;
    private final transactionsRepo transRepo;

    @Autowired
    public accountService(accountRepo repo, transactionsRepo transRepo) {
        this.repo = repo;
        this.transRepo = transRepo;
    }

    public ArrayList getAccounts() {
        ArrayList accounts= (ArrayList) repo.findAll();
        ArrayList transactions= (ArrayList) transRepo.findAll();
        ArrayList actsTrans = new ArrayList();
        actsTrans.add(accounts);
        actsTrans.add(transactions);
       return actsTrans;
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
