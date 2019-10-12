import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;

// Ne fonctionne pas comme vu dans la vidéo !
// @ViewChild('f') public el: ElementRef;

  @ViewChild('f', {static: false}) ef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  Envoyer() {
    this.valeur = this.ef.nativeElement.value;
  }

}
