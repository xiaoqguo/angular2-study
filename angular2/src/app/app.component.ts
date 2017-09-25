import { Component } from '@angular/core';

export class Hero{
  id:number;
  name:string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Dachui' },
  { id: 12, name: 'Nigulasi Zhaosi'},
  { id: 13, name: 'Forever uncle Heitu'},
  { id: 14, name: 'Baiyun Dandan'},
  { id: 15, name: 'Xiao Shenyang'},
  { id: 16, name: 'Deyun NO.1 Yunpeng'},
  { id: 17, name: 'Pencake men Dapeng'},
  { id: 18, name: 'Boss Guo'},
  { id: 19, name: 'Less moderator Qilin'},
  { id: 20, name: 'Black Song'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes ';
  heroes=HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}
