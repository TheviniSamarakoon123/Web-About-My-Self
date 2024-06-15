var seconds=0;
function displayseconds()
{
seconds+=1;
document.getElementByld("secondsdisplay").innerText="This page will redirect in"+seconds+"seconds...";
}
setInterval(displayseconds,1000);
function redirectpage()
{
window.location="../MainPage/MainPage.html";
}
setTimeout('redirectpage()',3000);
