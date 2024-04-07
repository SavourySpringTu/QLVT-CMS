package com.example.backend.Services;

import com.example.backend.Entity.NhanVienEntity;

import java.util.List;

public interface NhanVienService {
    NhanVienEntity login(String cn,int manv,String password);
    List<NhanVienEntity> listNhanVien();
}
