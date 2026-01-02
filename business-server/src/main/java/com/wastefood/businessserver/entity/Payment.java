package com.wastefood.businessserver.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Column(name = "transaction_id")
    private String transactionId;

    private Double amount;

    private String currency;

    @Enumerated(EnumType.STRING)
    private PaymentStatus status;

    @Column(name = "payment_date")
    private LocalDateTime paymentDate;

    @Column(columnDefinition = "TEXT")
    private String notes;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // getters & setters
}
