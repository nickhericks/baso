const carousel = document.querySelector(".carousel");

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

var intervalID = window.setInterval(getNewSlide, 3000);

function getNewSlide() {
	if(slideToShow < 4) {
		slideToShow++;
	} else {
		slideToShow = 0;
	}

		let newSlide = `
		<li class="tweet-item" id=${slideToShow}>
			<div class="tweet">${customers[slideToShow].tweet}</div><br>
			<div class="tweet-author">${customers[slideToShow].name}</div>
		</li>
	`;

	carousel.innerHTML = newSlide;	
}