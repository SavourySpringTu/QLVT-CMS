package com.example.backend.Repository;

import com.example.backend.Entity.KhoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KhoRepository extends JpaRepository<KhoEntity,String> {
}
