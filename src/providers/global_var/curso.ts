import { Injectable } from '@angular/core';

@Injectable()

export class GlobalCursoVar {
    public userName: any
    public cursoInfoTurno: any;
    public cursoInfoCurso: any;
    public cursoInfoSemestre: any;

    exibeNome(val: string){
        this.userName = val;
    }

    exibeTurno(val: string){
        this.cursoInfoTurno = val;
    }
}