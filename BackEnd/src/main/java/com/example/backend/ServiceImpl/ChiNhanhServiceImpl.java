package com.example.backend.ServiceImpl;

import com.example.backend.Entity.ChiNhanhEntity;
import com.example.backend.Repository.ChiNhanhRepository;
import com.example.backend.Services.ChiNhanhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChiNhanhServiceImpl implements ChiNhanhService {
    @Autowired
    ChiNhanhRepository chiNhanhRepository;

    @Override
    public List<ChiNhanhEntity> getAllChiNhanh() {
        return chiNhanhRepository.findAll();
    }
}
