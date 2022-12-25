package banker.banker.bank;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import banker.banker.transactions.*;


import java.time.LocalDate;
import java.util.List;

import static java.time.Month.*;

@Configuration
public class accountConfig {

    @Bean
    CommandLineRunner commandLineRunner(accountRepo repo,transactionsRepo transRepo){
        return  args -> {
            account check=new account("checking", LocalDate.of(2022, OCTOBER,26),100);
            account saving=new account("savings",LocalDate.of(2022,OCTOBER,26),0);
            repo.saveAll(List.of(check,saving));
            transaction dep=new transaction(200,false,1);
            transaction with=new transaction(100,true,2);
            transRepo.saveAll(List.of(dep,with));
        };
    }
}
