const divContMC = document.querySelector('#minecraft');
const divContSS = document.querySelector('#subsurf');
const divContSC = document.querySelector('#sandcut');
let isClicked = true;

$('#emIframe').hide();
$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();
    let getURL = $('.url').val();
    let newURL = getURL.replace("watch?v=", "embed/");
    $('#emIframe').attr( "src", newURL ).show();
  });
});


let showMC = function (params) {
    if(isClicked){
        divContMC.style.display = 'block';
        divContSS.style.display = 'none';
        divContSC.style.display = 'none';

    }else {
        divContMC.style.display = 'none';
        
    }

}

let showSS = function (params) {
    if(isClicked){
        divContSS.style.display = 'block';
        divContMC.style.display = 'none';
        divContSC.style.display = 'none';
        
    }else {
        divContSS.style.display = 'none';
      
    }

}
let showSS = function (params) {
    if(isClicked){
        divContSC.style.display = 'block';
        divContMC.style.display = 'none';
        divContSS.style.display = 'none';
        
    }else {
        divContSC.style.display = 'none';
      
    }

}
