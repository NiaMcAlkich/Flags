import { Component } from '@angular/core';

@Component({
  selector: 'app-flaggame',
  templateUrl: './flaggame.component.html',
  styleUrls: ['./flaggame.component.css']
})

export class FlaggameComponent {
  flagsToDisplay: number[] = [];
  countries = ["Estonia", "France", "Germany", "Ireland", "Italy", "Nigeria", "Poland", "Russia", "Spain", "UK", "US"];
  imageUrls = [
    '../assets/Estonia@2x.png',
    '../assets/France@2x.png',
    '../assets/Germany@2x.png',
    '../assets/Ireland@2x.png',
    '../assets/Italy@2x.png',
    '../assets/Nigeria@2x.png',
    '../assets/Poland@2x.png',
    '../assets/Russia@2x.png',
    '../assets/Spain@2x.png',
    '../assets/UK@2x.png',
    '../assets/US@2x.png'
  ];
  correctFlagIndex!: number;
  correctAnswer: string = '';
  score: number = 0;
  counter: number = 0;

  constructor() {
    this.flagPicker();
  }

  flagPicker() {
    this.flagsToDisplay = [];
    while (this.flagsToDisplay.length < 3) {
      const flag = Math.floor(Math.random() * this.countries.length);
      if (!this.flagsToDisplay.includes(flag)) {
        this.flagsToDisplay.push(flag);
      }
    }
    this.correctFlagIndex = Math.floor(Math.random() * this.flagsToDisplay.length);
    this.correctAnswer = this.countries[this.flagsToDisplay[this.correctFlagIndex]];
  }

  flagTapped(flagIndex: number) {
    this.counter++;
  
    const correctFlagIndex = this.flagsToDisplay[this.correctFlagIndex];
  
    if (flagIndex === correctFlagIndex) {
      alert(`Correct!`);
      this.score++;
    } 
    
    else if (this.flagsToDisplay.includes(flagIndex)) {
      alert(`Wrong, you clicked the flag for ${this.countries[flagIndex]}`);
    }
  
    if (this.counter === 8) {
      alert(`Game over your score was ${this.score}/8`);
      this.reset();
    } 
    
    else {
      this.flagPicker();
    }
    
  }
  
  
  reset() {
    this.counter = 0;
    this.score = 0;
    this.flagPicker();
  }
}
