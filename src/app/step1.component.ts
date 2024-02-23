import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { ApiDataModel, ColorsModel, SelectedModel } from './types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './step1.component.html',
})
export class Step1Component implements OnInit {
  apiData: ApiDataModel[] = [];
  selectedModelCode: string = '';
  selectedColorCode: string = '';
  selectedModel!: ApiDataModel;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.apiData = this.dataService.getModelData() as ApiDataModel[];
    if(this.dataService.getSelectedModel().code !== '')  {
      const savedModel: SelectedModel = this.dataService.getSelectedModel();
      if (savedModel) {
        this.selectedModelCode = savedModel.code;
        this.selectedColorCode = savedModel.colorCode;
        this.selectedModelCodeChanged(true);
      }
    }
  }

  selectedModelCodeChanged(flag?: boolean) {
    this.selectedModel = this.apiData.find(
      (model) => model.code === this.selectedModelCode
    ) as ApiDataModel;
    this.selectedColorChanged(flag);
  }

  selectedColorChanged(flag?: boolean) {
    this.dataService.setSelectedModel({
      code: this.selectedModel.code,
      description: this.selectedModel.description,
      colorCode: this.selectedColorCode,
      colorDesc: this.selectedColorCode !== '' ? this.selectedModel.colors.filter((model: ColorsModel) => model.code === this.selectedColorCode)[0].description : '',
      price: this.selectedColorCode !== '' ? this.selectedModel.colors.filter((model:ColorsModel) => model.code === this.selectedColorCode)[0].price: 0,
     });
     if (!flag) {
      this.dataService.resetConfig();
     }
  }
}
