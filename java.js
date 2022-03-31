function openTab(e,tabID){
var i;
var tabContent = document.getElementsByClassName("tab-content");
if(tabID==2){
tabContent[0].style.display="none";
tabContent[1].style.display="block";}
if(tabID==1){
    tabContent[0].style.display="block";
    tabContent[1].style.display="none";}
}
function openlogin(e,tabID){
    var i;
    var tabContent = document.getElementsByClassName("tab-login");
    if(tabID==1){
    tabContent[1].style.display="none";
    tabContent[0].style.display="block";}
    if(tabID==2){
        tabContent[1].style.display="block";
        tabContent[0].style.display="none";}
    }
var index=1;
thaydoihinhanh = function(){
    var imgs = ["img/690-300-1-690x300.png","img/690-300-690x300-32.png","img/690-300-690x300-24.png"]
    document.getElementById('hieuunganh').src=imgs[index];
    index++;
    if(index==3)
    index=0;

}
setInterval(thaydoihinhanh,1500);