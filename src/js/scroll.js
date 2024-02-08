import { refs } from './refs';

const { slotItemAll } = refs;

class scroll {
  width;
  height;
  icons;
  time;

  constructor(width, height, icons, time) {
    this.width = width;
    this.height = height;
    this.icons = icons;
    this.time = time;
  }

  slot(slot, index) {
    const delta =
      (index + 2) * this.icons + Math.round(Math.random() * this.icons);

    const style = getComputedStyle(slot);
    const backgroundPositionY = parseFloat(style.backgroundPositionY);

    setTimeout(() => {
      slot.style.transition = `background-position-y ${
        (8 + 1 * delta) * this.time
      }ms cubic-bezier(.41,-0.01,.63,1.09)`;
      slot.style.backgroundPositionY = `${
        backgroundPositionY + delta * this.height
      }px`;
    }, index * 150);
  }

  slotAll() {
    [...slotItemAll].forEach((reel, i) => {
      this.slot(reel, i);
    });
  }
}

export const scrollSlot = new scroll(79, 79, 9, 100);
