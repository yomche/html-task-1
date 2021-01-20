/*При нажатии на "About UI Lab" в навигации 
появляется всплывающее окно с текстом
"Some information about UI lab"
*/
window.onload = function() {
    const click = document.getElementById('item-1-click');
    click.onclick = function() { 
        alert('Some information about UI lab.');
    }
}