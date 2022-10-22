const handleScroll = () => {
	const header = document.querySelector('.header-component');
	const subheader = document.querySelector('.header-submenu');
	window.addEventListener('scroll', () => {
		if (window.scrollY > 0) {
			header.classList.add('scroll');
			subheader.classList.add('scroll');
		} else {
			header.classList.remove('scroll');
			subheader.classList.remove('scroll');
		}
	});
};

handleScroll();
