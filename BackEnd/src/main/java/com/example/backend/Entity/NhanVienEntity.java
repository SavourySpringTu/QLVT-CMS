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
@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class, property = "manv")
public class NhanVienEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int MANV;

    private String HOTEN;
    private String SOCMND;
    private String DIACHI;
    private LocalDate NGAYSINH;
    private int LUONG;
    private boolean TRANGTHAI;
    private String MATKHAU;

    @ManyToOne(cascade = CascadeType.PERSIST )
    @JoinColumn(name="MACN")
    private ChiNhanhEntity chiNhanhNV;

    @ManyToOne(cascade = CascadeType.PERSIST )
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

    public NhanVienEntity(String HOTEN, String SOCMND, String DIACHI, LocalDate NGAYSINH, int LUONG, boolean TRANGTHAI, String MATKHAU, ChiNhanhEntity chiNhanhNV, VaiTroEntity vaiTroNV) {
        this.HOTEN = HOTEN;
        this.SOCMND = SOCMND;
        this.DIACHI = DIACHI;
        this.NGAYSINH = NGAYSINH;
        this.LUONG = LUONG;
        this.TRANGTHAI = TRANGTHAI;
        this.MATKHAU = MATKHAU;
        this.chiNhanhNV = chiNhanhNV;
        this.vaiTroNV = vaiTroNV;
    }

    public NhanVienEntity() {

    }
}
