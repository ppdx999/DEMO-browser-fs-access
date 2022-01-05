export const right = (a) => (b) => b;
export const errLog = (e) => right(console.log(e))(e);

export const Text2Blob = (text) => {
    return new Blob([text], { type: "text/plain" });
  };