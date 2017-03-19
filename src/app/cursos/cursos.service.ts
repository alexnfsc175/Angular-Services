import { Injectable } from '@angular/core'


@Injectable()
export class CursosService {

    constructor(){
        console.log("Criou uma instancia de CursosService");
    }

    getCursos(){
        return ['Angular 2', 'Java', 'Phonegap']; 
    }
}