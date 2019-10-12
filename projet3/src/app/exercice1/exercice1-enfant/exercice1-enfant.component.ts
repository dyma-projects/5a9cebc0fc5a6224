import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})

export class Exercice1EnfantComponent implements OnInit {
  @Input() public inCompteur: Number;
  @Output() eventDirective = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() {
  }

  Plus(): void { 
    this.JeChange(+1);
  }

  Moins(): void { 
    this.JeChange(-1);
  }

  JeChange(i: number) {
    this.inCompteur = +this.inCompteur + i;
    this.eventDirective.emit(this.inCompteur);
  }
}
