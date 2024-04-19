package com.example.backend.Entity;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name="phieunhap")
@Getter
@Setter
@RequiredArgsConstructor
@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class, property = "mapn")
public class PhieuNhapEntity{
    @Id
    private String MAPN;
    private LocalDate NGAY;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="MANV")
    private NhanVienEntity nhanVienPN;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="MAKHO")
    private KhoEntity khoPN;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="MADDH")
    private DatHangEntity datHangPN;
}
