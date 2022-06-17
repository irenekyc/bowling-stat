const sorting = (id, a, b) => {
  if (a.values && b.values) {
    if (a.values[id] > b.values[id]) return 1;
    if (b.values[id] > a.values[id]) return -1;
    return 0;
  } else {
    return 0;
  }
};

export default sorting;
