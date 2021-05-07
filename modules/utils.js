const createObjectFromArray = (arr) => {
  const keys = arr.filter((item, index) => index % 2 === 0);
  const values = arr.filter((item, index) => index % 2 !== 0);
  return keys.reduce((res, key, index) => {
    res[key] = values[index];
    return res;
  }, {});
};

module.exports = {
  createObjectFromArray,
};
