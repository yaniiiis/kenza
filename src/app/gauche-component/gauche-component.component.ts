import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { typeprojet, typedomaine } from '../donnee';
import { AffichageService } from '../services/affichage.service';
import { projets, domaines } from '../socketdonnee';

@Component({
  selector: 'app-gauche-component',
  templateUrl: './gauche-component.component.html',
  styleUrls: ['./gauche-component.component.css'],
})
export class GaucheComponentComponent implements OnInit {
  constructor(private affichageService: AffichageService) {}

  projetlist: typeprojet[] = projets;
  domaineliste: typedomaine[] = domaines;
  projetselected: typeprojet | undefined;
  projetdomaineselected: typeprojet[] | undefined;
  domaineselected: typedomaine | undefined;
  sousdomaineselected: typeprojet[] | undefined;

  ngOnInit(): void {
    this.affichageService.domaineselected$.subscribe((d) => {
      this.domaineselected = d;
    });
  }

  selectprojetE(projetid: string) {
    this.affichageService.selectprojetE(projetid);
  }

  onclickdomaine(projetdomaine: string) {
    this.affichageService.onclickdomaine(projetdomaine);
  }

  onclicksousdom(projetdomaine: string) {
    this.affichageService.onclicksousdom(projetdomaine);
  }
}
