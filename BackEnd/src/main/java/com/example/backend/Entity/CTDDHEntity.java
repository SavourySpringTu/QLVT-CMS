package com.example.backend.Entity;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name="ctddh", uniqueConstraints={@UniqueConstraint(columnNames ={"MADDH","MAVT"})})
@Getter
@Setter
@RequiredArgsConstructor
public class CTDDHEntity implements Serializable{
    @AttributeOverrides({
            @AttributeOverride(name="my_mddh",column=@Column(name="MADDH")),
            @AttributeOverride(name="my_mavtddh",column=@Column(name="MAVT"))
    })
    @EmbeddedId
    private CTDDHID id;

    private int SOLUONG;
    private float DONGIA;

    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name="MAVT",insertable = false, updatable = false)
    @JsonManagedReference(value = "vatTuCTDDH")
    @JsonIgnore
    private VatTuEntity vatTuCTDDH;
}
