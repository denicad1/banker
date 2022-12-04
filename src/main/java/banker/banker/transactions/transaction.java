package banker.banker.transactions;

import banker.banker.bank.account;

import javax.persistence.*;
import java.time.LocalDate;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Table
public class transaction {
    @Id
    @SequenceGenerator(name="transID", sequenceName = "transID", initialValue = 1 ,allocationSize = 1)
    @GeneratedValue(strategy = SEQUENCE, generator = "transID")
    private int id;
    private LocalDate transDate;
    private int amount;
    private boolean withdraw;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private account account;

    public banker.banker.bank.account getAccount() {
        return account;
    }

    public void setAccount(banker.banker.bank.account account) {
        this.account = account;
    }

    public transaction(int amount, boolean withdraw) {
        this.amount = amount;
        this.withdraw = withdraw;
    }
    public transaction() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDate getTransDate() {
        return transDate;
    }

    public void setTransDate(LocalDate transDate) {
        this.transDate = transDate;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public boolean isWithdraw() {
        return withdraw;
    }

    public void setWithdraw(boolean withdraw) {
        this.withdraw = withdraw;
    }

    @Override
    public String toString() {
        return "transaction{" +
                "id=" + id +
                ", transDate=" + transDate +
                ", amount=" + amount +
                ", withdraw=" + withdraw +
                '}';
    }
}
