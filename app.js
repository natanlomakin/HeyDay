const formElement = document.querySelector("form");
const rootElement = document.querySelector("#rootFolder");
let parentFolder = "";
let fileFolderName = "";
let parentFolderName = "";
let fileType = "";
let folderType = "";

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  fileFolderName = document.querySelector("#nameInput").value;
  fileType = document.querySelector("#typeFile");
  folderType = document.querySelector("#typeFolder");
  parentFolderName = document.querySelector("#parentNameInput").value;

  const parentFolder = document.querySelector("." + parentFolderName);

  const newFile = document.createElement("li");
  const newFolder = document.createElement("ul");

  if (fileType.checked) {
    if (parentFolderName == "root") {
      rootElement.appendChild(newFile);
      newFile.innerHTML = fileFolderName;
    } else {
      console.log(parentFolder);
      parentFolder.appendChild(newFile);
      newFile.innerHTML = fileFolderName;
    }
  } else {
    if (parentFolderName == "root") {
      newFolder.classList.add(fileFolderName);
      rootElement.appendChild(newFolder);
      newFolder.innerHTML = fileFolderName;
    } else {
      newFolder.classList.add(fileFolderName);
      parentFolder.appendChild(newFolder);
      newFolder.innerHTML = fileFolderName;
    }
  }
});
