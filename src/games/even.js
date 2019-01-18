import game from '..';
import makeRandomNumber from '../utils';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => (number % 2 === 0);

const logic = () => {
  const question = makeRandomNumber(1, 10);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const means = [question, correctAnswer];
  return means;
};
export default () => game(logic, rule);
