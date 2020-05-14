import { Component, OnInit, Input } from '@angular/core';
import { CadrListService } from '../cadr-list.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  constructor(private cadrListService: CadrListService) { }

  ngOnInit(): void {
    this.cadrListService.state.subscribe(state => {
      debugger
    })
  }

  @Input() data;
}
