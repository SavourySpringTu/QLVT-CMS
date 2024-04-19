package com.example.backend.Entity;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name="chinhanh")
@Getter
@Setter
@RequiredArgsConstructor
@Data
@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class, property = "macn")
public class ChiNhanhEntity{
    @Id
    private String MACN;
    private String TEN;
    private String DIACHI;
    private String SDT;

    @OneToMany(mappedBy="chiNhanhKho",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<KhoEntity> khoList;

    @OneToMany(mappedBy="chiNhanhNV",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<NhanVienEntity> nhanVienList;
}
