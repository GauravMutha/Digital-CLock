const headingArr=document.querySelectorAll(".clockNumbers");
const changeformat=document.querySelector(".format");
const ampm=document.querySelector(".ampm");
let hide=false;
setInterval(()=>{
    let date;
    if(!hide){
        date=new Date().toLocaleTimeString();
        var hours=new Date().getHours();
        if(hours%12<10 && hours%12>0)date="0"+date;
        ampm.style.display="block"
        if(hours<12)ampm.textContent="AM";
        else ampm.textContent="PM";
        changeformat.textContent="24-HOUR FORMAT"
        date=date.slice(0,8);
    }
    else{
        ampm.style.display="none"
        date=new Date().toLocaleTimeString([], {hour12: false });
        changeformat.textContent="12-HOUR FORMAT";
    }
    headingArr[0].textContent=date.slice(0,3);
    headingArr[1].textContent=date.slice(3,6);
    headingArr[2].textContent=date.slice(6);
},1000);

changeformat.addEventListener("click",()=>{
    hide?hide=false:hide=true;
})