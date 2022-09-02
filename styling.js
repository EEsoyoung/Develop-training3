const styleing = {
  size : function(element,width,height){
    element.style.width = width;
    element.style.height = height;
  },
  flexset : function(element,justifyContent,alignItems,row){
    element.style.display = "flex";
    element.style.justifyContent = justifyContent;
    element.style.alignItems = alignItems;
    element.style.flexDirection = row;
  },
  bgColor : function(element,bgcolor){
    element.style.backgroundColor = bgcolor;
  }
};
export {styleing};