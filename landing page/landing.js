let img=document.querySelector(".main_photo");//this is used to get the main photo


//this function will change the src of the main photo to the src of the photo clicked
function phones(phone){
    img.src=phone;
}

//this is used to change the color of the background according to the color of the phone clicked
function colors(color){
    document.querySelector(".container").style.background = color;
}

//open and close the side bar
const closebtn=document.querySelector(".close");
const menubtn=document.querySelector(".menu");
const sidebar=document.querySelector(".sidebar");
closebtn.addEventListener("click",()=>{
    sidebar.style.display="none";
    closebtn.style.display="none";
    menubtn.style.display="block";
    
})
menubtn.addEventListener("click",()=>{
    sidebar.style.display="block";
    menubtn.style.display="none";
    closebtn.style.display="block";
})