/* ======= Model ======= */

var model = {
	currentCat: null,
	cats: [
		{
			clickCount: 0,
			name: 'Tabby',
			imgSrc: 'img/cat.jpg',
        },
		{
			clickCount: 0,
			name: 'Tiger',
			imgSrc: 'img/cat_2.jpg',
        },
		{
			clickCount: 0,
			name: 'Scaredy',
			imgSrc: 'img/cat_3.jpg',
        }
    ]
};


/* ======= Octopus ======= */

var octopus = {

	init: function () {
		// set our current cat to the first one in the list
		model.currentCat = model.cats[0];

		// tell our views to initialize
		catListView.init();
		catView.init();
	},

	getCurrentCat: function () {
		return model.currentCat;
	},

	getCats: function () {
		return model.cats;
	},

	// set the currently-selected cat to the object passed in
	setCurrentCat: function (cat) {
		model.currentCat = cat;
	},

	// increments the counter for the currently-selected cat
	incrementCounter: function () {
		model.currentCat.clickCount++;
		catView.render();
	}


};


/* ======= View ======= */

var catView = {

	init: function () {
		// store pointers to our DOM elements for easy access later
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-img');
		this.countElem = document.getElementById('cat-count');
		this.adminElem = document.getElementById('b_admin');
		this.cancelElem = document.getElementById('cancel');
		let formElem = document.querySelector('.form');

		//open panele Admin
		this.adminElem.addEventListener('click', function () {
			formElem.style.display = null;
		});

		//close panele Admin
		this.cancelElem.addEventListener('click', function () {
			formElem.style.display = "none";
		});

		// on click, increment the current cat's counter
		this.catImageElem.addEventListener('click', function () {
			octopus.incrementCounter();
		});



		// render this view (update the DOM elements with the right values)
		this.render();
	},

	render: function () {
		// update the DOM elements with values from the current cat
		var currentCat = octopus.getCurrentCat();
		this.countElem.textContent = currentCat.clickCount + " Clicks";
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.imgSrc;
	}
};

var catListView = {

	init: function () {
		// store the DOM element for easy access later
		this.catListElem = document.getElementById('cat-list');

		// render this view (update the DOM elements with the right values)
		this.render();
	},

	render: function () {
		var cat, elem, i;
		// get the cats we'll be rendering from the octopus
		var cats = octopus.getCats();

		// empty the cat list
		this.catListElem.innerHTML = '';

		// loop over the cats
		for (i = 0; i < cats.length; i++) {
			// this is the cat we're currently looping over
			cat = cats[i];

			// make a new cat list item and set its text
			elem = document.createElement('li');
			elem.textContent = cat.name;

			// on click, setCurrentCat and render the catView
			// (this uses our closure-in-a-loop trick to connect the value
			//  of the cat variable to the click event function)
			elem.addEventListener('click', (function (catCopy) {
				return function () {
					octopus.setCurrentCat(catCopy);
					catView.render();
				};
			})(cat));

			// finally, add the element to the list
			this.catListElem.appendChild(elem);
		}
	}
};

// make it go!
octopus.init();
