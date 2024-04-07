package com.example.backend.Controller;

import com.example.backend.Entity.CTDDHEntity;
import com.example.backend.Services.CTDDHService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@RequestMapping("/backend")
public class CTDDHController {
    @Autowired
    private CTDDHService ctddhService;

    @RequestMapping(value = "/ctddh", method = RequestMethod.GET)
    public ResponseEntity<List<CTDDHEntity>> listAllCTDDH(){
        List<CTDDHEntity> listCTDDH = ctddhService.getAllCTDDH();
        if(listCTDDH.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<CTDDHEntity>>(listCTDDH, HttpStatus.OK);
    }
    @RequestMapping(value = "/ctddh/{maddhFind},{mavtFind}",method = RequestMethod.GET)
    public ResponseEntity<CTDDHEntity> findCTDDH(@PathVariable String maddhFind,@PathVariable String mavtFind){
        return new ResponseEntity<>(ctddhService.findCTDDHbyId(maddhFind,mavtFind),HttpStatus.OK);
    }
    @RequestMapping(value = "/ctddh",method = RequestMethod.POST)
    public ResponseEntity<CTDDHEntity> addCTDDH(@RequestBody CTDDHEntity ctddh){
        return new ResponseEntity<>(ctddhService.addCTDDH(ctddh),HttpStatus.OK);
    }
    @RequestMapping(value = "/ctddh",method = RequestMethod.PUT)
    public ResponseEntity<CTDDHEntity> updateCTDDH(@RequestBody CTDDHEntity ctddh){
        return new ResponseEntity<>(ctddhService.updateCTDDH(ctddh),HttpStatus.OK);
    }
    @RequestMapping(value = "/ctddh/{maddhDelete},{mavtDelete}",method = RequestMethod.DELETE)
    public ResponseEntity<CTDDHEntity> deleteCTDDH(@PathVariable String maddhDelete,@PathVariable String mavtDelete){
        CTDDHEntity ctddh = ctddhService.findCTDDHbyId(maddhDelete,mavtDelete);
        ctddhService.deleteCTDDHbyId(maddhDelete,mavtDelete);
        return new ResponseEntity<>(ctddh,HttpStatus.OK);
    }
}
