import {Component} from '@angular/core';
import { DataService } from './data.service';
import { SelectedModel, SelectedConfig } from './types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-three.component.html'
})
export class StepThreeComponent {

  selectedModel: SelectedModel = {
    code: '',
    description: '',
    colorCode: '',
    colorDesc: '',
    price: 0
  };
  selectedConfig: SelectedConfig = {
    id: 0,
    yoke: false,
    tow: false,
    range: 0,
    speed: 0,
    description: '',
    price: 0
  };
  selectedModelCode: string = '';
  selectedColorCode: string = '';

  constructor(private dataService: DataService) { 
    this.selectedConfig = this.dataService.getSelectedConfig();
    this.selectedModel = this.dataService.getSelectedModel();
  }

  ngOnInit(): void {
    this.selectedModelCode= this.selectedModel.code;
    this.selectedColorCode=this.selectedModel.colorCode;
  }

}
