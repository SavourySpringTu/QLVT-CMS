package com.example.backend.Entity;

import jakarta.persistence.Embeddable;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter
@Setter
@RequiredArgsConstructor
public class CTPNID implements Serializable {
    private String MAPN;
    private String MAVT;
    public CTPNID(String MAPN,String MAVT){
        this.MAPN=MAPN;
        this.MAVT=MAVT;
    }
}
