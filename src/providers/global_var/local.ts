import { Injectable } from '@angular/core';

@Injectable()

export class GlobalLocalVar {
    public localInfoAmbiente: any;
    public localInfoLocalizacao: any;
    public localInfoDescricao: any;
    public localInfoHorario: any;

    exibeAmbiente(val: string){
        this.localInfoAmbiente = val;
    }

    exibeLocalizacao(val: string){
        this.localInfoLocalizacao = val;
    }

    exibeDescricao(val: string){
        this.localInfoDescricao = val;
    }

    exibeHorario(val: string){
        this.localInfoHorario = val;
    }
}