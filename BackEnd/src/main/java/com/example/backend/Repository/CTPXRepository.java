package com.example.backend.Repository;

import com.example.backend.Entity.CTPXEntity;
import com.example.backend.Entity.CTPXID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CTPXRepository extends JpaRepository<CTPXEntity, CTPXID> {
}
