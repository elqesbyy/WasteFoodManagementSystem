package com.wastefood.businessserver.repository;

import com.wastefood.businessserver.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    long countByIsActiveTrue();

    long countByRole(String role);
}
