import trainingData from "./trainingData.js";
import makeTag from "./makeTagfunc.js"
import moreMaker from "./maketagmany.js"
import { styleing } from "./styling.js";
// console.log(trainingData);
const root = document.getElementById(`root`);

const header = makeTag("header",makeTag("ul",moreMaker("li",5,"hi")));

const main = makeTag("main",makeTag("article",moreMaker("div",3,"사진"))+makeTag("aside","ddd"));

root.innerHTML = header+main;

