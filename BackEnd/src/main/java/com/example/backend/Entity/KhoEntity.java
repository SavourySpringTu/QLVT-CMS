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
@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class, property = "makho")
public class KhoEntity {
    @Id
    private String MAKHO;
    private String TENKHO;
    private String DIACHI;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="MACN")
    private ChiNhanhEntity chiNhanhKho;

    @OneToMany(mappedBy="datHangKho",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<DatHangEntity> datHangList;

    @OneToMany(mappedBy="khoPX",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<PhieuXuatEntity> phieuXuatList;

    @OneToMany(mappedBy="khoPN",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<PhieuNhapEntity> phieuNhapList;
}
