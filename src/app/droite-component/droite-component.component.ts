import { Component, Input, OnInit } from '@angular/core';
import { typeprojet } from '../donnee';
import { AffichageService } from '../services/affichage.service';
import { projets } from '../socketdonnee';
@Component({
  selector: 'app-droite-component',
  templateUrl: './droite-component.component.html',
  styleUrls: ['./droite-component.component.css'],
})
export class DroiteComponentComponent implements OnInit {
  // injection de service (injection de dépendences)
  constructor(private affichageService: AffichageService) {}

  boolrecherch: boolean;
  boolddomaine: boolean;
  boolsousdomaine: boolean;

  projetrechercher: typeprojet | undefined;
  projetdomrechercher: typeprojet[] | undefined;
  projetsousdomrechercher: typeprojet[] | undefined;

  projet: typeprojet;
  projetlist: typeprojet[] = projets;

  ngOnInit(): void {
    this.affichageService.boolselect$.subscribe((b) => {
      this.boolrecherch = b;
    });
    this.affichageService.booldomaine$.subscribe((b) => {
      this.boolddomaine = b;
    });
    this.affichageService.boolsousdo$.subscribe((b) => {
      this.boolsousdomaine = b;
    });
    this.affichageService.projetselected$.subscribe((p) => {
      console.log('PPPPPPPP ', p);
      this.projetrechercher = p;
    });
    this.affichageService.projetdomaineselected$.subscribe((p) => {
      this.projetdomrechercher = p;
    });
    this.affichageService.sousdomaineselected$.subscribe((p) => {
      this.projetsousdomrechercher = p;
    });
  }
}
