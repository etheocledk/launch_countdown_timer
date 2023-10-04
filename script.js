const starDate=new Date();
starDate.setDate(starDate.getDate()+8);
starDate.setHours(0,0,0,0);

function updateCountdown(){
    const now = new Date();
    const timeDifference = starDate - now;
    
    if(timeDifference <= 0) {
        clearInterval(countdownInterval)
        document.querySelector('.day').textContent="00"
        document.querySelector('.hours').textContent="00"
        document.querySelector('.minutes').textContent="00"
        document.querySelector('.seconds').textContent="00"
    }

    const days= Math.floor(timeDifference/(1000*60*60*24))
    const hours=Math.floor((timeDifference%(1000*60*60*24))/(1000*60*60))
    const minutes=Math.floor((timeDifference%(1000*60*60))/(1000*60))
    const seconds=Math.floor((timeDifference%(1000*60))/1000)

    document.querySelector('.day').textContent=`${String(days).padStart(2,'0')}`
    document.querySelector('.hours').textContent=`${String(hours).padStart(2,'0')}`
    document.querySelector('.minutes').textContent=`${String(minutes).padStart(2,'0')}`
    document.querySelector('.seconds').textContent=`${String(seconds).padStart(2,'0')}`
}
const countdownInterval=setInterval(updateCountdown,1000);