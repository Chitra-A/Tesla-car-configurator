import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { DataService } from './data.service';
import { ApiDataModel } from './types';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  constructor(private http: HttpClient, public dataService: DataService, private router: Router) { }


  getDataFromApi() {
    this.http.get('/models').subscribe((data) => {
      this.dataService.setModelData(data as ApiDataModel[]);
    });
  }

  goToRoute(route: string) {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
    this.dataService.resetData();
    this.getDataFromApi();
    setTimeout(() => this.router.navigate(['/step1']), 500);
  }
}
