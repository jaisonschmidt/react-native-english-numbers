import { Game } from '../Game';
import { numberRandom } from '../../util';

interface EnglishNumberProps {
  /** maior numero de acertos corridos ja feitos neste dispositivo */
  highScore: number,
}

export class EnglishNumberGame extends Game implements EnglishNumberProps {
  highScore = 0;

  constructor(){
    super();
    this.restart();
  }

  restart() {
    this.currentNumber = this.generateNumber();
    this.currentScore = 0;
  }

  generateNumber(): number {
    this.currentNumber = numberRandom();
    return this.currentNumber;
  }

  verifyAnswer(userAnswer: string) {
    console.log(userAnswer);
    
  }

  getHighScore(): number {
    return this.highScore;
  }

  updateHighScore() {
    // TODO verificar se o novo score é realmente o highScore
    console.log('update');
  }
}