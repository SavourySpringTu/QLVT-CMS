package com.example.backend.Controller;

import com.example.backend.Entity.CTPNEntity;
import com.example.backend.Services.CTPNService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@RequestMapping("/backend")
public class CTPNController {
    @Autowired
    private CTPNService ctpnService;
    @RequestMapping(value = "/ctpn",method = RequestMethod.GET)
    public ResponseEntity<List<CTPNEntity>> getAllCTPN(){
        List<CTPNEntity> list = ctpnService.getAllCTPN();
        if(list.isEmpty()==true){
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<CTPNEntity>>(list,HttpStatus.OK);
    }
}
