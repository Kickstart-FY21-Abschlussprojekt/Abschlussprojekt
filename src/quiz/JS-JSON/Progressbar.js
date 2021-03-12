function move() {
    //Define the Object
    let ele = document.getElementById("myBar");
    var width = 1;
    var intervall = setInterval(frame, 16,67);
    ele.style.width = 50%;
    // function frame() {
    //     if (width >= 100){
    //         clearInterval(intervall);
    //     }else{
    //         width ++;
    //         ele.style.width = width +"%";
    //     };
    // };
};