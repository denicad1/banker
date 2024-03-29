package banker.banker.bank;

import banker.banker.transactions.transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="/accounts")
public class accountController {

    private final accountService accountService;
    @Autowired

    public accountController(accountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping()
    public List getAccounts(){
       return (List) accountService.getAccounts();
    }
    @PostMapping(value="/add")
    public void addAccount(@RequestBody account body){
        accountService.addAccount(body);
    }
    @DeleteMapping(path="/{id}")
    public void deleteAccount(@PathVariable("id") int id){
        accountService.deleteAccount(id);
    }
    @PutMapping(value="/{id}")
    public void updateAccount(@PathVariable("id")int id,
                              @RequestParam(required = false)String name,
                              @RequestParam(required = false)float amount){
        accountService.updateAccount(id,name,amount);
    }
    @GetMapping(value = "/transactions/{id}")
    public Optional<List> getTransactions(@PathVariable("id") int id){
        return accountService.getTransactions(id);
    }
    @PostMapping(value="/transactions/{id}/add", consumes = "application/json")
    public void addTransaction(@RequestBody transaction body){
        accountService.addTransaction(body);
    }
}
