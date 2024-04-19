package com.example.backend.Entity;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name="phieuxuat")
@Getter
@Setter
@RequiredArgsConstructor
@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class, property = "mapx")
public class PhieuXuatEntity{
    @Id
    private String MAPX;
    private LocalDate NGAY;
    private String HOTENKH;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="MANV")
    private NhanVienEntity nhanVienPX;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="MAKHO")
    private KhoEntity khoPX;
}
