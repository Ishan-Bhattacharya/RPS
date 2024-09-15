document.addEventListener('DOMContentLoaded',function() {
    let choice = document.querySelector("#Player1");

    const cchoice = ['Rock', 'Paper', 'Scissors'];

    choice.addEventListener('click', (event)=>{
        // console.log('clicked');
        let target = event.target;
        let pred = Math.floor(Math.random()*3);
        switch(target.id){
            case 'Rock':
                console.log(cchoice[pred]);
                break;
            case 'Scissors':
                console.log(cchoice[pred]);
                break;
            case 'Paper':
                console.log(cchoice[pred]);
                break;
        }
    })
})