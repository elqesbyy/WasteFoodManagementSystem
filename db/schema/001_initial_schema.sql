-- 1. Table: users
-- Description: Stores general user information (Donors, Buyers, Admins).
-- =====================================================
CREATE TABLE users (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       email VARCHAR(255) NOT NULL UNIQUE,
                       password_hash VARCHAR(255) NOT NULL, -- Hashed passwords
                       username VARCHAR(100) UNIQUE,
                       phone_number VARCHAR(20),
                       address TEXT,
                       role ENUM('DONOR', 'BUYER', 'ADMIN') NOT NULL, -- Defines user type
                       profile_image_url VARCHAR(255),
                       is_active BOOLEAN DEFAULT TRUE,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. Table: categories
-- Description: Allows classifying food offers into various categories.
-- =====================================================
CREATE TABLE categories (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            name VARCHAR(100) NOT NULL UNIQUE,
                            description TEXT,
                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Table: food_items
-- Description: Represents a specific food item available for an offer (e.g., "Apples", "Bread").
--              It links to the 'categories' table.
-- =====================================================
CREATE TABLE food_items (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            name VARCHAR(255) NOT NULL,
                            description TEXT,
                            category_id INT,
                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                            FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- 4. Table: offers
-- Description: Represents an entire "offer" bundle or "listing" by a donor.
--              It links to the 'users' table (donor_id).
-- =====================================================
CREATE TABLE offers (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        donor_id INT NOT NULL,
                        title VARCHAR(255) NOT NULL,
                        description TEXT,
                        pickup_location TEXT,
                        available_from DATETIME NOT NULL,
                        available_to DATETIME NOT NULL,
                        status ENUM('AVAILABLE', 'RESERVED', 'CLAIMED', 'EXPIRED', 'CANCELLED') DEFAULT 'AVAILABLE',
                        image_url VARCHAR(255),
                        notes TEXT,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                        FOREIGN KEY (donor_id) REFERENCES users(id)
);

-- 5. Table: offer_items
-- Description: Links an 'offer' to specific 'food_items' and their quantities within that offer.
--              It links to 'offers' and 'food_items' tables.
-- =====================================================
CREATE TABLE offer_items (
                             id INT AUTO_INCREMENT PRIMARY KEY,
                             offer_id INT NOT NULL,
                             food_item_id INT NOT NULL,
                             quantity DECIMAL(10, 2) NOT NULL,
                             unit VARCHAR(50) DEFAULT 'units',
                             price_per_unit DECIMAL(10, 2) NOT NULL,
                             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                             UNIQUE (offer_id, food_item_id), -- Ensures no duplicate food_item within the same offer
                             FOREIGN KEY (offer_id) REFERENCES offers(id) ON DELETE CASCADE,
                             FOREIGN KEY (food_item_id) REFERENCES food_items(id)
);

-- 6. Table: orders
-- Description: Represents a buyer's order for a *single, entire offer*.
--              It links to 'users' (buyer_id) and 'offers' (offer_id).
-- =====================================================
CREATE TABLE orders (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        buyer_id INT NOT NULL,
                        offer_id INT NOT NULL UNIQUE,      -- UNIQUE ensures an offer can only be ordered once
                        order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        total_amount DECIMAL(10, 2) NOT NULL, -- Sum of (price_per_unit * quantity) from offer_items
                        status ENUM('PENDING', 'CONFIRMED', 'PICKED_UP', 'CANCELLED', 'REFUNDED') DEFAULT 'PENDING',
                        payment_status ENUM('PENDING', 'PAID', 'REFUNDED') DEFAULT 'PENDING',
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                        FOREIGN KEY (buyer_id) REFERENCES users(id),
                        FOREIGN KEY (offer_id) REFERENCES offers(id)
);

-- 7. Table: payments
-- Description: Records payment transactions associated with orders.
--              It links to the 'orders' table.
-- =====================================================
CREATE TABLE payments (
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          order_id INT NOT NULL,
                          payment_method VARCHAR(100),
                          transaction_id VARCHAR(255) UNIQUE,
                          amount DECIMAL(10, 2) NOT NULL,
                          currency VARCHAR(3) DEFAULT 'MAD',
                          status ENUM('INITIATED', 'COMPLETED', 'FAILED', 'REFUNDED') NOT NULL,
                          payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                          notes TEXT,
                          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                          FOREIGN KEY (order_id) REFERENCES orders(id)
);

-- 8. Table: system_logs
-- Description: For audit trails, tracking significant system events or admin actions.
--              It links to the 'users' table (optional, for who performed the action).
-- =====================================================
CREATE TABLE system_logs (
                             id INT AUTO_INCREMENT PRIMARY KEY,
                             user_id INT,
                             action_type VARCHAR(100) NOT NULL,
                             entity_type VARCHAR(100),
                             entity_id INT,
                             details TEXT,
                             ip_address VARCHAR(45),
                             timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                             FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 9. Table: notifications
-- Description: To send notifications to users (e.g., "Order Confirmed", "New Offer Available").
--              It links to the 'users' table.
-- =====================================================
CREATE TABLE notifications (
                               id INT AUTO_INCREMENT PRIMARY KEY,
                               user_id INT NOT NULL,
                               message TEXT NOT NULL,
                               type ENUM('ORDER', 'OFFER', 'SYSTEM', 'REMINDER') DEFAULT 'SYSTEM',
                               is_read BOOLEAN DEFAULT FALSE,
                               created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                               FOREIGN KEY (user_id) REFERENCES users(id)
);