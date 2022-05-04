import { Component, OnInit } from '@angular/core';
import { DatefactService, DateFact } from '../datefact.service';

@Component({
  selector: 'app-datefact',
  templateUrl: './datefact.component.html',
  styleUrls: ['./datefact.component.css']
})
export class DatefactComponent implements OnInit {

  dateFact!: DateFact;

  constructor(private datefactService: DatefactService) { }

  ngOnInit(): void {
    this.updateDateFact();
  }

  updateDateFact() {
    this.datefactService.getDateFact().subscribe((data) => {
      this.dateFact = (data as DateFact);
    });
    }

}
