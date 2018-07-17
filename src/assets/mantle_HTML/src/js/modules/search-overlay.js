// Search Toggle
let searchToggle = document.querySelector('.site-header li.search button');
let searchbar = document.querySelector('.site-header .searchbar');
let searchbar_input = document.querySelector('.site-header .searchbar input');
searchToggle.addEventListener('click', toggleSearch);
function toggleSearch(e){
	if(e.currentTarget.classList.contains('active')){
		searchToggle.classList.remove('active');
		searchbar.classList.remove('active');
	} else {
		searchToggle.classList.add('active');
		searchbar.classList.add('active');
		setTimeout(function(){
			searchbar_input.focus();
		}, 10);
	}
}
