package com.wastefood.businessserver.repository;
import com.wastefood.businessserver.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {

    @Query("""
        SELECT COUNT(p)
        FROM Payment p
        WHERE DATE(p.paymentDate) = CURRENT_DATE
    """)
    long countTodayTransactions();

    @Query("""
        SELECT COALESCE(SUM(p.amount), 0)
        FROM Payment p
        WHERE p.status = 'COMPLETED'
    """)
    Double totalRevenue();
}
