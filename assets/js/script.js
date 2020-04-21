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
    else if(idname == 'f3p1'){
        var show3 = document.getElementById("f3pm");
        var lm3 = document.getElementById("more1");
        show3.classList.add('load');
        lm3.classList.add('readmore');
    }
    else if(idname == 'f6p1'){
        var show4 = document.getElementById("f6pm");
        var lm4 = document.getElementById("more2");
        show4.classList.add('load');
        lm4.classList.add('readmore');
    }
    else if(idname == 'f7p1'){
        var show5 = document.getElementById("f7pm");
        var lm5 = document.getElementById("more3");
        show5.classList.add('load');
        lm5.classList.add('readmore');
    }
    else if(idname == 'p2p1'){
        var show6 = document.getElementById("pro1p");
        var lm6 = document.getElementById("pro1");
        show6.classList.add('load');
        lm6.classList.add('readmore');
    }
    else if(idname == 'p3p1'){
        var show7 = document.getElementById("pro3p");
        var lm7 = document.getElementById("pro3");
        show7.classList.add('load');
        lm7.classList.add('readmore');
    }
    else{
        return;
    }

}
