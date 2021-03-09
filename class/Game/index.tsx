/**
 * Objeto básico do jogo
 */
interface GameProps {
  /** Número corrente que o usuário deve digitar por extenso */
  currentNumber: number;
  /** score atual do usuário */
  currentScore: number;
}

export class Game implements GameProps {
  currentNumber = 0;
  currentScore = 0;

  setCurrentNumber(newCurrentNumber: number) {
    this.currentNumber = newCurrentNumber;
    return this.currentNumber;
  }

  getCurrentNumer() {
    return this.currentNumber;
  }

  setCurrentScore(newCurrentScore: number) {
    this.currentNumber = newCurrentScore;
    return this.currentScore;
  }

  reset() {
    this.currentNumber = 0;
    this.currentScore = 0;
  }
}