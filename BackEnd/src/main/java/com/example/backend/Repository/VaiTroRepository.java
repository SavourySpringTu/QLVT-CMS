package com.example.backend.Repository;

import com.example.backend.Entity.VaiTroEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VaiTroRepository extends JpaRepository<VaiTroEntity,String> {
}
