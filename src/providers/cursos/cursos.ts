import { Injectable } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';

@Injectable()
export class CursosProvider {

    private PATCH = 'c_data/';

    constructor(private db: AngularFireDatabase) {

    }

    getAll(){
        return this.db.list(this.PATCH, ref => ref.orderByChild('curso'))
        .snapshotChanges()
        .map(changes => {
            return changes.map(c => ({
                key: c.payload.key,
                ...c.payload.val()
            }));
        })
    }

    getAllbyS(){
        return this.db.list(this.PATCH, ref => ref.orderByChild('semestre'))
        .snapshotChanges()
        .map(changes => {
            return changes.map(c => ({
                key: c.payload.key,
                ...c.payload.val()
            }));
        })
    }

    getInfoC(){
        return this.db.list(this.PATCH)
        .snapshotChanges()
        .map(changes => {
            return changes.map(c => {
                return changes.map(c => ({
                    key: c.payload.key,
                    ...c.payload.val()
                }));
            })
        })
    }

    get(key: string){
        return this.db.object(this.PATCH + key)
        .snapshotChanges()
        .map(c => {
            return {key: c.key, ...c.payload.val()};
        })
    }
}