package com.scfenzhi.service;

import com.scfenzhi.pojo.BroadcastData;
import com.scfenzhi.pojo.CommonResult;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

/**
 * @author DaiYi
 * @create 2021/4/4
 */
public interface BroadcastDataService {

    CommonResult<String> getCompereNameById(String compereId);

    CommonResult<Integer> addRecord(BroadcastData broadcastData);

    CommonResult<List<BroadcastData>> getAllDataOfThisMonth();
}
