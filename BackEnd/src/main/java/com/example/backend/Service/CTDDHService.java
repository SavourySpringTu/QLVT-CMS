package com.example.backend.Service;

import com.example.backend.Entity.CTDDHEntity;

import java.util.List;

public interface CTDDHService {
    CTDDHEntity findCTDDHbyId(String maddh,String mavt);
    List<CTDDHEntity> getAllCTDDH();
    CTDDHEntity addCTDDH(CTDDHEntity ctddh);
    CTDDHEntity updateCTDDH(CTDDHEntity ctddh);
    void deleteCTDDHbyId(String maddh,String mavt);
}
