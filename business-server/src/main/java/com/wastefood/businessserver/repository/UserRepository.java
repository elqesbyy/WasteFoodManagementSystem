package com.wastefood.businessserver.repository;

import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    long countByIsActiveTrue();

    long countByRole(String role);
}
