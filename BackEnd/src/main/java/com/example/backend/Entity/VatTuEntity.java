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
public class VatTuEntity implements Serializable{
    @Id
    private String MAVT;
    private String TENVT;
    private String DONVITINH;
    private int SOLUONGTON;

    @OneToOne(mappedBy = "vatTuCTDDH")
    @JsonBackReference(value = "vatTuCTDDH")
    private CTDDHEntity ctddh;

    @OneToOne(mappedBy = "vatTuCTPN")
    @JsonBackReference(value = "vatTuCTPN")
    private CTPNEntity ctpn;

    @OneToOne(mappedBy = "vatTuCTPX")
    @JsonBackReference(value = "vatTuCTPX")
    private CTPXEntity ctpx;
}
