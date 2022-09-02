export default function elementMaker (tagName,textNode){
  let element = [];
  let mkTag = `<${tagName}>${textNode}</${tagName}>`
  element.push(mkTag);
  return element.join('');
};
