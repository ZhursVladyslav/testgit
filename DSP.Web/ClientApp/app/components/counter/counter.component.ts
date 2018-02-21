import { Component } from '@angular/core';
import { SignalService } from '../../services/signal.service';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {

    ampl: number;
    freq: number;
    data: any;

    constructor(private signalService: SignalService) {
        
    }

    public getSignal() {
        this.signalService.getSignal(this.freq, this.ampl)
            .subscribe(result => {
                var time = performance.now();
                let data = result as ISignalModel;

                this.data = this.getData();
                this.data.labels = data.labels;
                this.data.datasets[0]['data'] = data.data;
            });
    }

    private getData() {
        return {
            backgroundColor: "#ffce56",
            labels: [""],
            datasets: [{
                label: "Useful Signal",
                data: [0],
                backgroundColor: "#ffce56",
            }]
        };

    };
}

interface ISignalModel {
    data: number[];
    labels: string[];
}