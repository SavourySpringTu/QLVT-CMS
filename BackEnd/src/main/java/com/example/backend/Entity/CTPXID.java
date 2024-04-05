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
public class CTPXID implements Serializable {
    private String MAPX;
    private String MAVT;
    public CTPXID(String MAPX,String MAVT){
        this.MAPX=MAPX;
        this.MAVT=MAVT;
    }
}
