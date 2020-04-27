document.addEventListener('DOMContentLoaded', function () {
funpart();
});


function funpart() {
    // document.addEventListener('mouseover', mousePos(event));
    document.addEventListener('keypress', randomEmoji);
}

// function mousePos(e){
//     let x= e.x;
//     let y=e.y;
//     console.log(x,y);

// }

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
    console.log('w',w);
    // random in the padding area of the body
    const randomX = random(0, w);
    const randomY = random(0.1 * h, 0.9 * h);
    // const randomX = random(0.1 * w, 0.9 * w);
    // const randomY = random(0.1 * h, 0.9 * h);
    console.log(randomX,randomY);
    return [randomX, randomY];
}


// creating falling fruits - creating bouncing motions in web - normal circles - gravity 


