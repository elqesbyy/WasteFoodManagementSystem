package com.wastefood.businessserver.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "offer_items")
public class OfferItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "offer_id")
    private Offer offer;

    @ManyToOne
    @JoinColumn(name = "food_item_id")
    private FoodItem foodItem;

    private Double quantity;

    private String unit;

    @Column(name = "price_per_unit")
    private Double pricePerUnit;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    // getters & setters
}
