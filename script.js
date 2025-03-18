function talk() {
    const mouth = document.getElementById("mouth");
    const meowSound = document.getElementById("meowSound");
    const talkSound = document.getElementById("talkSound");
    
    mouth.classList.add("talking");
    const sound = Math.random() > 0.5 ? meowSound : talkSound;
    sound.play();
    
    setTimeout(() => {
        mouth.classList.remove("talking");
    }, 1000);
}
