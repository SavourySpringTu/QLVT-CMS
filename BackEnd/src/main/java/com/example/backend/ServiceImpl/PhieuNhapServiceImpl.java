package com.example.backend.ServiceImpl;

import com.example.backend.Entity.PhieuNhapEntity;
import com.example.backend.Repository.PhieuNhapRepository;
import com.example.backend.Services.PhieuNhapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhieuNhapServiceImpl implements PhieuNhapService {
    @Autowired
    private PhieuNhapRepository phieuNhapRepository;
    @Override
    public PhieuNhapEntity findPhieuNhapbyId(String id) {
        return phieuNhapRepository.findById(id).get();
    }

    @Override
    public List<PhieuNhapEntity> getAllPhieuNhap() {
        return phieuNhapRepository.findAll();
    }

    @Override
    public PhieuNhapEntity addPhieuNhap(PhieuNhapEntity phieuNhap) {
        return phieuNhapRepository.save(phieuNhap);
    }

    @Override
    public PhieuNhapEntity updatePhieuNhap(PhieuNhapEntity phieuNhap) {
        return phieuNhapRepository.save(phieuNhap);
    }

    @Override
    public void deletePhieuNhapbyId(String id) {
        phieuNhapRepository.deleteById(id);
    }
}
