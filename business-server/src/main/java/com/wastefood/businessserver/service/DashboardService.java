package com.wastefood.businessserver.service;

import com.wastefood.businessserver.dto.DashboardDTO;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    // TODO: inject repositories for User, Offer, Order

    public DashboardDTO getDashboardData() {
        // For now, just dummy data
        return new DashboardDTO(100, 50, 200);
    }
}
