package com.scfenzhi.service.impl;

import com.scfenzhi.mapper.BroadcastDataMapper;
import com.scfenzhi.pojo.BroadcastData;
import com.scfenzhi.pojo.CommonResult;
import com.scfenzhi.service.BroadcastDataService;
import com.scfenzhi.utils.DataParser;
import com.scfenzhi.utils.ResponseCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * @author DaiYi
 * @create 2021/4/4
 */

@Slf4j
@Service
public class BroadcastDataServiceImpl implements BroadcastDataService {

    @Resource
    private BroadcastDataMapper broadcastDataMapper;

    @Override
    public CommonResult<String> getCompereNameById(String compereId) {
        CommonResult<String> commonResult = new CommonResult<>();
        String compereName = broadcastDataMapper.getCompereNameById(compereId);
        if (compereName != null) {
            commonResult.setResponseCode(ResponseCode.SUCCESSFUL);
            commonResult.setData(compereName);
        } else {
            commonResult.setResponseCode(ResponseCode.FAILED);
        }
        return commonResult;
    }

    @Override
    public CommonResult<Integer> addRecord(BroadcastData broadcastData) {
        CommonResult<Integer> commonResult = new CommonResult<>();
        if (broadcastDataMapper.isRepeatAdd(broadcastData.getDate(), broadcastData.getCompereId())) {
            commonResult.setResponseCode(ResponseCode.REPEAT_ADD);
            commonResult.setData(0);
        } else {
            Integer count = broadcastDataMapper.addRecord(broadcastData);
            if (count > 0) {
                commonResult.setResponseCode(ResponseCode.SUCCESSFUL);
                commonResult.setData(count);
            } else {
                commonResult.setResponseCode(ResponseCode.FAILED);
                commonResult.setData(0);
            }
        }
        return commonResult;
    }

    @Override
    public CommonResult<List<BroadcastData>> getAllDataOfThisMonth() {
        CommonResult<List<BroadcastData>> commonResult = new CommonResult<>();
        List<BroadcastData> allDataOfThisMonth = broadcastDataMapper.getAllTheChartDataForThisMonthByShift(null);
        commonResult.setData(allDataOfThisMonth);
        commonResult.setResponseCode(ResponseCode.SUCCESSFUL);
        return commonResult;
    }

    @Override
    public CommonResult<List<BroadcastData>> getBroadcastDataByCompereId(String compereId) {
        CommonResult<List<BroadcastData>> commonResult = new CommonResult<>();
        List<BroadcastData> broadcastDataList = broadcastDataMapper.getBroadcastDataByCompereId(compereId);
        commonResult.setData(broadcastDataList);
        commonResult.setResponseCode(ResponseCode.SUCCESSFUL);
        return commonResult;
    }

    @Override
    public CommonResult<HashMap<String, ArrayList<HashMap<String, Object>>>> getAllTheChartDataForThisMonthByShift(String shift) {
        CommonResult<HashMap<String, ArrayList<HashMap<String, Object>>>> commonResult = new CommonResult<>();
        commonResult.setResponseCode(ResponseCode.SUCCESSFUL);
        List<BroadcastData> allDataOfThisMonth = broadcastDataMapper.getAllTheChartDataForThisMonthByShift(shift);
        HashMap<String, ArrayList<HashMap<String, Object>>> resultSet = DataParser.parse(allDataOfThisMonth);
        commonResult.setData(resultSet);
        return commonResult;
    }


//    @Scheduled(cron = "0 0 23 * * *")
//    public void updateData() {
//        List<Compere> compereList = broadcastDataMapper.getCompereList();
//        BroadcastData broadcastData = new BroadcastData();
//        String date = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
//        for (Compere compere : compereList) {
//            broadcastData.setCompereId(compere.getCompereId());
//            broadcastData.setCompereName(compere.getCompereName());
//            broadcastData.setShift("other");
//            broadcastData.setPaidOrders(0);
//            broadcastData.setPaidAmount(0.0);
//            broadcastData.setOrdersPv(0.0);
//            broadcastData.setOrdersPv(0.0);
//            broadcastData.setDate(date);
//            broadcastData.setIncreasedAttention(0);
//            broadcastData.setShareStudio(0);
//            broadcastDataMapper.addRecord(broadcastData);
//        }
//    }


}
