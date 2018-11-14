$( document ).ready(
    expantion = function(){
console.log(8888)
      var identifier = $("#TopNav");
      if (identifier.className === "container") {
          identifier.className += "expand";
        } else {
          identifier.className = "container";
        }
});
