export const getHtmlElem = (id) => {
  return document.getElementById(id);
};

export const setHtmlElem = (id) => {
  return (property) => {
    return (value) => {
      return (document.getElementById(id)[property] = value);
    };
  };
};
