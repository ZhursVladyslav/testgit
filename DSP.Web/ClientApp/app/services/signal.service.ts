import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SignalService {

    constructor(private http: Http) {
      
    }

    getSignal(frequency: number, amplitude: number) {
        return this.http.get('api/Signal/createSignal?freq=' + frequency + '&ampl=' + amplitude)
            .map(res => res.json());
    };
}
