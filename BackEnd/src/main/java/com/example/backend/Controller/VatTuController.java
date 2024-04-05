package com.example.backend.Controller;

import com.example.backend.Entity.VatTuEntity;
import com.example.backend.Service.VatTuService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@Controller
@RequestMapping("/backend")
public class VatTuController {
    @Autowired
    private VatTuService vatTuService;

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/vattu", method = RequestMethod.GET)
    public ResponseEntity<List<VatTuEntity>> listAllVatTu(){
        List<VatTuEntity> listContact = vatTuService.getAllVatTu();
        if(listContact.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<VatTuEntity>>(listContact, HttpStatus.OK);
    }
    @RequestMapping(value = "/vattu", method = RequestMethod.POST)
    public ResponseEntity<VatTuEntity> addVatTu( @RequestBody VatTuEntity vatTu){
        return new ResponseEntity(vatTuService.addVatTu(vatTu),HttpStatus.OK);
    }
    @RequestMapping(value = "/vattu/{id}", method = RequestMethod.GET)
    public ResponseEntity<VatTuEntity> findVatTu(@PathVariable String id){
        return new ResponseEntity<>(vatTuService.findVatTubyId(id),HttpStatus.OK);
    }
    @RequestMapping(value = "/vattu/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<VatTuEntity> deleteVatTu(@PathVariable String id){
        VatTuEntity vt = vatTuService.findVatTubyId(id);
        vatTuService.deleteVatTubyId(id);
        return new ResponseEntity<>(vt,HttpStatus.OK);
    }
    @RequestMapping(value = "/vattu", method = RequestMethod.PUT)
    public ResponseEntity<VatTuEntity> updateVatTu(@RequestBody VatTuEntity vattu){
        System.out.println(vattu.getMAVT());
        return new ResponseEntity<>(vatTuService.updateVatTu(vattu),HttpStatus.OK);
    }
}
