
function items(){
	if(sessionStorage.one == undefined){
		document.getElementById("one").value =0;
	}
	else {
		document.getElementById("one").value =sessionStorage.one;
	}
	if(sessionStorage.two== undefined){
		document.getElementById("two").value =0;
	}
	else {
		document.getElementById("two").value =sessionStorage.two;
	}
	if(sessionStorage.three== undefined){
		document.getElementById("three").value =0;
	}
	else {
		document.getElementById("three").value =sessionStorage.three;
	}
	if(sessionStorage.four== undefined){
		document.getElementById("four").value =0;
	}
	else {
		document.getElementById("four").value =sessionStorage.four;
	}
	if(sessionStorage.five== undefined){
		document.getElementById("five").value =0;
	}
	else {
		document.getElementById("five").value =sessionStorage.five;
	}
	if(sessionStorage.six== undefined){
		document.getElementById("six").value =0;
	}
	else {
		document.getElementById("six").value =sessionStorage.six;
	}
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
		document.getElementById("des_1").innerHTML = data[0].name + "<br> Rs " + data[0].price;
		document.getElementById("des_2").innerHTML = data[1].name + "<br> Rs " + data[1].price;
		document.getElementById("des_3").innerHTML = data[2].name + "<br> Rs "  + data[2].price;
		document.getElementById("des_4").innerHTML = data[3].name + "<br> Rs " + data[3].price;
		document.getElementById("des_5").innerHTML = data[4].name + "<br> Rs " + data[4].price;
		document.getElementById("des_6").innerHTML = data[5].name + "<br> Rs " + data[5].price;
		document.getElementById("image1").src = data[0].img;
		document.getElementById("image2").src = data[1].img;
		document.getElementById("image3").src = data[2].img;
		document.getElementById("image4").src = data[3].img;
		document.getElementById("image5").src = data[4].img;
		document.getElementById("image6").src = data[5].img;
		
    }
  };
  request.open("GET", "https://raw.githubusercontent.com/apurvamathur16/zizurz/master/lamps/lamps.json", true);
  request.send();
}
	  

function subtotal_func(){
	 
	 sessionStorage.one = parseInt(document.getElementById("one").value);
	 sessionStorage.two = parseInt(document.getElementById("two").value);
	 sessionStorage.three = parseInt(document.getElementById("three").value);
	 sessionStorage.four = parseInt(document.getElementById("four").value);
	 sessionStorage.five = parseInt(document.getElementById("five").value);
	 sessionStorage.six = parseInt(document.getElementById("six").value);
	
	 	 
	  
	 
 }	
 function calculate () {
	  var subtotal = (sessionStorage.one*3000 + sessionStorage.two*2000 + sessionStorage.three*4000 + sessionStorage.four*5000 + sessionStorage.five*4000 + sessionStorage.six*7000);
	 alert("total payable amount is " + subtotal);
 }

