import {Injectable} from '@angular/core';
import {ControlSetItem} from '../models/control-set-item';
import {ComQuestionComponent} from '../web-designer/control-set/com-question/com-question.component';
import {ComQuestionTextComponent} from '../web-designer/control-set/com-question-text/com-question-text.component';
import {nullSafeIsEquivalent} from '@angular/compiler/src/output/output_ast';

@Injectable({providedIn: 'root'})
export class ControlSetServiceService {
  // this service used to get avaliable control set.
  constructor() {}

  getControlSets() {
    return [
      new ControlSetItem(ComQuestionComponent, {controlName: 'Question'}),
      new ControlSetItem(ComQuestionTextComponent, {controlName: 'Answer-Text'})
    ];
  }

  getControlByControlName(name: string) {
    const ctrls = this.getControlSets();
    let ctrl = null;
    ctrls.forEach(element => {
      if (element.data.controlName === name) {
        ctrl = element;
      }
    });
    return ctrl;
  }

}
