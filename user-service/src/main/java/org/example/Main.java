package org.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.Properties;

@SpringBootApplication
public class Main {
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(Main.class);

        Properties properties = new Properties();
        properties.setProperty("spring.datasource.url", "jdbc:mysql://localhost:3306/WasteFoodManagementSystem?createDatabaseIfNotExist=true");
        properties.setProperty("spring.datasource.username", "root");
        properties.setProperty("spring.datasource.password", "root");
        properties.setProperty("spring.datasource.driver-class-name", "com.mysql.cj.jdbc.Driver");
        properties.setProperty("spring.jpa.hibernate.ddl-auto", "update");

        app.setDefaultProperties(properties);
        app.run(args);
    }
}