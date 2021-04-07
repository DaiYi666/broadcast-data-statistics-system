package com.scfenzhi.controller;

import com.scfenzhi.mapper.BroadcastDataMapper;
import com.scfenzhi.pojo.BroadcastData;
import com.scfenzhi.pojo.CommonResult;
import com.scfenzhi.service.BroadcastDataService;
import com.scfenzhi.utils.DataParser;
import com.scfenzhi.utils.ResponseCode;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
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

    @GetMapping(value = "/getCompereNameByCompereId")
    public CommonResult<String> getCompereNameByCompereId(String compereId) {
        log.info("the compereId is：" + compereId);
        return broadcastDataService.getCompereNameById(compereId);
    }

    @GetMapping(value = "/getBroadcastDataByCompereId")
    public CommonResult<List<BroadcastData>> getBroadcastDataByCompereId(String compereId) {
        log.info("the compereId is：" + compereId);
        return broadcastDataService.getBroadcastDataByCompereId(compereId);
    }


    @GetMapping("/getAllTheChartDataForThisMonthByShift")
    public CommonResult<HashMap<String, ArrayList<HashMap<String, Object>>>> getAllTheChartDataForThisMonthByShift(@RequestParam(value = "shift", required = false) String shift) {
        log.info("the shift is:" + shift);
        return broadcastDataService.getAllTheChartDataForThisMonthByShift(shift);
    }

}
