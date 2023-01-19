import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { typedomaine, typeprojet } from '../donnee';
import { domaines, projets } from '../socketdonnee';

@Injectable({
  providedIn: 'root',
})
export class AffichageService {
  boolselect = new BehaviorSubject<boolean>(false);
  booldomaine = new BehaviorSubject<boolean>(false);
  boolsousdo = new BehaviorSubject<boolean>(false);

  projetlist: typeprojet[] = projets;
  domaineliste: typedomaine[] = domaines;
  projetselected = new BehaviorSubject<typeprojet | undefined>(undefined);
  projetdomaineselected = new BehaviorSubject<typeprojet[] | undefined>(
    undefined
  );
  domaineselected = new BehaviorSubject<typedomaine | undefined>(undefined);
  sousdomaineselected = new BehaviorSubject<typeprojet[] | undefined>(
    undefined
  );

  selectprojetevent = new BehaviorSubject<typeprojet | undefined>(undefined);
  projetdomaineevent = new BehaviorSubject<typeprojet[] | undefined>(undefined);
  projetsousdomaineevent = new BehaviorSubject<typeprojet[] | undefined>(
    undefined
  );

  setBoolSelect(b: boolean) {
    this.boolselect.next(b);
  }
  setBooldomaine(b: boolean) {
    this.booldomaine.next(b);
  }
  setBoolsousdo(b: boolean) {
    this.boolsousdo.next(b);
  }

  selectprojetE(projetid: string) {
    const projet: typeprojet | undefined = this.projetlist.find(
      (projet) => projet.nom == projetid
    );
    if (projet) {
      console.log('project from recherche : ', projet);
      this.projetselected.next(projet);
      this.boolselect.next(true);
      this.booldomaine.next(false);
      this.boolsousdo.next(false);

      // this.selectprojetevent.emit(this.projetselected);
    }
    // this.selectprojetevent.emit(this.projetselected);
  }

  onclickdomaine(projetdomaine: string) {
    const sdomaine: typedomaine | undefined = this.domaineliste.find(
      (domained) => domained.domaine == projetdomaine
    );
    const projetdm: typeprojet[] | undefined = this.projetlist.filter(
      (projetdm) => projetdm.domaine == projetdomaine
    );
    if (sdomaine) {
      this.domaineselected.next(sdomaine);
      this.projetdomaineselected.next(projetdm);
      this.booldomaine.next(true);
      this.boolsousdo.next(false);
      this.boolselect.next(false);
      // this.projetdomaineevent.emit(this.projetdomaineselected);
    }
  }

  onclicksousdom(projetdomaine: string) {
    const projetsousdm: typeprojet[] | undefined = this.projetlist.filter(
      (projetsousdm) => projetsousdm.sous_domaine == projetdomaine
    );

    if (projetsousdm) {
      this.sousdomaineselected.next(projetsousdm);
      this.boolsousdo.next(true);
      this.booldomaine.next(false);
      this.boolselect.next(false);
      // this.projetsousdomaineevent.emit(this.sousdomaineselected);
    }
  }

  // mettre les BehaviorSubject en tant que observable
  boolselect$ = this.boolselect.asObservable();
  booldomaine$ = this.booldomaine.asObservable();
  boolsousdo$ = this.boolsousdo.asObservable();
  projetdomaineselected$ = this.projetdomaineselected.asObservable();
  domaineselected$ = this.domaineselected.asObservable();
  sousdomaineselected$ = this.sousdomaineselected.asObservable();
  projetselected$ = this.projetselected.asObservable();

  constructor() {}
}