function addCart(){
	if(sessionStorage.one == 0 && sessionStorage.two == 0 && sessionStorage.three== 0 && sessionStorage.four ==0 && sessionStorage.five == 0 && sessionStorage.six == 0){
		document.getElementById("cart").style.display ="block";
		document.getElementById("cart").innerHTML = "No elements in the cart.";
		document.getElementById("items").innerHTML = " ";
	}
	else {
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			var shopping_cart_data= [];
			var quantity = [];
			if (this.readyState == 4 && this.status == 200) {
				var data = JSON.parse(this.response);
				if(sessionStorage.one>0){
					shopping_cart_data.push(data[0]);
					quantity.push(sessionStorage.one);
				}
				if(sessionStorage.two >0){
					shopping_cart_data.push(data[1]);
					quantity.push(sessionStorage.two);
				}
				if(sessionStorage.three >0){
					shopping_cart_data.push(data[2]);
					quantity.push(sessionStorage.three);
				}
				if(sessionStorage.four >0){
					shopping_cart_data.push(data[3]);
					quantity.push(sessionStorage.four);
				}
				if(sessionStorage.five >0){
					shopping_cart_data.push(data[4]);
					quantity.push(sessionStorage.five);
				}
				if(sessionStorage.six >0){
					shopping_cart_data.push(data[5]);
					quantity.push(sessionStorage.six);
				}
				
				
				var i;
				var big_div = document.getElementById("items");
				for( i=0;i<shopping_cart_data.length;i++){
					var items = document.createElement("p");
					items.style.textAlign = "center";
					var cart_image = document.createElement("img");
					cart_image.src = shopping_cart_data[i].img;
					cart_image.style.width = "150px";
					cart_image.style.height = "150px";
					items.appendChild(cart_image);
					var breaked = document.createElement("br");
					items.appendChild(breaked);
					var raw_data = shopping_cart_data[i].name;
					var node = document.createTextNode(raw_data);
					items.appendChild(node);
					var breaked = document.createElement("br");
					items.appendChild(breaked);
					var raw_data1 = "RS. " + shopping_cart_data[i].price;
					var node_1 = document.createTextNode(raw_data1);
					items.appendChild(node_1);
					var breaked = document.createElement("br");
					items.appendChild(breaked);
					var raw_data2 = "Quantity " + quantity[i];
					var node_2 = document.createTextNode(raw_data2);
					items.appendChild(node_2);
					big_div.appendChild(items);
					 
				}
			}
		};
		request.open("GET", "https://raw.githubusercontent.com/apurvamathur16/zizurz/master/lamps/lamps.json", true);
		request.send();
		
	}
} 
 
 var count =0;
  function fav(name) {
	
    if (count==0) {
     name.style.backgroundColor = "#FFAEAE";
        count=1;
    }
    else{
        name.style.backgroundColor = "#F0F0F0";
        count=0;
    }
}


function mapping(value){
	sessionStorage.item_no = value;
		
}

function details_of_items(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
		var item = parseInt(sessionStorage.item_no);
		document.getElementById("thumb1").src=data[item].img_small[0];
		document.getElementById("thumb2").src=data[item].img_small[1];
		document.getElementById("image").src=data[item].img_large;
		document.getElementById("info").innerHTML= "<h3>" + data[item].name + "</h3>" + "<p>Rs " + data[item].price + "</p><br> <h3>Product Details</h3> Type:" + data[item].product_details.type + "<br> Base Material: "  + data[item].product_details.base_material + "<br> Base Colour: " + data[item].product_details.base_colour + "</br></br> <h3>Material & Care</h3>" + data[item].material_care[0] + "<br>" + data[item].material_care[1] + " ," + data[item].material_care[2];
		
}
  };
  request.open("GET", "https://raw.githubusercontent.com/apurvamathur16/zizurz/master/lamps/details.json", true);
  request.send();

 sessionStorage.one = parseInt(document.getElementById("one").value);
	 sessionStorage.two = parseInt(document.getElementById("two").value);
	 sessionStorage.three = parseInt(document.getElementById("three").value);
	 sessionStorage.four = parseInt(document.getElementById("four").value);
	 sessionStorage.five = parseInt(document.getElementById("five").value);
	 sessionStorage.six = parseInt(document.getElementById("six").value);


}


function myfn1(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
		var item = parseInt(sessionStorage.item_no);
		document.getElementById("image").src=data[item].img_small[1];
		
		
}
  };
  request.open("GET", "https://raw.githubusercontent.com/apurvamathur16/zizurz/master/lamps/details.json", true);
  request.send();
}


function myfn2(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
		var item = parseInt(sessionStorage.item_no);
		document.getElementById("image").src=data[item].img_small[0];
}
	};
	
	request.open("GET", "https://raw.githubusercontent.com/apurvamathur16/zizurz/master/lamps/details.json", true);
  request.send();
};


function clearcart(){
	sessionStorage.one=0;
	sessionStorage.two=0;
	sessionStorage.three=0;
	sessionStorage.four=0;
	sessionStorage.five=0;
	sessionStorage.six=0;
	addCart();
}
