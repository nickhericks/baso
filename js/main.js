let slideToShow = 0;
let customers = [
	{
		name: 'Albert Rudatsimburwa',
		tweet: 'Finally I made it… @baso_patissier the Artist… viennoisery, pastry #MadeInRwanda of another league… rarely seen & tasted anything alike'
	},
	{
		name: 'Adam Kyamatare',
		tweet: 'Round 2 of pastries at @baso_patissier is even bloodier. These New Years resolutions are looking awfully unfamiliar… #RwOT'
	},
	{
		name: 'Regis Isheja',
		tweet: 'Tasting at @baso_patissier! Their signature chocolate “Matadi” is EVERYTHING! Sweet tooth heaven. SUPPORT YOUR OWN! #Rwanda #RwOT'
	},
	{
		name: 'Fiona Mbabazi',
		tweet: '@baso_patissier awesome stuff!! Thank you for saving the sweet tooth'
	},
	{
		name: 'Linda Mukangoga',
		tweet: 'Heaven @baso_patissier | Made in Rwanda'
	}
];

const carousel = document.querySelector(".carousel");

let slides = '';

customers.forEach( (customer, index) => {
	let display = '';

	if(index === 0) {
		display = 'show';
	} else {
		display = 'hide'
	}

	let newSlide = `
		<li class="customer-item ${display}" id=${index}>
			<span class="tweet">${customer.tweet}</span>
			<span class="tweet-author">${customer.name}</span>
		</li>
	`;
	slides = slides + newSlide;
});

// carousel.innerHTML = slides;


var intervalID = window.setInterval(getNewSlide, 3000);

function getNewSlide() {
	if(slideToShow < 4) {
		slideToShow++;
	} else {
		slideToShow = 0;
	}

		let newSlide = `
		<li class="customer-item" id=${slideToShow}>
			<span class="tweet">${customers[slideToShow].tweet}</span>
			<span class="tweet-author">${customers[slideToShow].name}</span>
		</li>
	`;

carousel.innerHTML = newSlide;

	
}


// Create function to display new slide after delay

let shuffleSlides = (slides, index) => {
	console.log(slides);




}


shuffleSlides(carousel);