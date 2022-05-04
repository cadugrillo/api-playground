import { Component } from '@angular/core';
import { DatefactService, DateFact } from './datefact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';
  dateFact!: DateFact;

  constructor(private datefactService: DatefactService) { }

  ngOnInit() {
    this.updateDateFact();
  }

  updateDateFact() {
  this.datefactService.getDateFact().subscribe((data) => {
    this.dateFact = (data as DateFact);
  });
  }
}
