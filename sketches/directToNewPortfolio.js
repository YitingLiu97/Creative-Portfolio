document.addEventListener('DOMContentLoaded', function () {
    var oldInfo, showOldInfoBtn, newPortfolioPopUp, tabs; 
    oldInfo = document.getElementById("oldInfo");
    showOldInfoBtn = document.getElementById("ShowOldInfo");
    newPortfolioPopUp = document.getElementById("newPortfolioPopUp");
    tabs = document.getElementById("tabs");

    window.onload = HideAllInfo();
    showOldInfoBtn.addEventListener('click', ShowAllInfo);

});


function HideAllInfo() {
    console.log("hide all info working" + oldInfo);
    oldInfo.style.display = "none";
    tabs.style.display = "none";
    newPortfolioPopUp.style.display = 'block';
}

function ShowAllInfo() {
    console.log("show after clicking all info working" + oldInfo);

    oldInfo.style.display = "block";
    tabs.style.display = "flex";
    newPortfolioPopUp.style.display = 'none';

}