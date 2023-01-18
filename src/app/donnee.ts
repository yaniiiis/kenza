export class typeprojet
 {
    nom: string;
    description: string;
    domaine:string;
    sous_domaine: string;
    techno: Array<string>;
    statut: string;
    
  }

export class typedomaine
 {
    domaine: string;
    sous_domaine: Array<string>; 

}
export class typetechno
 {
    frontend : string;
    backend : string;
    bdd : string; 
    
}
