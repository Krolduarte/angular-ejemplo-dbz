import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterlist: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  onDeleteCharacter(id?:string) {
    if(!id) return;

    this.onDelete.emit(id);

  }
}
