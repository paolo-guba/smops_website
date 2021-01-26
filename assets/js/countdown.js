function PrintCountdown(date_final) {

// Set the date we're counting down to
var countDownDate = new Date(date_final).getTime();
		
// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the results
  document.getElementById("countdown").innerHTML="Mission begins in<br><b>" + days + "</b> days <b>" + hours + "</b> hours and <b>"
  + minutes + "</b> minutes";

  //If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Touchdown, we are on Mars! See you in 2 weeks!";
  }
}, 1000);

}

/* function UpdateImage(date_final) {

    var countDownDate = new Date(date_final).getTime();
    
    // Get todays date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    switch (days) {
        case 35:
        document.getElementById('countdown_img').src='images/countdown/35.svg';
        break;
        case 34:
        document.getElementById('countdown_img').src='images/countdown/34.svg';
        break;
        case 33:
        document.getElementById('countdown_img').src='images/countdown/33.png';
        break;
        case 32:
        document.getElementById('countdown_img').src='images/countdown/32.png';
        break;
        case 31:
        document.getElementById('countdown_img').src='images/countdown/31.png';
        break;
        case 30:
        document.getElementById('countdown_img').src='images/countdown/30.png';
        break;
        case 29:
        document.getElementById('countdown_img').src='images/countdown/29.png';
        break;
        case 28:
        document.getElementById('countdown_img').src='images/countdown/28.png';
        break;
        case 27:
        document.getElementById('countdown_img').src='images/countdown/27.png';
        break;
        case 26:
        document.getElementById('countdown_img').src='images/countdown/26.png';
        break;
        case 25:
        document.getElementById('countdown_img').src='images/countdown/25.png';
        break;
        case 24:
        document.getElementById('countdown_img').src='images/countdown/24.png';
        break;
        case 23:
        document.getElementById('countdown_img').src='images/countdown/23.png';
        break;
        case 22:
        document.getElementById('countdown_img').src='images/countdown/22.png';
        break;
        case 21:
        document.getElementById('countdown_img').src='images/countdown/21.png';
        break;
        case 20:
        document.getElementById('countdown_img').src='images/countdown/20.png';
        break;
        case 19:
        document.getElementById('countdown_img').src='images/countdown/19.png';
        break;
        case 18:
        document.getElementById('countdown_img').src='images/countdown/18.png';
        break;
        case 17:
        document.getElementById('countdown_img').src='images/countdown/17.png';
        break;
        case 16:
        document.getElementById('countdown_img').src='images/countdown/16.png';
        break;
        case 15:
        document.getElementById('countdown_img').src='images/countdown/15.png';
        break;
        case 14:
        document.getElementById('countdown_img').src='images/countdown/14.png';
        break;
        case 13:
        document.getElementById('countdown_img').src='images/countdown/13.png';
        break;
        case 12:
        document.getElementById('countdown_img').src='images/countdown/12.png';
        break;
        case 11:
        document.getElementById('countdown_img').src='images/countdown/11.png';
        break;
        case 10:
        document.getElementById('countdown_img').src='images/countdown/10.png';
        break;
        case 9:
        document.getElementById('countdown_img').src='images/countdown/09.png';
        break;
        case 8:
        document.getElementById('countdown_img').src='images/countdown/08.png';
        break;
        case 7:
        document.getElementById('countdown_img').src='images/countdown/07.png';
        break;
        case 6:
        document.getElementById('countdown_img').src='images/countdown/06.png';
        break;
        case 5:
        document.getElementById('countdown_img').src='images/countdown/05.png';
        break;
        case 4:
        document.getElementById('countdown_img').src='images/countdown/04.png';
        break;
        case 3:
        document.getElementById('countdown_img').src='images/countdown/03.png';
        break;
        case 2:
        document.getElementById('countdown_img').src='images/countdown/02.png';
        break;
        case 1:
        document.getElementById('countdown_img').src='images/countdown/01.png';
        break;
        case 0:
        document.getElementById('countdown_img').src='images/countdown/00.png';
        break;
      }
} */