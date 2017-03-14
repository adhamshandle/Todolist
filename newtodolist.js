var lis = document.querySelectorAll("li");

for (var i = 0; i <= lis.length; i++) {
lis[i].addEventListener("mouseover",function(){
	this.classList.add("selected");
	//this.style.color = "orange";
});
lis[i].addEventListener("mouseout",function(){
	this.classList.remove("selected");
	//this.style.color ="purple";
});
lis[i].addEventListener("click",function(){
	this.classList.toggle("done");
	//this.style.setProperty("text-decoration", "line-through");
	//this.style.setProperty("opacity", "0.5");
});
}
	
/*	firstli.addEventListener("mouseover",function(){
		
	}
});
}
firstli.addEventListener("mouseout",function(){
	firstli.style.color="black";
});*/