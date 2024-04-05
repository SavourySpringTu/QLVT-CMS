package com.example.backend.Repository;

import com.example.backend.Entity.NhanVienEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NhanVienRepository extends JpaRepository<NhanVienEntity,Integer> {
}
