import {Component, Input, Output, EventEmitter} from '@angular/core';

import {TodoStore, Todo} from '../../../shared';

@Component({
  selector: 'todos-detail',
  template: `
    <div ngClass="list-no">{{listNo+1}}</div>
    <div>
      <p>{{todo.title}}</p>
      <pre>{{todo.desc}}</pre>
      <button (click)="onClick($event)">削除</button>
    </div>
    `,
  styles: [`
    :host {
      display: block;
      border:#4e5d5f solid 2px;
      margin: 5px 0 5px 0;
      padding: 5px 0 5px 0;
      width: 100%;
      min-height: 112px;
      overflow : hidden;
    }
    .list-no {
      text-align: center;
      font-size: 2rem;
      margin: 5px 5px 5px 5px;
      width: 100px;
      height: 100px;
      background-color: #4e5d5f;
      color: #ffffff;
    }
    div {
      float: left;
    }
    button {
      background-color: #e8345a;
    }
  `] // TODO: 8. detailに必要なCSSを定義します
})
export class TodosDetailComponent {
  // TODO: 9. @Inputと@Outputを定義します
  // (1) @Input: list-no -> listNo
  @Input('list-no')
  private listNo: number;
  // (2) @Input: todo-data -> todo
  @Input('todo-data')
  private todo: Todo;
  // (3) @Output: on-delete <- onDelete
  @Output('on-delete')
  private onDelete = new EventEmitter();
  
  public onClick($event: any): void {
    // TODO: 10. emitを実行します
    this.onDelete.emit($event);
  }
}
