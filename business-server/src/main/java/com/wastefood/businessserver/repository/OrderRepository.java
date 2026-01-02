package com.wastefood.businessserver.repository;
import com.wastefood.businessserver.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

    @Query("""
        SELECT COUNT(o)
        FROM Order o
        WHERE DATE(o.orderDate) = CURRENT_DATE
    """)
    long countOrdersToday();

    long countByStatus(String status);
}
