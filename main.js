var idols = ["Rabindrea.jfif","Albert.jfif","Elon.jfif"];

    var i = 0;
function next(){
    document.getElementById("img1").src=idols[i];
    i++;
    
  if(i==3){
    i=0;
      
  } 
}


var mypic = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
var o = 0;
function next2(){
    document.getElementById("img2").src=mypic[o];
    o++;
    
    if (o==5){
        o=0;
    }
}

var aims = ["Min.jfif","java.png","http.jfif"];
var m = 0;
function next3(){
    document.getElementById("img3").src=aims[m];
    m++;
    
    if (m==3){
        m=0;
    }
}