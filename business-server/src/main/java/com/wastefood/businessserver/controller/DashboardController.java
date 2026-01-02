package com.wastefood.businessserver.controller;
import com.wastefood.businessserver.dto.DashboardDTO;
import com.wastefood.businessserver.repository.*;
import com.wastefood.businessserver.service.DashboardService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.Map;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final UserRepository userRepository;
    private final OfferRepository offerRepository;
    private final OfferItemRepository offerItemRepository;
    private final OrderRepository orderRepository;
    private final PaymentRepository paymentRepository;

    public DashboardController(
            UserRepository userRepository,
            OfferRepository offerRepository,
            OfferItemRepository offerItemRepository,
            OrderRepository orderRepository,
            PaymentRepository paymentRepository) {

        this.userRepository = userRepository;
        this.offerRepository = offerRepository;
        this.offerItemRepository = offerItemRepository;
        this.orderRepository = orderRepository;
        this.paymentRepository = paymentRepository;
    }

    @GetMapping
    public Map<String, Object> getDashboardStats() {


        return Map.ofEntries(
                Map.entry("totalUsers", userRepository.count()),
                Map.entry("activeUsers", userRepository.countByIsActiveTrue()),
                Map.entry("donors", userRepository.countByRole("DONOR")),
                Map.entry("buyers", userRepository.countByRole("BUYER")),
                Map.entry("totalOffers", offerRepository.count()),
                Map.entry("availableOffers", offerRepository.countByStatus("AVAILABLE")),
                Map.entry("claimedOffers", offerRepository.countByStatus("CLAIMED")),
                Map.entry("expiredOffers", offerRepository.countByStatus("EXPIRED")),
                Map.entry("totalFoodSaved", offerItemRepository.totalFoodSaved()),
                Map.entry("totalOrders", orderRepository.count()),
                Map.entry("ordersToday", orderRepository.countOrdersToday()),
                Map.entry("transactionsToday", paymentRepository.countTodayTransactions()),
                Map.entry("totalRevenue", paymentRepository.totalRevenue())
        );
    }
}

