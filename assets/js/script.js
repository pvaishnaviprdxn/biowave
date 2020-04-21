learnMore();
function learnMore(idname){
    if(idname == 'img-div'){
        var show1 = document.getElementById("show1");
        var lm1 = document.getElementById("rm1");
        show1.classList.add('load');
        lm1.classList.add('readmore');
        }
    else if(idname == 'f2p1'){
        var show2 = document.getElementById("f2pm");
        var lm2 = document.getElementById("more");
        show2.classList.add('load');
        lm2.classList.add('readmore');
    }
}
