package com.wastefood.businessserver.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "offers")
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "donor_id")
    private User donor;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "pickup_location", columnDefinition = "TEXT")
    private String pickupLocation;

    @Column(name = "available_from")
    private LocalDateTime availableFrom;

    @Column(name = "available_to")
    private LocalDateTime availableTo;

    @Enumerated(EnumType.STRING)
    private OfferStatus status;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(columnDefinition = "TEXT")
    private String notes;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // getters & setters
}
