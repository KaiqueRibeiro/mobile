import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/map';

@Injectable()

export class GlobalPreferencesVar {
    //  VARIÁVEIS DE SELEÇÃO PERMANENTES
    public myTurno: any = '0';
    public myCurso: any = '0';
    public mySemestre: any = '0';

    //  VARIÁVEIS DE SELEÇÃO TEMPORÁRIA
    public moreTurno: any = '0';
    public moreCurso: any = '0';
    public moreSemestre: any = '0';

    constructor(private storage: Storage,
        private datepipe: DatePipe) {
    }

    //  FUNÇÕES DE GRAVAÇÃO DE VARIÁVEIS PERMANENTES

    gravaTurno(val: string){
        this.myTurno = val;
    }

    gravaCurso(val: string){
        this.myCurso = val;
    }

    gravaSemestre(val: string){
        this.mySemestre = val;
    }


    //  FUNÇÕES DE VARIÁVEIS TEMPORÁRIAS

    gravamoreTurno(val: string){
        this.moreTurno = val;
    }

    gravamoreCurso(val: string){
        this.moreCurso = val;
    }

    gravamoreSemestre(val: string){
        this.moreSemestre = val;
    }
}