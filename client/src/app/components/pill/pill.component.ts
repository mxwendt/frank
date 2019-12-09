import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pill',
    templateUrl: './pill.component.html',
    styleUrls: ['./pill.component.css']
})
export class PillComponent implements OnInit {

    @Input() label: string;

    constructor() { }

    ngOnInit() { }

}
