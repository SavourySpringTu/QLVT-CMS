package com.example.backend.Service;

import com.example.backend.Entity.VatTuEntity;

import java.util.List;

public interface VatTuService {
    VatTuEntity findVatTubyId(String id);
    List<VatTuEntity> getAllVatTu();
    VatTuEntity addVatTu(VatTuEntity vatTuEntity);
    VatTuEntity updateVatTu(VatTuEntity vatTuEntity);
    void deleteVatTubyId(String id);
}
