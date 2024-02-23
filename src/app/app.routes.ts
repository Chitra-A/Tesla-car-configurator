import { Routes } from '@angular/router';
import { StepOneComponent } from './step-one.component';
import { StepTwoComponent } from './step-two.component';
import { StepThreeComponent } from './step-three.component';

export const routes: Routes =[
{ path: 'step1', component: StepOneComponent },
{ path: 'step2', component: StepTwoComponent },
{ path: 'step3', component: StepThreeComponent }
];
