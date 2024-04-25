package com.example.backend.Services;

import com.example.backend.Entity.NhanVienEntity;
import org.json.simple.JSONObject;

import java.util.List;

public interface NhanVienService {
    NhanVienEntity login(String cn,int manv,String password);
    List<JSONObject> listNhanVien();

    NhanVienEntity insertNhanVien(JSONObject nv);
    public void deleteNhanVien(int manv);
}
