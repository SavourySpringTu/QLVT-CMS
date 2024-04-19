package com.example.backend.Entity;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name="ctpx")
@Getter
@Setter
@RequiredArgsConstructor
@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class, property = "mactpx")
public class CTPXEntity implements Serializable {
    @AttributeOverrides({
            @AttributeOverride(name="my_mapx",column =@Column(name="MAPX")),
            @AttributeOverride(name="my_mavtpx",column =@Column(name="MAVT")),
    })
    @EmbeddedId CTPXID id;
    private int SOLUONG;
    private float DONGIA;

    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name="MAVT",insertable = false, updatable = false)
    private VatTuEntity vatTuCTPX;
}
