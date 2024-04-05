package com.example.backend.Service;

import com.example.backend.Entity.PhieuNhapEntity;
import com.example.backend.Entity.PhieuXuatEntity;

import java.util.List;

public interface PhieuNhapService {
    PhieuNhapEntity findPhieuNhapbyId(String id);
    List<PhieuNhapEntity> getAllPhieuNhap();
    PhieuNhapEntity addPhieuNhap(PhieuNhapEntity phieuNhap);
    PhieuNhapEntity updatePhieuNhap(PhieuNhapEntity phieuNhap);
    void deletePhieuNhapbyId(String id);
}
