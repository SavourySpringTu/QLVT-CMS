package com.example.backend.Entity;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name="ctpn")
@Getter
@Setter
@RequiredArgsConstructor
@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class, property = "mactpn")
public class CTPNEntity{
    @AttributeOverrides({
            @AttributeOverride(name="my_mapn",column =@Column(name="MAPN")),
            @AttributeOverride(name="my_mavtpn",column =@Column(name="MAVT")),
    })
    @EmbeddedId
    private CTPNID id;
    private int SOLUONG;
    private float DONGIA;

    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name="MAVT",insertable = false, updatable = false)
    private VatTuEntity vatTuCTPN;
}
