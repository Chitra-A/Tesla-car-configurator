import { Injectable } from '@angular/core';
import { ApiDataModel, ConfigsModel, SelectedConfig, SelectedModel } from './types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private modelData: ApiDataModel[] = [];
  private configData: ConfigsModel = {
    configs: [],
    towHitch: false,
    yoke: false
  };
  public selectedModel: SelectedModel = {
    code: '',
    description: '',
    colorCode: '',
    colorDesc: '',
    price: 0
  };
  public selectedConfig: SelectedConfig = {
    id: 0,
    tow: false,
    yoke: false,
    range: 0,
    speed: 0,
    description: '',
    price: 0
  }

  setModelData(data: ApiDataModel[]): void {
    this.modelData = data;
  }

  getModelData(): ApiDataModel[] {
    return this.modelData;
  }

  setConfigData(data: ConfigsModel): void {
    this.configData = data;
  }

  getConfigData(): ConfigsModel {
    return this.configData;
  }

  setSelectedModel(data: SelectedModel): void {
    this.selectedModel = data;
  }

  getSelectedModel(): SelectedModel {
    return this.selectedModel;
  }

  setSelectedConfig(data: SelectedConfig): void {
    this.selectedConfig = data;
  }

  getSelectedConfig(): SelectedConfig {
    return this.selectedConfig;
  }

  resetData(): void {
    this.modelData = [];
    this.configData = {
      configs: [],
      towHitch: false,
      yoke: false
    };
    this.selectedModel = {
      code: '',
      description: '',
      colorCode: '',
      colorDesc: '',
      price: 0
    };
    this.resetConfig();
  }

  resetConfig(): void {
    this.selectedConfig = {
      id: 0,
      tow: false,
      yoke: false,
      range: 0,
      speed: 0,
      description: '',
      price: 0
    };
  }
}
