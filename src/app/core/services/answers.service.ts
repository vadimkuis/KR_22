import {Injectable} from '@angular/core';
import {AnswerType} from "../../../types/answer.type";

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  getAnswers(): AnswerType[] {
    return [
      {
        title: 'Собираете ли вы подарочные боксы?',
        body: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!'
      },
      {
        title: 'Сколько у вас разновидностей чая?',
        body: 'Placeholder content for this accordion, which is intended to demonstrate the class. This is the second item\'s accordion body. Let imagine this being filled with some actual content.'
      },
      {
        title: 'В какой срок осуществляется доставка?',
        body: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!'
      },
      {
        title: 'У вас обновляется ассортимент?',
        body: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!'
      },
      {
        title: 'Какого объема у вас пачки чая?',
        body: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!'
      }
    ]
  }
}
