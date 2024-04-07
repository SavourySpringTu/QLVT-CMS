package com.example.backend.Controller;

import com.example.backend.Entity.PhieuNhapEntity;
import com.example.backend.Services.PhieuNhapService;
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
public class PhieuNhapController{
    @Autowired
    private PhieuNhapService phieuNhapService;

    @RequestMapping(value = "/phieunhap",method = RequestMethod.GET)
    public ResponseEntity<List<PhieuNhapEntity>> getAllPhieuNhap(){
        return new ResponseEntity<List<PhieuNhapEntity>>(phieuNhapService.getAllPhieuNhap(), HttpStatus.OK);
    }

    @RequestMapping(value = "/phieunhap/{id}",method = RequestMethod.GET)
    public ResponseEntity<PhieuNhapEntity> findPhieuNhapbyId(@PathVariable String id){
        return new ResponseEntity<PhieuNhapEntity>(phieuNhapService.findPhieuNhapbyId(id),HttpStatus.OK);
    }

    @RequestMapping(value = "/phieunhap",method = RequestMethod.POST)
    public ResponseEntity<PhieuNhapEntity> addPhieuNhap(@RequestBody PhieuNhapEntity phieuNhap){
        return new ResponseEntity<PhieuNhapEntity>(phieuNhapService.addPhieuNhap(phieuNhap),HttpStatus.OK);
    }

    @RequestMapping(value = "/phieunhap", method = RequestMethod.PUT)
    public ResponseEntity<PhieuNhapEntity> updatePhieuNhap(@RequestBody PhieuNhapEntity phieuNhap){
        return new ResponseEntity<PhieuNhapEntity>(phieuNhapService.updatePhieuNhap(phieuNhap),HttpStatus.OK);
    }

    @RequestMapping(value = "/phieunhap/{id}",method = RequestMethod.DELETE)
    public ResponseEntity<PhieuNhapEntity> deletePhieuNhap(@PathVariable String id){
        PhieuNhapEntity phieuNhap = phieuNhapService.findPhieuNhapbyId(id);
        phieuNhapService.deletePhieuNhapbyId(id);
        return new ResponseEntity<PhieuNhapEntity>(phieuNhap,HttpStatus.OK);
    }
}
