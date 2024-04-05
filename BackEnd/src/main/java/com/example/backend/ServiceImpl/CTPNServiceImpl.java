package com.example.backend.ServiceImpl;

import com.example.backend.Entity.CTPNEntity;
import com.example.backend.Entity.CTPNID;
import com.example.backend.Repository.CTPNRepository;
import com.example.backend.Service.CTPNService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CTPNServiceImpl implements CTPNService {
    @Autowired
    private CTPNRepository ctpnRepository;
    @Override
    public CTPNEntity findCTPNbyId(String mapn, String mavt) {
        CTPNID id = new CTPNID(mapn,mavt);
        return ctpnRepository.findById(id).get();
    }

    @Override
    public List<CTPNEntity> getAllCTPN() {
        return ctpnRepository.findAll();
    }

    @Override
    public CTPNEntity addCTPN(CTPNEntity ctpn) {
        return ctpnRepository.save(ctpn);
    }

    @Override
    public CTPNEntity updateCTPN(CTPNEntity ctpn) {
        return ctpnRepository.save(ctpn);
    }

    @Override
    public void deleteCTPNbyId(String mapn, String mavt) {
        CTPNID id = new CTPNID(mapn,mavt);
        ctpnRepository.deleteById(id);
    }
}
