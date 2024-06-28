import {Component, OnDestroy, OnInit} from '@angular/core';
import {AnswerType} from "../../../types/answer.type";
import {AnswersService} from "../../core/services/answers.service";
import {delay, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  answers: AnswerType[] = [];
  observable: Observable<void> = new Observable((observer) => observer.next());
  subscription: Subscription | null = null;
  showPopup: boolean = false;

  constructor(private answersService: AnswersService) {}

  ngOnInit() {
    this.answers = this.answersService.getAnswers();
    this.subscription = this.observable.pipe(delay(10000)).subscribe(() => {this.showPopup = true;})}

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}

