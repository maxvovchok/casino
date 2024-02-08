import { refs } from './refs';
import { scrollSlot } from './scroll';

const { startBtn } = refs;

function start() {
  const handleClick = () => {
    setTimeout(scrollSlot.slotAll(scrollSlot), 0);
  };

  startBtn.addEventListener('click', handleClick);
}

start();
