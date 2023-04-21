import { Component } from '@angular/core';

@Component({
  selector: 'app-flaggame',
  templateUrl: './flaggame.component.html',
  styleUrls: ['./flaggame.component.css']
})


export class FlaggameComponent {

  flagsToDisplay: number[] = [];     //This is an array for the 3 radom flags that get picked for display
  randomCorrectAnswer: number;     //This is the variable used to pick 1 of th 3 display flags to be the correct answer
  countries = ["Estonia", "France", "Germany", "Ireland", "Italy", "Nigeria", "Poland", "Russia", "Spain", "UK", "US"];
  correctAnswer: string;     //Variable holding the correct flag
  score = 0;     //Keeps score
  counter = 0;     //Keeps count of questions

  //This is the while loop for picking 3 random flags for the array to choose from and 
  //it will make sure there are no repeats in the array 
  constructor() {
    while (this.flagsToDisplay.length < 3) {
      const flag = Math.floor(Math.random() * 11);
      if (!this.flagsToDisplay.includes(flag)) {
        this.flagsToDisplay.push(flag);
      }
    }
    this.randomCorrectAnswer = Math.floor(Math.random() * 3);     //These pick the 3 random numbers and then 1 to be the right answer
    this.correctAnswer = this.countries[this.flagsToDisplay[this.randomCorrectAnswer]];
  }

}
