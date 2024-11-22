import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent {

  heroes:string[] = ['Spiderman', 'Hulk', 'IronMan']
  deletedHero?:string = '';

  deleteHero():void{
    this.deletedHero = this.heroes.pop();

  }
}
