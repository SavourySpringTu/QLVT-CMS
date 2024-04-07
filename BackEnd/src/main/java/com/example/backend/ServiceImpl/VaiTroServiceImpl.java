package com.example.backend.ServiceImpl;

import com.example.backend.Entity.VaiTroEntity;
import com.example.backend.Repository.VaiTroRepository;
import com.example.backend.Services.VaiTroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VaiTroServiceImpl implements VaiTroService {
    @Autowired
    private VaiTroRepository vaiTroRepository;
    @Override
    public VaiTroEntity findVaiTrobyId(String id) {
        return vaiTroRepository.findById(id).get();
    }
}
