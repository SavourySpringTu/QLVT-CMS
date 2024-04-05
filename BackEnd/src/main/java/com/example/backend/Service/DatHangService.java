package com.example.backend.Service;

import com.example.backend.Entity.DatHangEntity;

import java.util.List;

public interface DatHangService {
    DatHangEntity findDatHangbyId(String id);
    List<DatHangEntity> getAllDatHang();
    DatHangEntity addDatHang(DatHangEntity datHang);
    DatHangEntity updateDatHang(DatHangEntity datHang);
    void deleteDatHangbyId(String id);
}
