package banker.banker.bank;

import banker.banker.transactions.transaction;

import javax.persistence.*;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Table
public class account {
    @Id
    @GeneratedValue(strategy = SEQUENCE, generator = "id")
    @SequenceGenerator(name = "id",sequenceName = "id",allocationSize = 1)
    private Integer id;
    private String name;
    private LocalDate creationDate;
    private float amount;
    @Transient
    private int age;
    @OneToMany(mappedBy = "account")
    private List<transaction> transactions;

    public account(String name, LocalDate creationDate,float amount) {
        this.name = name;
        this.creationDate = creationDate;
        this.amount=amount;

    }

    public account() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public int getAge() {
        return Period.between(creationDate,LocalDate.now()).getYears();
    }

    public void setAge(int age) {
        this.age = age;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "account{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", creationDate=" + creationDate +
                ", amount=" + amount +
                ", age=" + age +
                '}';
    }
}
