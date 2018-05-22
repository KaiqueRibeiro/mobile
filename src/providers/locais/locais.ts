import { Injectable } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';

@Injectable()
export class LocaisProvider {

    private PATCH = 'l_data';

    constructor(private db: AngularFireDatabase){

    }

    getAll(){
        return this.db.list(this.PATCH, ref => ref.orderByChild('ambiente'))
        .snapshotChanges()
        .map(changes => {
            return changes.map(l => ({
                key: l.payload.key,
                ...l.payload.val()
            }));
        })
    }

    get(key: string){
        return this.db.object(this.PATCH + key)
        .snapshotChanges()
        .map(l => {
            return {key: l.key, ...l.payload.val()};
        })
    }
}