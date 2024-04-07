package com.example.backend.Controller;

import com.example.backend.Entity.ChiNhanhEntity;
import com.example.backend.Services.ChiNhanhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@RequestMapping("backend/api/chinhanh")
@CrossOrigin(origins = "*")
public class ChiNhanhController {
    @Autowired
    private ChiNhanhService chiNhanhService;

    @RequestMapping(value="/list", method = RequestMethod.GET)
    public ResponseEntity<List<ChiNhanhEntity>> listChiNhanh(){
        List<ChiNhanhEntity> list = chiNhanhService.getAllChiNhanh();
        return ResponseEntity.ok(list);
    }
}
