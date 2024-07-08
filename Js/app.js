(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-46156385-1', 'cssscript.com');
	ga('send', 'pageview');




	/**   Start    **/
const navbar = document.querySelector('.navbar__container');
const headerImage = document.querySelector('.header__content--img');
const headerInfo = document.querySelector('.header__content--info');


window.addEventListener('load', function(){
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');

	navbar.style.animation = 'navbar 2s';
	navbar.style.visibility = 'visible';

	headerImage.style.animation = 'image 2s ';
	headerImage.style.visibility = 'visible';
	
	headerInfo.style.animation = 'content 2s';
	headerInfo.style.visibility = 'visible';
})

	const sidebarIcon = document.querySelector('.fa-times');
	const barIcon = document.querySelector('.fa-bars');
    const sidebarContainer = document.querySelector('.sidebar__container');
    
	window.addEventListener('resize', function(){
		
		if(window.innerWidth > 996){
		    sidebarContainer.style.right = '-100px';
			sidebarContainer.style.display = 'none'
	    }
    })

	barIcon.addEventListener('click', function(){
		sidebarContainer.style.animation = 'image 1s'
		sidebarContainer.style.display = 'inline-block'
		sidebarContainer.style.right = 0;
	})

	sidebarIcon.addEventListener('click', function(){
		sidebarContainer.style.animation = 'right 2s ';
		sidebarContainer.style.right = '-100px';
	})


	const hireButton = document.querySelector('.navbar--button');
	const hireContent = document.querySelector('.hire__content div');
    const hireIcon = document.querySelector('#times');
    const mainPart = document.querySelector('main');
	const footerContainer = document.querySelector('.footer');
	const headerContainer = document.querySelector('.header');
	const mainContainer = document.querySelector('.main');
    const headerContentButton = document.querySelector('.header__content--button');



	hireButton.addEventListener('click', function(){
		hireContent.style.visibility = 'visible';
		footerContainer.style.filter = 'blur(7px)';
		headerContainer.style.filter = 'blur(7px)';
		mainContainer.style.filter = 'blur(7px)';
		topButton.style.filter = 'blur(7px)';
	})
    
	hireIcon.addEventListener('click', function(){
		hireContent.style.visibility = 'hidden';
		footerContainer.style.filter = 'blur(0px)';
		headerContainer.style.filter = 'blur(0px)';
		mainContainer.style.filter = 'blur(0px)';
		topButton.style.filter = 'blur(0px)';
	})
	

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
	setTimeout(showSlides, 4000);
}


function plusSlide(n) {
	showSlidesButtonHandler(slideIndex += n);
}


function showSlidesButtonHandler(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
	     slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
	    dots[i].className = dots[i].className.replace(" active", "");
	}
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}






const contentOne = document.querySelector('.main__about--content--one');
const contentTwo = document.querySelector('.main__about--content--two');
const contentThree = document.querySelector('.main__about--content--three');
const portfolio = document.querySelector('.main__portfolio');
const contact = document.querySelector('.main__contact');
const topButton = document.querySelector('.top--button');


document.addEventListener('scroll', function(){
	if(window.scrollY > 100){
		contentOne.style.animation = 'content 1.5s ease-in';
		contentOne.style.visibility = 'visible';
		topButton.style.visibility = 'visible';
	}

    if(window.scrollY > 400){
		contentTwo.style.animation = 'image 1.5s ease-in';
		contentTwo.style.visibility = 'visible';
	}
    
	if(window.scrollY < 560){
		topButton.style.visibility = 'hidden';
	}
	

	if(window.scrollY > 650){
		contentThree.style.animation = 'content 1.5s ease-in';
		contentThree.style.visibility = 'visible';
	}

	if(window.scrollY > 1100){
		portfolio.style.animation = 'image 1.5s ease-in';
		portfolio.style.visibility = 'visible';
	}

	if(window.scrollY > 1800){
		contact.style.animation = 'content 1.5s ease-in';
		contact.style.visibility = 'visible';
	}
    


})

topButton.addEventListener('click', function(){
	document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

