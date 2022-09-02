export default function moreMaker (tagName,count,textNode){
  let element = [];
  for(let i = 0; i < count; i++){
    let mkInner = `<${tagName}>${textNode}</${tagName}>`;
    element.push(mkInner);
    // console.log(element)
  }
  return element.join('');
};