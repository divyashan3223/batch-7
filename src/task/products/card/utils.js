export const trim = (text, limit = 40) => {
  const output = text.slice(0, limit);
  return output + "...";
};

export const capitalize = text => {
  const firstLetter = text[0].toUpperCase();
  const rest = text.slice(1).toLowerCase();
  return firstLetter + rest;
};
