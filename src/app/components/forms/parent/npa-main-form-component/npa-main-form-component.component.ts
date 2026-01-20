import { Component } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { ComponentLoadService } from '../../../../services/component-load.service';

@Component({
  selector: 'app-npa-main-form-component',
  imports: [NgComponentOutlet],
  templateUrl: './npa-main-form-component.component.html',
  styleUrl: './npa-main-form-component.component.css'
})
export class NpaMainFormComponentComponent {

  sections: any[];

  constructor(private componentLoadService: ComponentLoadService) {
    this.sections = this.componentLoadService.getFormSections();
  }
}
