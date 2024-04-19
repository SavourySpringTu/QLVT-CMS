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
@Table(name="dathang")
@Getter
@Setter
@RequiredArgsConstructor
@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class, property = "maddh")
public class DatHangEntity{
    @Id
    private String MADDH;
    private LocalDate NGAY;
    private String NHACC;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="MANV")
    private NhanVienEntity datHangNV;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="MAKHO")
    private KhoEntity datHangKho;

    @OneToMany(mappedBy="datHangPN",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<PhieuNhapEntity> phieuNhapList;
}
