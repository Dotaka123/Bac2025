const daysEl=document.getElementById("andro")
const hoursEl=document.getElementById("ora")
const minuteEl=document.getElementById("minitra")
const secondeEl=document.getElementById("segondra")


const bac = "21 Jul 2025";

function countdown(){
    const bacDate=new Date(bac);
    const currentDate= new Date();

    const totalseconds= (bacDate - currentDate) / 1000;
    const andro= Math.floor(totalseconds / 3600 / 24);
    const ora=Math.floor(totalseconds/3600)%24;
    const minitra=Math.floor(totalseconds/60)%60;
    const segondra=Math.floor(totalseconds) %60;

    if (totalseconds <= 0) {
        // Quand le compte à rebours atteint 0
        daysEl.innerHTML = "Tu";
        hoursEl.innerHTML = "peux";
        minuteEl.innerHTML = "le";
        secondeEl.innerHTML = "faire!!";
        return;
    }

    daysEl.innerHTML=andro;
    hoursEl.innerHTML=ora;
    minuteEl.innerHTML=minitra;
    secondeEl.innerHTML=segondra;

    
}

countdown();
setInterval(countdown, 1000);