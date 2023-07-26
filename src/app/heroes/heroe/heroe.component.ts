import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public name: string = 'ironman';
  public age: number = 45;
  public aparecer: boolean = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();

  }
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }
  changeName(): void {
    this.aparecer = !this.aparecer
    this.name = 'Spider Man';
  }
  changeAge(): void {
    this.age = 35;
  }
  restart(): void {
    this.aparecer = true;
  }


}
