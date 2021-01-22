import { Equipo } from './equipo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.page.html',
  styleUrls: ['./nba.page.scss'],
})
export class NbaPage implements OnInit {
  equipos: Equipo[]=[];
  constructor() {}

  ngOnInit(): void {
    this.generateEquipos();
  }

  generateEquipos() {
    let equipo1: Equipo = {
      ano: '2015-16',
      name: 'Cleveland Cavaliers',
      imgUrl:
        'https://www.nbamaniacs.com/wp-content/uploads/2012/09/cavaliers-logo.jpg',
      players: [
        'Lebron James',
        'kyrie Irving',
        'Kevin Love',
        'J.R. Smith',
        'Anderson Varejao',
      ],
    };
    let equipo2: Equipo = {
      ano: '2014-15',
      name: 'Golden State Warriors',
      imgUrl:
        'https://assets.stickpng.com/images/58419ce2a6515b1e0ad75a69.png',
      players: [
        'Stephen Curry',
        'Klay Thompson',
        'Draymong Green',
        'Andrew Bogut',
        'Gestus Ezeli',
      ],
    };
    let equipo3: Equipo = {
      ano: '2013-14',
      name: 'San Antonio Spurs',
      imgUrl:
        'https://images.vexels.com/media/users/3/132006/isolated/preview/cb8990f888a45561c9d33a73b8c2c801-san-antonio-spurs-logo-by-vexels.png',
      players: [
        'Tim Duncan',
        'Tony Parker',
        'Manu Ginobili',
        'Kawhi Leonard',
        'Tiago Spliter',
      ],
    };

    this.equipos.push(equipo1,equipo2,equipo3);
    console.log(this.equipos);
  }
}
