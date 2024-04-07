package com.example.backend.ServiceImpl;

import com.example.backend.Entity.DatHangEntity;
import com.example.backend.Repository.DatHangRepository;
import com.example.backend.Services.DatHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DatHangServiceImpl implements DatHangService {
    @Autowired
    private DatHangRepository datHangRepository;
    @Override
    public DatHangEntity findDatHangbyId(String id) {
        return datHangRepository.findById(id).get();
    }

    @Override
    public List<DatHangEntity> getAllDatHang() {
        return datHangRepository.findAll();
    }

    @Override
    public DatHangEntity addDatHang(DatHangEntity datHang) {
        return datHangRepository.save(datHang);
    }

    @Override
    public DatHangEntity updateDatHang(DatHangEntity datHang) {
        return datHangRepository.save(datHang);
    }

    @Override
    public void deleteDatHangbyId(String id) {
        datHangRepository.deleteById(id);
    }
}
