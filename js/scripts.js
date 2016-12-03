// Randomize Header
var max = 3;
var randNum = Math.floor(Math.random() * max );
console.log(randNum);

// Store Images
var img0 = '/img/thumbs/Tbuda1.jpg';
var img1 = '/img/thumbs/Tbuda2.jpg';
var img2 = '/img/thumbs/Tmexico1.jpg';


// Show Images

$('header img').attr('src', eval('img' + randNum) );

//Activate Gallery

$('figure').lightGallery({
    selector: 'a'
});