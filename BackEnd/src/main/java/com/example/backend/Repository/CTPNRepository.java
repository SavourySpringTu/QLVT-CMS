package com.example.backend.Repository;

import com.example.backend.Entity.CTPNEntity;
import com.example.backend.Entity.CTPNID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CTPNRepository extends JpaRepository<CTPNEntity, CTPNID> {
}
