package com.example.backend.Service;

import com.example.backend.Entity.CTDDHEntity;
import com.example.backend.Entity.CTPNEntity;
import com.example.backend.Entity.PhieuNhapEntity;

import java.util.List;

public interface CTPNService {
    CTPNEntity findCTPNbyId(String mapn, String mavt);
    List<CTPNEntity> getAllCTPN();
    CTPNEntity addCTPN(CTPNEntity ctpn);

    CTPNEntity updateCTPN(CTPNEntity ctpn);

    void deleteCTPNbyId(String mapn, String mavt);
}
