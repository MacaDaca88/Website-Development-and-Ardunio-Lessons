/* Place your JavaScript in this file */

/*----------wtf do i do here languange makes no senxe x= y 5* 15  75--------------*/
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }