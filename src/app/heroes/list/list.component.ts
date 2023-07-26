import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public lastDeleted?: string = ''
  public copy: string[] = []
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor'
  ]
  constructor() {
    this.copy = [...this.heroNames];
  }
  restablecer(): void {
    this.heroNames = this.copy
    console.log(this.heroNames)
  }
  deleteLastElement(): void {
    this.lastDeleted = this.heroNames.pop()
  }

}
