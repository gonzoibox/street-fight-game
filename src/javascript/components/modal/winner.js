import { showModal } from './modal';

export function showWinnerModal(fighter) {
  // call showModal function 
  const modalObj = {
    title: 'The winner is:',
    bodyElement: fighter.name
  };
  showModal(modalObj);
}
