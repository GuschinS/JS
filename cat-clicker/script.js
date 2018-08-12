//const cat = document.querySelector('.cat');
//const cat_2 = document.querySelector('.cat_2');
//const elem = document.getElementById('cat');
//const elem_2 = document.getElementById('cat_2');
//let clicks = 0;
//let clicks_2 = 0;
//let newLi = document.createElement('h2');
//let newLi_2 = document.createElement('h2');
//
//
//elem.addEventListener('click', function () {
//	//the element has been clicked... do stuff here
//	//	console.log('click');
//	clicks += 1;
//	console.log(clicks + 'clicks cat');
//	newLi.innerHTML = clicks + ' clicks cat';
//	cat.appendChild(newLi);
//	//	const cat2 = cat.cloneNode(true);
//	//	document.body.appendChild(cat2);
//}, false);
//
//
//
//elem_2.addEventListener('click', function () {
//	//the element has been clicked... do stuff here
//	//	console.log('click');
//	clicks_2 += 1;
//	console.log(clicks_2 + 'clicks cat_2');
//	newLi_2.innerHTML = clicks_2 + ' clicks cat_2';
//	cat_2.appendChild(newLi_2);
//
//	//	const cat2 = cat.cloneNode(true);
//	//	document.body.appendChild(cat2);
//}, false);


let cats1;
const cat = document.getElementById('cat');
const cat1 = document.querySelector('.cat1');
const cat2 = document.querySelector('.cat2');
const cat3 = document.querySelector('.cat3');
const cat4 = document.querySelector('.cat4');
const cat5 = document.querySelector('.cat5');
const name = document.querySelector('.name');
const counter = document.querySelector('.counter');
let clicks = 0;
let clicks_2 = 0;
let clicks_3 = 0;


cat1.addEventListener('click', function () {
	name.innerHTML = 'Cat 1';
	cat.src = 'img/cat.jpg';
	cat.className = 'cat_1';
	counter.innerHTML = clicks + ' Clicks cat 1';
});

cat2.addEventListener('click', function () {
	name.innerHTML = 'Cat 2';
	cat.src = 'img/cat_2.jpg';
	cat.className = 'cat_2';
	counter.innerHTML = clicks_2 + ' Clicks cat 2';
});

cat3.addEventListener('click', function () {
	name.innerHTML = 'Cat 3';
	cat.src = 'img/cat_3.jpg';
	cat.className = 'cat_3';
	counter.innerHTML = clicks_3 + ' Clicks cat 3'
});

cats1 = document.querySelector('.cat_1');
cats1.addEventListener('click', function () {
	if (cat.classList.contains("cat_1")) {
		clicks += 1;
		counter.innerHTML = clicks + ' Clicks cat 1';
	} else if (cat.classList.contains("cat_2")) {
		clicks_2 += 1;
		counter.innerHTML = clicks_2 + ' Clicks cat 2';
	} else if (cat.classList.contains("cat_3")) {
		clicks_3 += 1;
		counter.innerHTML = clicks_3 + ' Clicks cat 3';
	}
});

