var links = ["http://farm8.staticflickr.com/7416/9462456534_ae253c37d1_b.jpg", "https://reptitrade.com/wp-content/uploads/2015/12/386910.jpg", "http://img.burrard-lucas.com/costa_rica/full/strawberry_poison-dart_frog.jpg", "http://imgc.allpostersimages.com/images/P-473-488-90/64/6465/26NH100Z/posters/thomas-marent-strawberry-poison-dart-frog-dendrobates-pumilio-bastimentos-national-park-bocas-del-toro.jpg", "https://assets.answersingenesis.org/img/cms/content/contentnode/header_image/poison-dart-frogs-drop-dead-gorgeous.jpg"]
var index = 0;
var image = document.getElementById("image-wrapper");

function slideLeft() {
    if(index - 1 < 0) {
        index = links.length - 1;
    } else {
        index--;
    }
    image.style.backgroundImage = "url('" + links[index] + "')";
    
}

function slideRight() {
    if(index + 1 >= links.length) {
        index = 0;
    } else {
        index++;
    }
    image.style.backgroundImage = "url('" + links[index] + "')";
    
}