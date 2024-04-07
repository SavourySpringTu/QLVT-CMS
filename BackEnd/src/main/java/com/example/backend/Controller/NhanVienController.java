package com.example.backend.Controller;

import com.example.backend.Entity.NhanVienEntity;
import com.example.backend.Services.NhanVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("backend/api/nhanvien")
@CrossOrigin(origins = "*")
public class NhanVienController {
    @Autowired
    private NhanVienService nhanVienService;

    @RequestMapping(value ="/login", method = RequestMethod.POST)
    public ResponseEntity<NhanVienEntity> login(@RequestBody NhanVienEntity nhanvien){
        System.out.println(nhanvien.getMANV());
        System.out.println(nhanvien.getMATKHAU());
        System.out.println(nhanvien.getChiNhanhNV().getMACN());
        NhanVienEntity tmp = nhanVienService.login(String.valueOf(nhanvien.getChiNhanhNV().getMACN()),nhanvien.getMANV(),nhanvien.getMATKHAU());
        if(tmp==null){
            return new ResponseEntity("Failed", HttpStatus.OK);
        }
        return new ResponseEntity(tmp, HttpStatus.OK);
    }
    @RequestMapping(value="/list", method = RequestMethod.GET)
    public ResponseEntity<List<NhanVienEntity>> listNhanVien(){
        List<NhanVienEntity> list = nhanVienService.listNhanVien();
        return ResponseEntity.ok(list);
    }
}