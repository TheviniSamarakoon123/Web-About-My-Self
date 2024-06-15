var mybutton1 = document.getElementById("myBtn1");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton1.style.display = "block";
    } else {
        mybutton1.style.display = "none";
    }
};

function bottomFunction() {
    document.body.scrollTop = document.body.scrollHeight;
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
}



var mybutton2 = document.getElementById("myBtn2");

window.onscroll = function() {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton2.style.display = "block";
    } else {
        mybutton2.style.display = "none";
    }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}