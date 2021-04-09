package com.scfenzhi.controller;

import com.scfenzhi.pojo.BroadcastData;
import com.scfenzhi.pojo.CommonResult;
import com.scfenzhi.pojo.Compere;
import com.scfenzhi.service.BroadcastDataService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * @author DaiYi
 * @Date 2021/4/2 9:58
 */
@RestController
@Slf4j
@Validated
@RequestMapping("/broadcastData")
public class BroadcastDataController {

    @Resource
    private BroadcastDataService broadcastDataService;

    @PostMapping("/addRecord")
    public CommonResult<Integer> addRecord(@RequestBody BroadcastData broadcastData) {
        log.info("the broadcastData is：" + broadcastData);
        return broadcastDataService.addRecord(broadcastData);
    }

    @GetMapping("/getAllDataOfThisMonth")
    public CommonResult<List<BroadcastData>> getAllDataOfThisMonth() {
        return broadcastDataService.getAllDataOfThisMonth();
    }

    @GetMapping(value = "/getCompere")
    public CommonResult<List<Compere>> getCompere(@RequestParam(value = "compereId", required = false) String compereId) {
        log.info("the compereId is：" + compereId);
        return broadcastDataService.getCompere(compereId);
    }

    @GetMapping(value = "/getBroadcastDataByCompereId")
    public CommonResult<List<BroadcastData>> getBroadcastDataByCompereId(@RequestParam("compereId") String compereId) {
        log.info("the compereId is：" + compereId);
        return broadcastDataService.getBroadcastDataByCompereId(compereId);
    }


    @GetMapping("/getAllChartDataOfThisMonth")
    public CommonResult<HashMap<String, ArrayList<HashMap<String, Object>>>> getAllChartDataOfThisMonth(@RequestParam(value = "shift", required = false) String shift, @RequestParam(value = "compereId", required = false) String compereId) {
        log.info("the shift is:" + shift + ",the compereId is:" + compereId);
        return broadcastDataService.getAllChartDataForThisMonth(shift, compereId);
    }
}
