package com.scfenzhi.service;

import com.scfenzhi.pojo.BroadcastData;
import com.scfenzhi.pojo.CommonResult;
import com.scfenzhi.pojo.Compere;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * @author DaiYi
 * @create 2021/4/4
 */
public interface BroadcastDataService {

    CommonResult<List<Compere>> getCompere(String compereId);

    CommonResult<Integer> addRecord(BroadcastData broadcastData);

    CommonResult<List<BroadcastData>> getAllDataOfThisMonth();

    CommonResult<List<BroadcastData>> getBroadcastDataByCompereId(String compereId);

    CommonResult<HashMap<String, ArrayList<HashMap<String, Object>>>> getAllChartDataForThisMonth(String shift,String compereId);
}
