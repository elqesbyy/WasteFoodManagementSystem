package com.wastefood.businessserver.repository;

import com.wastefood.businessserver.entity.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferRepository extends JpaRepository<Offer, Integer> {

    long countByStatus(String status);

    @Query("""
        SELECT COUNT(o)
        FROM Offer o
        WHERE o.availableTo < CURRENT_TIMESTAMP
    """)
    long countExpiredOffers();
}
