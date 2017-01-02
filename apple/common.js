var path = "img"

var img = ["apple1.jpg", "apple2.jpg", "apple3.png", "apple4.jpeg"]

var imgLen = img.length - 1

var indexDiv = document.getElementById("index")
var imgTag = document.getElementById("img")

var curImg = 0;

var displayNum = "";
var count = 1;
// displaying images index

for (var i = 0; i <= imgLen; i++) {

	displayNum += "<a href='#' onClick='displayImg(this.innerHTML)'> " + count++ + "</a>"
}

indexDiv.innerHTML = displayNum


// display Image
function displayImg(i){
	--i
	imgTag.src = path + "/" + img[i]
	curImg = i
}

// prev function
function prev() {
	if (curImg > 0)  {
		curImg--
		imgTag.src = path + "/" + img[curImg]

	}
}

// next function
function next() {
	if (curImg < imgLen) {
		curImg++
		imgTag.src = path + "/" + img[curImg]
	}
}
