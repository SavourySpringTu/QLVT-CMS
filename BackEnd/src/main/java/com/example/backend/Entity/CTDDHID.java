package com.example.backend.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter
@Setter
@RequiredArgsConstructor
public class CTDDHID implements Serializable {
    private String MADDH;
    private String MAVT;
    public CTDDHID(String MADDH,String MAVT){
        this.MADDH=MADDH;
        this.MAVT=MAVT;
    }
}
