export const checkScrollDirectionIsUp = (event) => {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
};

export const isScrollTop = () => {
  return document.documentElement.scrollTop < 10;
};

export const isScrollBottom = () => {
  return document.documentElement.scrollTop + document.documentElement.clientHeight + 10 > document.documentElement.scrollHeight;
};
