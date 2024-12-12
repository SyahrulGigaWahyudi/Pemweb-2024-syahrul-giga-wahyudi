const playbutton=document.getElementById("ayam")
const audioplayer=document.getElementById("ayammp3")

playbutton.addEventListener("click",() =>{
    audioplayer.play();
});
const playbebek=document.getElementById("bebek")
const playbebekmp3=document.getElementById("bebekmp3")

playbebek.addEventListener("click",() =>{
    playbebekmp3.play();
});

const playsapi=document.getElementById("sapi")
const playsapimp3=document.getElementById("sapimp3")

playsapi.addEventListener("click",() => {
    playsapimp3.play();
});

const playkambing=document.getElementById("kambing")
const playkambingmp3=document.getElementById("kambingmp3")

playkambing.addEventListener("click",() => {
    playkambingmp3.play();
});