package com.example.backend.Controller;

import com.example.backend.Entity.DatHangEntity;
import com.example.backend.Service.DatHangService;
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
public class DatHangController {
    @Autowired
    private DatHangService datHangService;

    @RequestMapping(value = "/dathang",method = RequestMethod.GET)
    public ResponseEntity<List<DatHangEntity>> getAll(){
        System.out.println("toi day");
        List<DatHangEntity> list = datHangService.getAllDatHang();
        if(list.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<DatHangEntity>>(list, HttpStatus.OK);
    }
    @RequestMapping(value ="/dathang/{madhFind}", method = RequestMethod.GET)
    public ResponseEntity<DatHangEntity> findbyId(@PathVariable String madhFind){
        return new ResponseEntity<DatHangEntity>(datHangService.findDatHangbyId(madhFind),HttpStatus.OK);
    }

    @RequestMapping(value = "/dathang", method = RequestMethod.POST)
    public ResponseEntity<DatHangEntity> addDatHang (@RequestBody DatHangEntity datHang){
        return new ResponseEntity<DatHangEntity>(datHangService.addDatHang(datHang),HttpStatus.OK);
    }

    @RequestMapping(value = "/dathang/{id}", method = RequestMethod.PUT)
    public ResponseEntity<DatHangEntity> updateDatHang(@RequestBody DatHangEntity datHang){
        return new ResponseEntity<DatHangEntity>(datHangService.updateDatHang(datHang),HttpStatus.OK);
    }

    @RequestMapping(value = "/dathang/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<DatHangEntity> deleteDatHang(@PathVariable String id){
        DatHangEntity datHang = datHangService.findDatHangbyId(id);
        datHangService.deleteDatHangbyId(id);
        return new ResponseEntity<DatHangEntity>(datHang,HttpStatus.OK);
    }
}
