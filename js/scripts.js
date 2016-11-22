// My Scripts

// Randomize Header
// Store & Generate Number
var maxRand = 3;
var numRand = Math.floor(Math.random() * maxRand);
//console.log(numRand);

// Store images
var img0 = '/img/thumbs/2T.jpg';
var img1 = '/img/thumbs/4T.jpg';
var img2 = '/img/thumbs/6T.jpg';

// Show Images
$('header img').attr('src', eval('img' + numRand) );

// Activate Gallery
$('figure').lightGallery({
    selector: 'a'
});