import { style } from '@angular/animations';
import {
  Component,
  AfterViewInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewContainerRef,
  OnInit,
} from '@angular/core';

import { typeprojet } from './donnee';
import { projets } from './socketdonnee';
import { domaines } from './socketdonnee';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  projetlist = projets;
  domainesliste = domaines;
  pprojet: typeprojet;
  projetdom: typeprojet[];
  projetsousd: typeprojet[];
  boolselect: boolean = false;
  booldomaine: boolean = true;
  boolsousdo: boolean = false;
  ngOnInit() {
    console.log(this.projetlist);
    console.log(this.domainesliste);
  }
  selectprojet(projetrech: typeprojet) {
    this.booldomaine = false;
    this.boolsousdo = false;
    this.boolselect = true;
    this.pprojet = projetrech;
    console.log('ahaaaaaaaaaaaaa2222', projetrech);
    return this.pprojet;
  }

  selectprojetdomaine(projetdd: typeprojet[]) {
    this.boolselect = false;
    this.boolsousdo = false;
    this.booldomaine = true;
    this.projetdom = projetdd;

    return this.projetdom;
  }

  selectprojetsousdomaine(projetsousdom: typeprojet[]) {
    this.boolselect = false;
    this.booldomaine = false;
    this.boolsousdo = true;
    this.projetsousd = projetsousdom;
    return this.projetsousd;
  }
}
