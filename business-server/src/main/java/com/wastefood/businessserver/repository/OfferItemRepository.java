package com.wastefood.businessserver.repository;

import com.wastefood.businessserver.entity.OfferItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferItemRepository extends JpaRepository<OfferItem, Integer> {

    @Query("""
        SELECT COALESCE(SUM(oi.quantity), 0)
        FROM OfferItem oi
        JOIN oi.offer o
        WHERE o.status = 'CLAIMED'
    """)
    Double totalFoodSaved();
}
