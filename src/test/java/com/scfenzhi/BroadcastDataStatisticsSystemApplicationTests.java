package com.scfenzhi;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Random;

@SpringBootTest
class BroadcastDataStatisticsSystemApplicationTests {


    public static void main(String[] args) {
        Random random = new Random();

        StringBuilder buffer=new StringBuilder();
        for (int i = 0; i < 12; i++) {
            buffer.append(random.nextInt(10));
        }
        String s = buffer.toString();
        System.out.println(s);
    }

}
