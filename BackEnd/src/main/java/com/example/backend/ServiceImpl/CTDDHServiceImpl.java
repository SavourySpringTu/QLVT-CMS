package com.example.backend.ServiceImpl;

import com.example.backend.Entity.CTDDHEntity;
import com.example.backend.Entity.CTDDHID;
import com.example.backend.Repository.CTDDHRepository;
import com.example.backend.Services.CTDDHService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CTDDHServiceImpl implements CTDDHService {
    @Autowired
    private CTDDHRepository ctddhRepository;

    @Override
    public CTDDHEntity findCTDDHbyId(String maddh,String mavt) {
        CTDDHID id = new CTDDHID(maddh,mavt);
        return ctddhRepository.findById(id).get();
    }

    @Override
    public List<CTDDHEntity> getAllCTDDH() {
        return ctddhRepository.findAll();
    }

    @Override
    public CTDDHEntity addCTDDH(CTDDHEntity ctddh) {
        return ctddhRepository.save(ctddh);
    }

    @Override
    public CTDDHEntity updateCTDDH(CTDDHEntity ctddh) {
        return ctddhRepository.save(ctddh);
    }

    @Override
    public void deleteCTDDHbyId(String maddh, String mavt) {
        CTDDHID id = new CTDDHID(maddh,mavt);
        ctddhRepository.deleteById(id);
    }
}
