import { typeprojet, typedomaine, typetechno } from './donnee';
  
export const projets: typeprojet[] = [
    {
        nom:"sof5G",
        description:"lorem ipsum text",
        domaine:"telecom",
        sous_domaine: "5G",
        techno:["java", "vue" ,"postgresql"], 
        statut:"prod"
    },
    {
        nom:"sofibre",
        description:"lorem ipsum text",
        domaine:"telecom",
        sous_domaine: "fibre optique",
        techno:["java", "react" ,"mysql"], 
        statut:"dev"
    },
    {
        nom:"sofA",
        description:"lorem ipsum text",
        domaine:"finance",
        sous_domaine: "achats",
        techno:["python", "angular" ,"mysql"], 
        statut:"init"
    },
    {
        nom:"sofact",
        description:"lorem ipsum text",
        domaine:"finance",
        sous_domaine: "facturation",
        techno:["c#", "angular" ,"neo4j"], 
        statut:"prod"
    },
    {
        nom:"sofelec",
        description:"lorem ipsum text",
        domaine:"energie",
        sous_domaine: "electricite",
        techno:["java", "angular" ,"neo4j"], 
        statut:"prod"
    },
    {
        nom:"sogaz",
        description:"lorem ipsum text",
        domaine:"energie",
        sous_domaine: "gaz",
        techno:["python", "react" ,"postgresql"], 
        statut:"dev"
    },
    {
        nom:"sohyd",
        description:"lorem ipsum text",
        domaine:"energie",
        sous_domaine: "hydraulique",
        techno:["java", "react" ,"mysql"], 
        statut:"dev"
    }];


    export const domaines: typedomaine[] = [
        {
           domaine: "telecom",
           sous_domaine: ["5G", "fibre optique"],
            
        },
        {
            domaine: "finance",
            sous_domaine: ["achats", "facturation"],
             
         },
         {
            domaine: "energie",
            sous_domaine: ["electricite", "gaz","hydraulique"],
             
         }];

         export const technos: typetechno[] = [
            {
                frontend: "angular",
                backend: "java",
                bdd:"mysql",
                 
             },
             {
                frontend: "react",
                backend: "php",
                bdd:"neo4j",
                 
             },
             {
                frontend: "vue",
                backend: "c#",
                bdd:"postgresql",
                 
             }];
