
var $menuButton = document.getElementById('icon_menu');
var $menu = document.getElementById('nav');
    $menuButton.addEventListener('touchstart', togleMenu);
    
function togleMenu(){
	$menu.classList.toggle('active');
}