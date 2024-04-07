package com.example.backend.ServiceImpl;

import com.example.backend.Entity.VatTuEntity;
import com.example.backend.Repository.VatTuRepository;
import com.example.backend.Services.VatTuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VatTuServiceImpl implements VatTuService {
    @Autowired
    private VatTuRepository vatTuRepository;
    @Override
    public VatTuEntity findVatTubyId(String id) {
        return vatTuRepository.findById(id).orElse(null);
    }

    @Override
    public List<VatTuEntity> getAllVatTu() {
        return vatTuRepository.findAll();
    }

    @Override
    public VatTuEntity addVatTu(VatTuEntity vatTuEntity) {
        return vatTuRepository.save(vatTuEntity);
    }

    @Override
    public VatTuEntity updateVatTu(VatTuEntity vatTuEntity) {
        return vatTuRepository.save(vatTuEntity);
    }

    @Override
    public void deleteVatTubyId(String id) {
        vatTuRepository.deleteById(id);
    }
}
