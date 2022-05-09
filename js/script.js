// ciclo for per stampare numeri da 1 a 100
const container = document.querySelector("div.box")

for ( let i = 1; i <= 100; i++) {
    if(( i % 3 === 0) && ( i%5 === 0 )) {

        const element = '<div class="square fizz_buzz "> FizzBuzz </div>';
        container.innerHTML += element;
   
} else if( i % 3 === 0) {

    const element = '<div class="square fizz"> FizzBuzz </div>';
    container.innerHTML += element;

}  else if( i % 5 === 0) {

    const element = '<div class="square buzz"> Buzz </div>';
    container.innerHTML += element;

} else {
    const element = `<div class="square other">${i}</div>`;
    container.innerHTML += element;
}

}

