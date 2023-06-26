var btnElement = document.querySelectorAll(".btn");
var img = document.querySelector(".container");

var pics = ["img_1", "img_2", "img_3", "img_4", "img_5"];

var counter = 0;

for(var i=0; i<btnElement.length; i++){
    btnElement[i].addEventListener("click", function(){
        if(this.classList.contains("btnLeft")){
            counter--;
            if(counter < 0){
                counter = pics.length-1;
            }
            img.style.background = `url('images/${pics[counter]}.jpg') no-repeat center/cover fixed`;
        }
        else if(this.classList.contains("btnRight")){
            counter++;
            if(counter > pics.length-1){
                counter = 0;
            }
            img.style.background = `url('images/${pics[counter]}.jpg') no-repeat center/cover fixed`;
        }
    })
}