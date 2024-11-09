// BODY
const body = document.querySelector("body");
body.style.margin = "0px";
body.style.padding = "0px";

// CONTAINERS
const containerDiv = document.createElement("div");
containerDiv.id = "bodyDiv";
containerDiv.style.textAlign = "center";
document.querySelector("body").appendChild(containerDiv);

const imageContainer = document.createElement("div");
imageContainer.id = "imgContainer";
imageContainer.style.display = "grid";
imageContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
document.getElementById("bodyDiv").appendChild(imageContainer);

// HEADING
const H1 = document.createElement("h1");
H1.id = "h1";
H1.textContent = "Happy Birthday To This Happy and Cute Soul";
document.getElementById("bodyDiv").appendChild(H1);

// SECTIONS
const paraGraph = document.createElement("p");
paraGraph.textContent = "KOLADE MATANMI JOHNSON OLUWO";
paraGraph.style.fontStyle = "italic";
document.getElementById("bodyDiv").appendChild(paraGraph);

// IMAGE_SECTION
const imaGe0 = document.createElement("img");
imaGe0.src = "./images/Bcake.jpg";
imaGe0.style.height = "160px";
imaGe0.style.width = "150px";
imaGe0.style.width = "span 4";
imaGe0.style.margin = "20px 0px 0px 0px";
document.getElementById("imgContainer").appendChild(imaGe0);

const imaGe1 = document.createElement("img");
imaGe1.src = "./images/letterk.PNG";
imaGe1.style.height = "160px";
imaGe1.style.width = "150px";
imaGe1.style.margin = "20px 0px 0px 0px";
document.getElementById("imgContainer").appendChild(imaGe1);

const imaGe2 = document.createElement("img");
imaGe2.src = "./images/kold1.JPG";
imaGe2.style.height = "160px";
imaGe2.style.width = "150px";
imaGe2.style.margin = "20px 0px 0px 0px";
document.getElementById("imgContainer").appendChild(imaGe2);

const imaGe3 = document.createElement("img");
imaGe3.src = "./images/king.jpg";
imaGe3.style.height = "160px";
imaGe3.style.width = "150px";
imaGe3.style.margin = "20px 0px 0px 0px";
document.getElementById("imgContainer").appendChild(imaGe3);

const imaGe4 = document.createElement("img");
imaGe4.src = "./images/smallkold.JPG";
imaGe4.style.height = "160px";
imaGe4.style.width = "150px";
imaGe4.style.margin = "20px 0px 0px 0px";
document.getElementById("imgContainer").appendChild(imaGe4);

const imaGe5 = document.createElement("img");
imaGe5.src = "./images/king.jpg";
imaGe5.style.height = "160px";
imaGe5.style.width = "150px";
imaGe5.style.margin = "20px 0px 0px 0px";
document.getElementById("imgContainer").appendChild(imaGe5);

const imaGe6 = document.createElement("img");
imaGe6.src = "./images/kolade (2).jpg";
imaGe6.style.height = "160px";
imaGe6.style.width = "150px";
imaGe6.style.margin = "20px 0px 0px 0px";
document.getElementById("imgContainer").appendChild(imaGe6);

const imaGe7 = document.createElement("img");
imaGe7.src = "./images/kolade6.jpg";
imaGe7.style.height = "160px";
imaGe7.style.width = "150px";
imaGe7.style.margin = "20px 0px 0px 0px";
document.getElementById("imgContainer").appendChild(imaGe7);

const imaGe8 = document.createElement("img");
imaGe8.src = "./images/kolade3.jpg";
imaGe8.style.height = "160px";
imaGe8.style.width = "150px";
imaGe8.style.margin = "20px 0px 0px 0px";
document.getElementById("imgContainer").appendChild(imaGe8);

// const imaGe9 = document.createElement("img");
// imaGe9.src = "./images/kolade1.jpg";
// imaGe9.style.height = "160px";
// imaGe9.style.width = "150px";
// imaGe9.style.margin = "20px 0px 0px 0px";
// document.getElementById("imgContainer").appendChild(imaGe9);
