import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { typeprojet, typedomaine } from '../donnee';
import { projets, domaines } from '../socketdonnee';

@Component({
  selector: 'app-gauche-component',
  templateUrl: './gauche-component.component.html',
  styleUrls: ['./gauche-component.component.css']
})

export class GaucheComponentComponent implements OnInit {
projetlist: typeprojet[] =projets;
domaineliste: typedomaine[] =domaines;

projetselected:typeprojet|undefined;

projetdomaineselected:typeprojet[]|undefined;
domaineselected:typedomaine|undefined;
sousdomaineselected:typeprojet[]|undefined;
@Output() selectprojetevent = new EventEmitter<typeprojet>();
@Output() projetdomaineevent = new EventEmitter <typeprojet[]>(); 
@Output() projetsousdomaineevent = new EventEmitter <typeprojet[]>(); 
ngOnInit(): void {
  
}

selectprojetE(projetid : string){
const projet :typeprojet|undefined = this.projetlist.find(projet => projet.nom == projetid );
if(projet){ 
console.log ('vous avez demande je projet : '+(projet?.nom));
this.projetselected =  projet;
console.log ('vous avez demandez un projet qui n"existe pas'+(this.projetselected));
this.selectprojetevent.emit(this.projetselected)
}else
console.log ('vous avez demandez un projet qui n"existe pas');
 this.projetselected =  projet;
 this.selectprojetevent.emit(this.projetselected)

}

onclickdomaine(projetdomaine :string){
  const sdomaine: typedomaine|undefined = this.domaineliste.find(domained => domained.domaine == projetdomaine);
  const projetdm:typeprojet[]|undefined = this.projetlist.filter(projetdm => projetdm.domaine== projetdomaine); 
  if(sdomaine){ 
    console.log ('vous avez demande les projets qui sont dans le domaine : '+(sdomaine?.sous_domaine));
    console.log ('vous avez demande les projets qui sont dans le domaine : '+(projetdm[1].nom));
    this.domaineselected =  sdomaine; 
    this.projetdomaineselected =projetdm;
    this.projetdomaineevent.emit(this.projetdomaineselected)

    }else
    console.log ('vous avez demandez un projet dans un domaine qui n"existe pas');
     this.domaineselected =  sdomaine;
     this.projetdomaineselected =projetdm;
     this.projetdomaineevent.emit(this.projetdomaineselected)
     

}

onclicksousdom(projetdomaine :string){
  const projetsousdm:typeprojet[]|undefined = this.projetlist.filter(projetsousdm => projetsousdm.sous_domaine== projetdomaine); 
  if (projetsousdm){ 
  console.log ('ouiiiiiiiiiiiiiiiiiiiiiiiiiii : '+(projetsousdm));
  this.sousdomaineselected =  projetsousdm; 
  this.projetsousdomaineevent.emit(this.sousdomaineselected)
 }else
 console.log ('ouiiiiiiiiiiiiiiiiiiiiiiiiiii : '+(projetsousdm));
 this.sousdomaineselected =  projetsousdm; 
 this.projetsousdomaineevent.emit(this.sousdomaineselected)
}
}
