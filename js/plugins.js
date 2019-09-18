const alert= document.querySelectorAll('.data');
const imgAlert=alert[1];
imgAlert.addEventListener('click',function(){
    console.log('it works');
    imgAlert.onclick=alert('You are clicking on me');
    imgAlert.alert(message);
});

function message(){
    window.alert('hi');
}