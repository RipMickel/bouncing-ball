var img_1 = document.getElementById("img-1");


function mouseIn(ele) {
	if (ele == 1) {
		img_1.setAttribute("src", "img/facebook-color.png");
	}
}

function mouseOut(ele) {
	if (ele == 1) {
		img_1.setAttribute("src", "img/facebook-gray.png");
    }
}