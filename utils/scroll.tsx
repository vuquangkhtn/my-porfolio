import { WheelEvent } from 'react';

export const checkScrollDirectionIsUp = (event: WheelEvent) => {
  if (event.deltaY) {
    return event.deltaY < 0;
  }
  return event.deltaY > 0;
};

export const isScrollTop = () => {
  return document.documentElement.scrollTop < 10;
};

export const isScrollBottom = () => {
  return document.documentElement.scrollTop + document.documentElement.clientHeight + 10 > document.documentElement.scrollHeight;
};
