package com.example.backend.Services;

import com.example.backend.Entity.PhieuNhapEntity;

import java.util.List;

public interface PhieuNhapService {
    PhieuNhapEntity findPhieuNhapbyId(String id);
    List<PhieuNhapEntity> getAllPhieuNhap();
    PhieuNhapEntity addPhieuNhap(PhieuNhapEntity phieuNhap);
    PhieuNhapEntity updatePhieuNhap(PhieuNhapEntity phieuNhap);
    void deletePhieuNhapbyId(String id);
}
