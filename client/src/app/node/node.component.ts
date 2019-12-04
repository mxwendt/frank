import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-node',
    templateUrl: './node.component.html',
    styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

    @Input() selector: string;
    @Input() text: string;

    constructor() { }

    ngOnInit() { }

}
