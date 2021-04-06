package com.scfenzhi.controller;

import com.scfenzhi.pojo.BroadcastData;
import com.scfenzhi.pojo.CommonResult;
import com.scfenzhi.service.BroadcastDataService;
import com.scfenzhi.utils.ResponseCode;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
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
        log.info("接收到的参数为：" + broadcastData);
        return broadcastDataService.addRecord(broadcastData);
    }

    @GetMapping("/getAllDataOfThisMonth")
    public CommonResult<List<BroadcastData>> getAllDataOfThisMonth() {
        return broadcastDataService.getAllDataOfThisMonth();
    }

    @GetMapping(value = "/getCompereNameByCompereId")
    public CommonResult<String> getCompereNameByCompereId(String compereId) {
        log.info("接收到的参数为：" + compereId);
        return broadcastDataService.getCompereNameById(compereId);
    }

    @GetMapping(value = "/getBroadcastDataByCompereId")
    public CommonResult<List<BroadcastData>> getBroadcastDataByCompereId(String compereId) {
        return broadcastDataService.getBroadcastDataByCompereId(compereId);
    }
}
