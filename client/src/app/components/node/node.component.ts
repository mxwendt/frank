import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-node',
    templateUrl: './node.component.html',
    styleUrls: ['./node.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodeComponent implements OnInit {

    @Input() selector: string;
    @Input() text: string;

    constructor() { }

    ngOnInit() { }

}
