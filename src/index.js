import { fileOpen, fileSave } from "browser-fs-access";
import { getHtmlElem, setHtmlElem } from "./htmlElements";
import { getFile, setFile } from "./Store";
import { right, errLog, Text2Blob } from "./Util";

const updateHTMLElem = (file) => {
  setHtmlElem("filename")("value")(file.name);
  switch (file.type) {
    case "text/plain":
      return () => {
        file.text().then((text) => {
          setHtmlElem("editor")("value")(text);
        });
      };
    case "image/png":
      return () => {
        const url = URL.createObjectURL(file);
        setHtmlElem("img")("src")(url);
      };
    case "video/mp4":
      return () => {
        const url = URL.createObjectURL(file);
        setHtmlElem("video")("src")(url);
      };
  }
};

const openFileCallback = () => {
  fileOpen()
    .then((file) => {
      right(setFile(file))(updateHTMLElem(file)());
    })
    .catch(errLog);
};

const saveFileCallback = () => {
  const blob = Text2Blob(getHtmlElem('editor').value);
  fileSave(blob, {}, getFile().handle);
};

const saveFileAsCallback = () => {
  const blob = Text2Blob(getHtmlElem('editor').value);
  fileSave(blob);
};

setHtmlElem("open")("onclick")(openFileCallback);
setHtmlElem("save")("onclick")(saveFileCallback);
setHtmlElem("saveas")("onclick")(saveFileAsCallback);