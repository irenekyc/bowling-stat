const formatData = (entries) => {
  let columns = [];
  let data = [];
  Object.values(entries).forEach((entriesData, index) => {
    if (index === 0) {
      columns = Object.keys(entriesData);
    }

    data.push(Object.values(entriesData));
  });
  return {
    columns,
    data,
  };
};

export default formatData;
