const chat = document.querySelector('#boxMessages');
const inputText = document.querySelector('#inputMessage');
const buttonSent = document.querySelector('#buttonSent');
const iniHr = document.querySelector('#dataHora');
const likedin = document.querySelector('.user-info');
let date = new Date();
let hr = date.getHours();
if (hr < 10) hr = '0' + hr;
let min = date.getMinutes();
if (min < 10) min = '0' + min;
let flag = 0;
let msgRandom = "I had an amazing idea for a project! 😍";

openLinkedin = () => {
    likedin.addEventListener('click', () => {
        open("https://www.linkedin.com/in/weslley-oliveira-5a3443238");
    })
}

Hour = () => {

    setInterval(() => {

        let date = new Date();
        hr = date.getHours();
        if (hr < 10) hr = '0' + hr;
        min = date.getMinutes();
        if (min < 10) min = '0' + min;
    }, 500);
}


attHr = () => {
    iniHr.innerHTML = `Hoje ${hr}:${min} `
}

firstMsg = setInterval(first = () => {

        bootMessage(msgRandom);
        clearTime(firstMsg);
    }, 2000);

scdMsg = () => {    

    secondMsg = setInterval(first = () => {

        switch (flag) {
            case 0: msgRandom = "And if we had a modern and resposive chat in just one week?";
            break;
            case 1: msgRandom = "Sure! I'm counting on you! 🤩";
            break;
            case 2: msgRandom = "#Lets code! ";
            break;
            case 3: msgRandom = "I almost forgot... Don't forget to follow Weslley Oliveira on Linkedin and also on Github!! 😉";
            break;
            case 4: msgRandom = "Weslley Oliveira was the developer of the code.";
            break;
            case 5: msgRandom = "Now I'm tired and I'm going to sleep...";
            break;
            case 6: msgRandom = "*Auto Message* Cecilia is sleeping.";
            break;
        }
        flag++;
        bootMessage(msgRandom);
        rollScroll();
        clearTime(secondMsg);
    }, 2000);
}

bootMessage = (message) => {

    chat.innerHTML += ` <!-- RECEIVE --> ` +
    ` <div class="receive-message">` +
    `   <h3 class="user-h">Cecilia - ${hr}:${min}</h3>` +
    `       <div class="box-message-r">` +
    `           <span class="message-text">${message}</span>` +
    `       </div>` +
    ` </div> `;
}

myMessage = (text) => {

    return ` <!-- SENT --> ` +
                `<div class="sent-message">` +
                    `<h3 class="user-s">Você - ${hr}:${min}</h3>` +
                    `<div class="box-message-s">` +
                        `<span class="message-text">${text}</span>` +
                    `</div>` +
                `</div> `;
}

sentMessage = () => {

    buttonSent.addEventListener('click', () => {
        let x = inputText.value;
        if (inputText.value != '' && x.length <= 95) {
            chat.innerHTML += myMessage(inputText.value);
            rollScroll();
            clearMyMessage();
            scdMsg();
        }
    })
}

clearTime = (id) => {

    clearInterval(id);
}

clearMyMessage = () => {

    inputText.value = '';
}

rollScroll = () => {

    window.scrollBy(0,200);
}

//EXECUTE
Hour();
attHr();
sentMessage();
openLinkedin();
