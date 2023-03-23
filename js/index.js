// Mobile Navigation
const Navigation = document.getElementById('nav');
var clickCounter = 0;

function NavUnhide(){
    if (clickCounter == 0){
        Navigation.style.top = 75 + 'px';
        clickCounter++;
    }
    else{
        Navigation.style.top = -150 + '%';
        clickCounter--;
    }
}


// Slider

const SliderBody = document.getElementById('review-slider-body');
const BodyWidth = getComputedStyle(document.body).width.split('p');
var offset = 0;

console.log(BodyWidth[0]);
function NextSlide(){
    if(BodyWidth[0] > 767){
        offset += 100;
        if(offset > 200){
            offset = 0;
        }
        SliderBody.style.left = -offset + '%';
    }
    else if(BodyWidth[0] <= 767 && BodyWidth[0] > 500){
        offset += 100;
        if(offset > 400){
            offset = 0;
        }
        SliderBody.style.left = -offset + '%';
    }
    else if(BodyWidth[0] <= 500){
        offset += 100;
        if(offset > 800){
            offset = 0;
        }
        SliderBody.style.left = -offset + '%';
    }
}

function PrevSlide(){
    if(BodyWidth[0] > 767){
        offset -= 100;
        if(offset < 0){
            offset = 200;
        }
        SliderBody.style.left = -offset + '%';
    }
    else if(BodyWidth[0] <= 767 && BodyWidth[0] > 500){
        offset -= 100;
        if(offset < 0){
            offset = 400;
        }
        SliderBody.style.left = -offset + '%';
    }
    else if(BodyWidth[0] <= 500){
        offset -= 100;
        if(offset < 0){
            offset = 800;
        }
        SliderBody.style.left = -offset + '%';
    }
}