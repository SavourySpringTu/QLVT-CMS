package com.example.backend.Repository;

import com.example.backend.Entity.DatHangEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DatHangRepository extends JpaRepository<DatHangEntity,String> {
}
