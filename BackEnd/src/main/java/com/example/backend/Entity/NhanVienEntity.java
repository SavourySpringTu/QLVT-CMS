package com.example.backend.Entity;

import com.fasterxml.jackson.annotation.*;
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
    @JoinColumn(name="MAQUYEN")
    @JsonBackReference(value = "vaiTroNV")
    private VaiTroEntity vaiTroNV;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="MACN")
    @JsonBackReference(value = "chiNhanhNV")
    private ChiNhanhEntity chiNhanhNV;

    @OneToMany(mappedBy="datHangNV",fetch = FetchType.EAGER)
    @JsonManagedReference(value = "dathangNV")
    @JsonIgnore
    private List<DatHangEntity> datHangList;

    @OneToMany(mappedBy="nhanVienPN",fetch = FetchType.EAGER)
    @JsonManagedReference(value = "nhanVienPN")
    @JsonIgnore
    private List<PhieuNhapEntity> phieuNhapList;

    @OneToMany(mappedBy="nhanVienPX",fetch = FetchType.EAGER)
    @JsonManagedReference(value = "nhanVienPX")
    @JsonIgnore
    private List<PhieuXuatEntity> phieuXuatList;
}
