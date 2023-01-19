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
  ngOnInit(): void {}
  projetlist = projets;
  domainesliste = domaines;
}
