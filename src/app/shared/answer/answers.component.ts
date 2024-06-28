import {Component, Input} from '@angular/core';
import {AnswerType} from "../../../types/answer.type";

@Component({
  selector: 'answers',
  templateUrl: './answers.component.html',
})

export class AnswersComponent {

  @Input() answer: AnswerType;

  constructor() {
    this.answer = {
      title: '',
      body: ''
    }
  }
}
