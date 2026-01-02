package com.wastefood.businessserver.repository;

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
