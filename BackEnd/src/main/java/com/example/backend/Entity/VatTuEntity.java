package com.example.backend.Entity;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Table(name="vattu")
@Getter
@Setter
@RequiredArgsConstructor
@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class, property = "mavt")
public class VatTuEntity implements Serializable{
    @Id
    private String MAVT;
    private String TENVT;
    private String DONVITINH;
    private int SOLUONGTON;

    @OneToOne(mappedBy = "vatTuCTDDH")
    private CTDDHEntity ctddh;

    @OneToOne(mappedBy = "vatTuCTPN")
    private CTPNEntity ctpn;

    @OneToOne(mappedBy = "vatTuCTPX")
    private CTPXEntity ctpx;
}
