document.addEventListener('DOMContentLoaded', function () {
    funpart();
    // Add active class to the current control button (highlight it)
// hide();

    filterSelection('all');
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace("active", "");
            this.className += " active";
        });

        }

    // document.getElementById('workNav').addEventListener('onclick',workNav);
});


function funpart() {
    // document.addEventListener('mouseover', mousePos(event));
    document.addEventListener('keypress', randomEmoji);
}

function randomEmoji(e) {
    let xy = randomLocation();
    let keyNum, emojiShow, emojiUrl, emoji;

    // console.log('xy', xy);
    keyNum = e.keyCode || e.which;
    emojiShow = document.getElementById('emojis');

    emojiUrlArr = ['../assets/emojis/banana.png', '../assets/emojis/cherries.png', '../assets/emojis/kiwifruit.png', '../assets/emojis/lemon.png', '../assets/emojis/mango.png', '../assets/emojis/melon.png', '../assets/emojis/pear.png', '../assets/emojis/pineapple.png', '../assets/emojis/red-apple.png', '../assets/emojis/strawberry.png', '../assets/emojis/tangerine.png', '../assets/emojis/watermelon.png'];
    emojiUrl = emojiUrlArr[random(0, emojiUrlArr.length)];
    emoji = document.createElement('img');

    //space bar to cancel all the emoji on the canvas keyNum=32
    emoji.src = emojiUrl;
    emojiShow.append(emoji);
    if (keyNum === 32) {
        emojiShow.innerHTML = '';
    } else {
        emoji.style.width = '5%';
        emoji.style.position = 'relative';
        // emoji.style.left = "vw";
        // emoji.style.position='absolute';
        emoji.style.top = `${xy[0]}px`;
        emoji.style.right = `${xy[1]}px`;
        // console.log('emojiShow', emojiShow);
        // console.log('keyNum', keyNum);
    }


}

function random(min, max) {
    return Math.floor(Math.random() * (max - 1 - min));
}

function randomLocation() {
    const w = screen.width;
    const h = screen.height;
    console.log('w', w);
    // random in the padding area of the body
    const randomX = random(0, w);
    const randomY = random(0.1 * h, 0.9 * h);
    // const randomX = random(0.1 * w, 0.9 * w);
    // const randomY = random(0.1 * h, 0.9 * h);
    console.log(randomX, randomY);
    return [randomX, randomY];
}


// creating falling fruits - creating bouncing motions in web - normal circles - gravity 


// function workNav(){
//    let workNav= document.getElementById('workNav');
//    let list = workNav.createElement('ol');
// //    let pcomp = list.createElement('li');
// //    pcomp.innerHTML="pcomp";
//    let listItems=[];
//     let listSize = 5; 
//    for (let i=0; i<listSize;i++){
//        listItems[i]=list.createElement('li');
//        list.appendChild(listItems[i]);
//    }

// // //    let listItems[]=
// //    workNav.appendChild(list);
// //    list.appendChild
// //     let pcomp = listItem

// // console.log()

// }

// function hide(){

// if(document.getElementById("welcome").style.opacity==0){

//     document.getElementsByClassName("mydiv").style.display="none";
// }
//     let zINDEX= document.getElementsByClassName("mydiv").zIndex;
//     if (zINDEX==20){
//         zINDEX=0;
//         }
// }


function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        console.log('x[i]',x[i])
        if (x[i].className.indexOf(c) > -1)
            w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
            console.log('arr2', arr2);
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

