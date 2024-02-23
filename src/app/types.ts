export interface ApiDataModel {
    code: string;
    description: string;
    colors: ColorsModel[];
  }

export interface ColorsModel {
  code: string;
  description: string;
  price: number;
}

export interface Color {
  code: string;
  description: string;
  price: number;
}

export interface ConfigsModel {
  configs: Config[];
  towHitch: boolean;
  yoke: boolean;
}

export interface Config {
  id: number;
  description: string;
  range: number;
  speed: number;
  price: number;
}

export interface CustomData {
  configs: Config[];
  towHitch: boolean;
  yoke: boolean;
}


export interface SelectedModel {
  code: string;
  description: string;
  colorCode: string;
  colorDesc: string;
  price: number;
}

export interface SelectedConfig {
  id: number;
  yoke: boolean;
  tow: boolean;
  range: number;
  speed: number;
  description: string;
  price: number;
}