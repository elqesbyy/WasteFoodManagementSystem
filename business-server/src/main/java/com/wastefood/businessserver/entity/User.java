package com.wastefood.businessserver.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String email;
    private String username;

    @Column(name = "password_hash")
    private String passwordHash;

    private String role;

    @Column(name = "is_active")
    private Boolean isActive;

    // getters & setters
}
