package com.scfenzhi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class BroadcastDataStatisticsSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(BroadcastDataStatisticsSystemApplication.class, args);
    }

}
