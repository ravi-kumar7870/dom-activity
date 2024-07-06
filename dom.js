let btn = document.querySelector("button");

btn.addEventListener("click",function() {

   let h3 = document.querySelector("h3");
   let RandomColor= getRandomColor();
   h3.innerText = RandomColor;

   let div=document.querySelector("div");
   div.style.background=RandomColor;

   console.log("color updated");
});

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    
    let color = `rgb(${red}, ${green}, ${blue})`; 
   return color;
}
