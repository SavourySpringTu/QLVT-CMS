package com.example.backend.ServiceImpl;

import com.example.backend.Entity.ChiNhanhEntity;
import com.example.backend.Entity.NhanVienEntity;
import com.example.backend.Entity.VaiTroEntity;
import com.example.backend.Repository.ChiNhanhRepository;
import com.example.backend.Repository.NhanVienRepository;
import com.example.backend.Repository.VaiTroRepository;
import com.example.backend.Services.NhanVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.json.simple.JSONObject;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class NhanVienServiceImpl implements NhanVienService {
    @Autowired
    private NhanVienRepository nhanVienRepository;
    @Autowired
    private ChiNhanhRepository chiNhanhRepository;
    @Autowired
    private VaiTroRepository vaiTroRepository;

    @Override
    public NhanVienEntity login(String cn, int manv, String password) {
        NhanVienEntity tmp = nhanVienRepository.findById(manv).orElse(null);
        if(tmp == null){
            return null;
        }else{
            if(tmp.getChiNhanhNV().getMACN().equals(cn)==true && tmp.getMATKHAU().equals(password)==true){

                return tmp;
            }else{
                return null;
            }
        }
    }

    @Override
    public List<JSONObject> listNhanVien() {
        List<NhanVienEntity> nv = nhanVienRepository.findAll();
        List<JSONObject> nvOj = new ArrayList<>();
        for(NhanVienEntity i :nv){
            JSONObject a = new JSONObject();
            a .put("macn",i.getChiNhanhNV().getMACN());
            a .put("diachi",i.getDIACHI());
            a .put("luong",i.getLUONG());
            a .put("ngaysinh",i.getNGAYSINH());
            a .put("socmnd",i.getSOCMND());
            a .put("maquyen",i.getVaiTroNV().getMAQUYEN());
            a .put("trangthai",i.isTRANGTHAI());
            a .put("hoten",i.getHOTEN());
            a .put("manv",i.getMANV());
            nvOj.add(a);
        }
        System.gc();
        return nvOj;
    }
    @Override
    public NhanVienEntity insertNhanVien(JSONObject nhanvien){
        ChiNhanhEntity cn = chiNhanhRepository.findById(String.valueOf(nhanvien.get("macn"))).orElse(null);
        VaiTroEntity vt = vaiTroRepository.findById(String.valueOf(nhanvien.get("maquyen"))).orElse(null);
        NhanVienEntity result = new NhanVienEntity(
                (String) nhanvien.get("hoten"),
                (String) nhanvien.get("socmnd"),
                (String) nhanvien.get("diachi"),
                LocalDate.parse((CharSequence) nhanvien.get("ngaysinh")),
                Integer.parseInt((String) nhanvien.get("luong")),
                Boolean.valueOf((String) nhanvien.get("trangthai")),
                (String)nhanvien.get("matkhau"),
                cn,
                vt);
        return nhanVienRepository.save(result);
    }

    @Override
    public void deleteNhanVien(int manv){
        nhanVienRepository.deleteById(manv);
    }
}
