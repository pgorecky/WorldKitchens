package com.sigma.worldskitchenserver;

import com.sigma.worldskitchenserver.config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class WorldsKitchenServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(WorldsKitchenServerApplication.class, args);
    }

}
