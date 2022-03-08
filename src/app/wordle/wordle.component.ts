import { Component, HostListener, OnInit } from '@angular/core';
import { Game } from './game';
import { Guess } from './guess';
import { Letter } from './letter';
import { possibilities } from './possibilities';

@Component({
  selector: 'app-wordle',
  templateUrl: './wordle.component.html',
  styleUrls: ['./wordle.component.sass']
})
export class WordleComponent implements OnInit {
  
  qwerty = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM']
  guessesPerGame: number = 6;
  lettersPerWord: number = 5;
  game: Game;

  constructor() { }

  ngOnInit(): void {
    this.game = {
      currentCol: 0,
      currentRow: 0,
      gameCompleted: false,
      guesses: [],
      word: this.getRandomWord(possibilities)
    }
    
    for (let i = 0; i < this.guessesPerGame; i++) {
      let guess: Guess = {
        letters: []
      };

      for (let j = 0; j < this.lettersPerWord; j++) {
        guess.letters.push({ value: null, state: 'empty' });
      }
      this.game.guesses.push(guess);
    }
  }

  getRandomWord(words: string[]) {
    return words[Math.floor(Math.random() * (words.length - 1))].toUpperCase();
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (event.key.length === 1 && letters.includes(event.key.toUpperCase())) {
			if (this.game.currentCol < this.lettersPerWord && this.game.currentRow < this.guessesPerGame) {
        
				var letter = event.key.toUpperCase();
				this.game.guesses[this.game.currentRow].letters[this.game.currentCol].value = letter;
				this.game.guesses[this.game.currentRow].letters[this.game.currentCol].state = 'tbd';
			}
			
			if (this.game.currentCol < this.lettersPerWord) {
				this.game.currentCol++;
			}
			
		} else if (event.key === 'Backspace') {
			if (this.game.currentCol > 0) {
				var prevCol = this.game.currentCol - 1;
				this.game.guesses[this.game.currentRow].letters[prevCol].value = null;
        this.game.guesses[this.game.currentRow].letters[prevCol].state = 'empty';
				this.game.currentCol--;
			}
		} else if (event.key === 'Enter') {	

			if (this.game.currentCol === this.lettersPerWord
        && this.game.currentRow < this.guessesPerGame
        && this.isWord(this.game.guesses[this.game.currentRow].letters.map(letter => letter.value).join(''))) {

      
				this.processGuess(this.game.currentRow);
				this.game.currentRow++;
				this.game.currentCol = 0;
			}
			
			if (this.game.currentRow === this.guessesPerGame && !this.game.gameCompleted) {
        this.game.gameCompleted = true;
				// TODO showMessage(word);
			}
		}
  }

  isWord(word) {
		if (!possibilities.includes(word)) {
			// TODO showMessage('Not in word list', 2);
		}
		return possibilities.includes(word);
  }

  processGuess(row) {
    console.log(row);
		for (var col = 0; col < this.lettersPerWord; col++) {
			let letter: Letter = this.game.guesses[row].letters[col];			
			letter.state = 'absent';
			if (this.game.word.charAt(col) === letter.value) {
				letter.state = 'correct';
			} else if (this.game.word.includes(letter.value)) {
				letter.state = 'present';
			}
		}
	}
	
}
