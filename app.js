// Selecting stuff from he DOM
const slides = document.querySelectorAll('.slide'); //This selects ALL .slide
const next = document.querySelector('#next'); //This slects only #next
const prev = document.querySelector('#prev'); //This slects only #prev
const auto = true; //This is to get ready for if you want auto slide
const intervalTime = 5000; //This is the time it will auto slide 5s
let slideInterval; // Initialize variable to keep track

//Next button slide
const nextSlide = () => {
	// First grab the first current element
	const current = document.querySelector('.current');
	// Now you want to quickly remove current class
	current.classList.remove('current');
	//Now you need to check for next .slide then add .current
	if(current.nextElementSibling) {
		current.nextElementSibling.classList.add('current');
	} else {
		// If there's no .slide in the end of the slide, then add current to start
		slides[0].classList.add('current');
	}
	//Now you want to set a delay
	setTimeout(() => current.classList.remove('current'));
};

//Previous button slide
const prevSlide = () => {
	// First grab the first current element
	const current = document.querySelector('.current');
	// Now you want to quickly remove current class
	current.classList.remove('current');
	//Now you need to check for PREVIOUS .slide then add .current
	if(current.previousElementSibling) {
		current.previousElementSibling.classList.add('current');
	} else {
		// add .current to last
		slides[slides.length - 1].classList.add('current');
	}
	//Now you want to set a delay
	setTimeout(() => current.classList.remove('current'));
};

//Add Button Events
next.addEventListener('click', e => {
 nextSlide();
 //This is to clear the interval, so when you click, it resets the 5 second autoslide
 if(auto) {
 	clearInterval(slideInterval);
 	slideInterval = setInterval(nextSlide, intervalTime);
 }
}); 

prev.addEventListener('click', e => {
 prevSlide();
 //This is to clear the interval, so when you click, it resets the 5 second autoslide
 if(auto) {
 	clearInterval(slideInterval);
 	slideInterval = setInterval(nextSlide, intervalTime);
 }
});

// Auto Slide
// if the variable 'auto', is true, run auto slide
if(auto) {
	// Run Next Slide at interval time. setInterval is javascript function
	slideInterval = setInterval(nextSlide, intervalTime);
} 