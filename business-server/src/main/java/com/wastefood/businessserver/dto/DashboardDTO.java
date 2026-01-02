package com.wastefood.businessserver.dto;

public class DashboardDTO {
    private long totalUsers;
    private long totalOffers;
    private long totalOrders;

    // Constructor
    public DashboardDTO(long totalUsers, long totalOffers, long totalOrders) {
        this.totalUsers = totalUsers;
        this.totalOffers = totalOffers;
        this.totalOrders = totalOrders;
    }

    // Getters and setters
    public long getTotalUsers() { return totalUsers; }
    public void setTotalUsers(long totalUsers) { this.totalUsers = totalUsers; }

    public long getTotalOffers() { return totalOffers; }
    public void setTotalOffers(long totalOffers) { this.totalOffers = totalOffers; }

    public long getTotalOrders() { return totalOrders; }
    public void setTotalOrders(long totalOrders) { this.totalOrders = totalOrders; }
}
