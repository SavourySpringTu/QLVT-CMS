package com.example.backend.Entity;

import com.fasterxml.jackson.annotation.*;
import com.example.backend.Entity.ChiNhanhEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name="nhanvien")
@Getter
@Setter
@RequiredArgsConstructor
@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class, property = "manv")
public class NhanVienEntity{
    @Id
    private int MANV;
    private String HOTEN;
    private String SOCMND;
    private String DIACHI;
    private LocalDate NGAYSINH;
    private int LUONG;
    private boolean TRANGTHAI;
    private String MATKHAU;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="MACN")
    private ChiNhanhEntity chiNhanhNV;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="MAQUYEN")
    private VaiTroEntity vaiTroNV;

    @OneToMany(mappedBy="datHangNV",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<DatHangEntity> datHangList;

    @OneToMany(mappedBy="nhanVienPN",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<PhieuNhapEntity> phieuNhapList;

    @OneToMany(mappedBy="nhanVienPX",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<PhieuXuatEntity> phieuXuatList;
}
