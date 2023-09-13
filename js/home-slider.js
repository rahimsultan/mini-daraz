const sliders=['../images/slider-1.jpg','../images/slider-2.jpg','../images/slider-3.jpg','../images/slider-4.jpg']

let index=1

function sliderChange(){
    const container = document.getElementById('slider-container');
    const img = `<img class=" transition-opacity duration-500 ease-in-out" src="${sliders[index]}"/>`
    container.innerHTML= img;

    if(index < sliders.length -1){
        index++
    }else{
        index=0
    }
}
sliderChange()

setInterval(sliderChange, 3000);

