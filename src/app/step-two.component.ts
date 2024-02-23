import { Component } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectedModel, SelectedConfig, ConfigsModel } from './types';

@Component({
  selector: 'app-step-two',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './step-two.component.html'
})
export class StepTwoComponent {

  selectedModel: SelectedModel;
  selectedConfig: SelectedConfig | string = '';
  configOptions: ConfigsModel = {
    configs: [],
    towHitch: false,
    yoke: false
  };
  includeTow: boolean = false;
  includeYoke: boolean = false;
  displayText: string = '';
  selectedModelCode: string = '';
  selectedColorCode: string = '';

  constructor(private http: HttpClient, private dataService: DataService) {
    this.selectedModel = this.dataService.getSelectedModel();
  }

  getConfigDataFromApi() {
    this.http.get('/options/' + this.selectedModel.code).subscribe((data) => {
      this.configOptions = data as ConfigsModel;
      this.dataService.setConfigData(data as ConfigsModel);
    });
  }

  ngOnInit(): void {
    
    if (this.dataService.getSelectedConfig().description !== '') {
      this.configOptions = this.dataService.getConfigData();
      const savedConfig: SelectedConfig = this.dataService.getSelectedConfig();
      if (savedConfig) {
        this.selectedConfig = this.dataService.getConfigData().configs.find(config=> config.id === savedConfig.id) as SelectedConfig;
        this.includeTow = savedConfig.tow;
        this.includeYoke = savedConfig.yoke;
      }
      this.onConfigChange();
    } else {
      this.getConfigDataFromApi();
    }
    this.selectedModelCode = this.dataService.getSelectedModel().code;
    this.selectedColorCode= this.dataService.getSelectedModel().colorCode;
  }

  onConfigChange() {
    if (typeof (this.selectedConfig) !== 'string') {
      this.displayText = `Range: ${this.selectedConfig.range} miles, Max speed: ${this.selectedConfig.speed}, Cost: $${this.selectedConfig.price}`;
    } else {
      this.displayText = '';
    }
    this.onCheckboxChange();
  }

  onCheckboxChange() {
    if (typeof (this.selectedConfig) !== 'string') {
      this.dataService.setSelectedConfig({
        id: this.selectedConfig.id,
        yoke: this.includeYoke,
        tow: this.includeTow,
        range: this.selectedConfig.range,
        speed: this.selectedConfig.speed,
        price: this.selectedConfig.price,
        description: this.selectedConfig.description
      })
    }
  }
}
