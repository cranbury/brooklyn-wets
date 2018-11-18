$( document ).ready(
    expantion = function(){
      var identifier = $("#TopNav");
      if (identifier.className === "a.item") {
          identifier.className += "a.item.expand";
        } else {
          identifier.className = "a.item";
        }
});
