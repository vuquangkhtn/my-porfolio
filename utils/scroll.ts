import { WheelEvent } from 'react';

export const checkScrollDirectionIsUp = (event: WheelEvent) => {
  return event.deltaY < 0;
};

export const isScrollTop = (document: Document) => {
  return document.documentElement.scrollTop < 10;
};

export const isScrollBottom = (document: Document) => {
  const docElement = document.documentElement; 
  console.log(docElement);
  return docElement.scrollTop + docElement.clientHeight + 10 > docElement.scrollHeight;
};
