document.addEventListener('DOMContentLoaded',function() {
    let choice = document.querySelector("#Player1");

    const cchoice = ['Rock', 'Paper', 'Scissors'];

    let text = document.querySelector('#results');

    choice.addEventListener('click', (event)=>{
        // console.log('clicked');
        let target = event.target;
        let pred = Math.floor(Math.random()*3);
        switch(target.id){
            case 'Rock':
                console.log(cchoice[pred]);
                if (cchoice[pred] === 'Rock') {
                    text.innerText = 'Draw';
                } else if (cchoice[pred]==='Paper') {
                    text.innerText = 'Loss';
                } else {
                    text.innerText = 'Win';
                }
                break;
            case 'Scissors':
                console.log(cchoice[pred]);
                if (cchoice[pred] === 'Rock') {
                    text.innerText = 'Loss';
                } else if (cchoice[pred]==='Paper') {
                    text.innerText = 'Win';
                } else {
                    text.innerText = 'Draw';
                }
                break;
            case 'Paper':
                console.log(cchoice[pred]);
                if (cchoice[pred] === 'Rock') {
                    text.innerText = 'Win';
                } else if (cchoice[pred]==='Paper') {
                    text.innerText = 'Draw';
                } else {
                    text.innerText = 'Loss';
                }
                break;
        }
    })
})