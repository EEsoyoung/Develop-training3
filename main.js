import trainingData from "./trainingData.js";
// import makeTag from "./makeTagfunc.js"
import moreMaker from "./maketagmany.js"
import { styleing } from "./styling.js";
console.log(trainingData);

const {header} = trainingData;
console.log(header);
const {thumnailData} = trainingData;
console.log(thumnailData)
// const root = document.getElementById(`root`);
// styleing.size(root,"100vw","100vh");

// const header = makeTag("header",makeTag("ul id =`li-container`",moreMaker("li",5,"hi")));


// const main = makeTag("main",makeTag("article",moreMaker("div",3,"사진"))+makeTag("aside",makeTag("button",">")+makeTag("div","사진")));


// root.innerHTML = header+main;
const docInit = {
    root : document.getElementById(`root`),
    header : document.createElement('header'),
    headerNav : document.createElement('nav'),
    main : document.createElement('main')
}
//root
styleing.size(docInit.root,"100vw","100vh");
//header
docInit.root.appendChild(docInit.header);
styleing.size(docInit.header,"100vw","10vh");
styleing.flexset(docInit.header,"center")
//headerNav
docInit.header.appendChild(docInit.headerNav);
styleing.size(docInit.headerNav,"40%","100%");
docInit.headerNav.style.display = "flex";
docInit.headerNav.style.justifyContent = "space-around";
docInit.headerNav.style.alignItems = "center";
//main
docInit.root.appendChild(docInit.main);



for(let i = 0; i < header.length; i++){
  let element = document.createElement('span');
  docInit.headerNav.appendChild(element);
  element.textContent = header[i];
}




