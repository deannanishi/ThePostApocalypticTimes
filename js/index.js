const links = document.querySelectorAll("header nav ul li a");
const content = document.querySelector("main .content");
let urlHome = "./partials/home.html";
let urlPortfolio = "./partials/portfolio.html";

function loadContent(urlValue) {
	fetch(urlHome)
		.then(function(response){
			return response.text();	
		})
	
		.then(function(homeContent){
			content.innerHTML = homeContent;
		})
		.catch(function(error){
			console.log(error.message);
		});
}

function handleClick(ev) {

	 preventing the default behaviour of the link tag!
	ev.preventDefault();

	let clickedLink = ev.target;

	 fetch the value of url
	url = clickedLink.href; 

	loadContent(url);
}

for (let link of links) {
	//link.addEventListener("click", handleClick);
}



function showContent (e) {
	let clickedLink = e.target;
	let linkLabel = clickedLink.textContent;
	
	if (linkLabel==="Journal") {
		fetch(urlHome)
		.then(function(response){
			return response.text();	
		})
	
		.then(function(homeContent){
			content.innerHTML = homeContent;
		})
		.catch(function(error){
			console.log(error.message);
		});
			
	} else if (linkLabel==="Gallery") {
		fetch(urlPortfolio)
		.then(function(response){
			return response.text();	
		})
	
		.then(function(portfolioContent){
			content.innerHTML = portfolioContent;
		})
		.catch(function(error){
			console.log(error.message);
		});
		
	}
	
}

for(let link of links) {
	link.addEventListener("click", showContent);
}