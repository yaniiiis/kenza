 import { Component ,Input} from '@angular/core';
import { typeprojet } from '../donnee';
import { projets } from '../socketdonnee';
@Component({
  selector: 'app-droite-component',
  templateUrl: './droite-component.component.html',
  styleUrls: ['./droite-component.component.css']
})

export class DroiteComponentComponent {
  projet : typeprojet;
  projetlist :typeprojet[] = projets;
  @Input() projetrechercher :typeprojet;
  @Input() projetdomrechercher :typeprojet[];
  @Input() projetsousdomrechercher :typeprojet[];
  @Input() boolrecherch :boolean;
  @Input() boolddomaine :boolean;
  @Input() boolsousdomaine :boolean;
 
}
