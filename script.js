let isShown = false;

function rel(){
  let request = new XMLHttpRequest();
  let url = "https://api.adviceslip.com/advice";

  request.open("GET", url, true);

  request.onload = function() {

  let data = JSON.parse(this.response); 
  //let advice = document.getElementById('advice');
  
  if (request.status >= 200 && request.status < 400) {
    $("#advice").text(data["slip"].advice);

    //advice.textContent = data["slip"].advice;
  }
  };
  request.send();
}

function showAdvice(){
  if (isShown == false){
    $("#advice").show();
    isShown = true;
  } else {
    $("#advice").hide();
    isShown = false;
  }
}
function rel(){
  let request = new XMLHttpRequest();
  let url = "https://api.adviceslip.com/advice";

  request.open("GET", url, true);

  request.onload = function() {

  let data = JSON.parse(this.response); 
  //let advice = document.getElementById('advice');
  
  if (request.status >= 200 && request.status < 400) {
    $("#advice").text(data["slip"].advice);

    //advice.textContent = data["slip"].advice;
  }
  };
  request.send();
}

function showAdvice(){
  if (isShown == false){
    $("#advice").show();
    $('#side').show();//shows Advise sign on thr right
    isShown = true;
  } else {
    $("#advice").hide();
    $("#side").hide();//hides Advise sign on thr right
    $().text("yyy");
    isShown = false;
  }
}