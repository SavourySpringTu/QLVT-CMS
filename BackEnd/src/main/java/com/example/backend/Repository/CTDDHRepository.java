package com.example.backend.Repository;

import com.example.backend.Entity.CTDDHEntity;
import com.example.backend.Entity.CTDDHID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CTDDHRepository extends JpaRepository<CTDDHEntity, CTDDHID> {
}
