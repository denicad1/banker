package banker.banker.bank;

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
    @GetMapping(value = "/transactions")
    public Optional<List> getTransactions(int id){
        return accountService.getTransactions(id);
    }
}
