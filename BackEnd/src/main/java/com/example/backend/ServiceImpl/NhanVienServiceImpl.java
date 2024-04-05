package com.example.backend.ServiceImpl;

import com.example.backend.Entity.NhanVienEntity;
import com.example.backend.Repository.NhanVienRepository;
import com.example.backend.Service.NhanVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NhanVienServiceImpl implements NhanVienService {
    @Autowired
    private NhanVienRepository nhanVienRepository;

    @Override
    public NhanVienEntity login(String cn, int manv, String password) {
        NhanVienEntity tmp = nhanVienRepository.findById(manv).orElse(null);
        if(tmp == null){
            return null;
        }else{
            if(tmp.getChiNhanhNV().getMACN().equals(cn)==true && tmp.getPASSWORD().equals(password)==true){
                return tmp;
            }else{
                return null;
            }
        }
    }

    @Override
    public List<NhanVienEntity> listNhanVien() {
        return nhanVienRepository.findAll();
    }
}
