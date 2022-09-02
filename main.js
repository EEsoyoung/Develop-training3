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
    main : document.createElement('main'),
    article : document.createElement('root'),
    aside : document.createElement('aside')
}
//root
styleing.size(docInit.root,"100vw","100vh");
//header
docInit.root.appendChild(docInit.header);
styleing.size(docInit.header,"100vw","10vh");
styleing.flexset(docInit.header,"center");
docInit.header.style.borderBottom = "1px solid #333"
//headerNav
docInit.header.appendChild(docInit.headerNav);
styleing.size(docInit.headerNav,"50%","100%");
styleing.flexset(docInit.headerNav,"space-between","center");
//main
docInit.root.appendChild(docInit.main);
styleing.size(docInit.main,"100vw","100%");
styleing.flexset(docInit.main)
//article
docInit.main.appendChild(docInit.article);
styleing.size(docInit.article,"60%","100%");
//aside
docInit.main.appendChild(docInit.aside);
styleing.size(docInit.aside,"40%","100%");



header.forEach((item)=>{
  let element = document.createElement('span');
  docInit.headerNav.appendChild(element);
  element.textContent = item;
});



