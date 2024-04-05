package com.example.backend.Repository;

import com.example.backend.Entity.ChiNhanhEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  ChiNhanhRepository extends JpaRepository<ChiNhanhEntity,String> {
}
