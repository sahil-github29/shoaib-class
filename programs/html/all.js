var images = [ "aa1.jpg"," aa2.jpg","aa3.jpg","aa4.jpg"];

//var caption =["caption for aa1","caption for aa2","caption for aa3","caption for aa4"];
    var img=0;
    var imglength = images.length - 1;
function sliderImage(x) {
    img += x;
if (img > imglength) {
    img = 0;
}
if (img < 0){
   img=imglength;
}

    document.getElementById("sliderImage").src = images[img],x;
    //document.getElementById("caption").innrHTML=caption[img];
return false;
}
;
