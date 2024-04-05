package com.example.backend.Entity;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name="kho")
@Getter
@Setter
@RequiredArgsConstructor
public class KhoEntity {
    @Id
    private String MAKHO;
    private String TENKHO;
    private String DIACHI;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="MACN")
    @JsonBackReference(value = "chiNhanhKho")
    private ChiNhanhEntity chiNhanhKho;

    @OneToMany(mappedBy="datHangKho",fetch = FetchType.EAGER)
    @JsonManagedReference(value = "datHangKho")
    @JsonIgnore
    private List<DatHangEntity> datHangList;

    @OneToMany(mappedBy="khoPX",fetch = FetchType.EAGER)
    @JsonManagedReference(value = "khoPX")
    @JsonIgnore
    private List<PhieuXuatEntity> phieuXuatList;

    @OneToMany(mappedBy="khoPN",fetch = FetchType.EAGER)
    @JsonManagedReference(value = "khoPN")
    @JsonIgnore
    private List<PhieuNhapEntity> phieuNhapList;
}
