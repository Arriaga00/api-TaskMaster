import fs from "node:fs";

const saveImage = (file, email) => {
  const newPath = `uploads/${email}.png`;
  fs.renameSync(file.path, newPath);
  return newPath;
};

export default saveImage;
