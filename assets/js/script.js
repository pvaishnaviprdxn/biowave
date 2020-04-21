loadmore();
function loadmore(idname){
    
    if(idname == 'rm1'){
        var show = document.getElementById("show1");
        var lm = document.getElementById("rm1");
        if(lm.toggleAttribute(true)){
            lm.classList.add('readmore');
            lm.classList.add('load');
        }
        else{
            show.classList.add('toggle');
        }
    }
}