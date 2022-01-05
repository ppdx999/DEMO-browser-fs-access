import { fileOpen } from "browser-fs-access";

export const openFileCallback = () => {
  fileOpen()
    .then((blob) => {
      console.log(blob);
    })
    .catch((e) => {
      console.error(e);
    });
};
