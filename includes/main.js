/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];
if(localStorage.getItem("pictures")){
	pictures = localStorage.getItem("pictures").split(",");
}
function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
	$("#gallery").sortable({
		update: function(){
			var picOrder = [];
			$("#gallery").children("figure").each(function (){
				picOrder.push(this.style.backgroundImage.slice(5,-2));
			});
			console.log(picOrder);
			localStorage.setItem("pictures",picOrder)
		}
	});
	makeGallery(pictures);
	addModalCloseHandler();
}
function makeGallery(imageArray){
	//use loops and jquery dom creation to make the html structure inside the #gallery section

	//create a loop to go through the pictures
		//create the elements needed for each picture, store the elements in variable

		//attach a click handler to the figure you create.  call the "displayImage" function.  

		//append the element to the #gallery section

	for(var image of imageArray){
		var figure = $("<figure></figure>").addClass("imageGallery col-xs-12 col-sm-6 col-md-4").css("background-image", "url(\""+image+"\")");
		var caption = $("<figcaption></figcaption>").text(image.slice(7, image.length));
		figure.append(caption);
		figure.click(displayImage);
		$("#gallery").append(figure);
	}

}

function addModalCloseHandler(){
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
	$(".modal img").click(function (){
		$(event.target).parents(".modal").modal("toggle");
	});

}

function displayImage(){
	//find the url of the image by grabbing the background-image source, store it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need

	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method

	//change the modal-title text to the name you found above
	//change the src of the image in the modal to the url of the image that was clicked on

	//show the modal with JS.  Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
	var url = $(event.target).css("background-image");
	var name = $(event.target).find("figcaption").text();
	url = url.slice(url.indexOf("images"), url.length-2);
	$(".modal-title").text(name);
	$(".modal-body img").attr("src", url);

}





