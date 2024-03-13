let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let main = document.getElementById('main11')

let counter = 0


plus.addEventListener('click', function() {
    counter++;
    console.log(counter);
   num.innerHTML = counter

   if (counter >= 20) {
    alert(`seats full! no more space!!!`);
    main.style.backgroundColor = 'lightgreen';
    plus.setAttribute('disabled', 'true')
    }
});



minus.addEventListener('click', function() {
    counter--;
    console.log(counter);
   num.innerHTML = counter

   if (counter <= 0) {
       alert(`no more!!!`);
       main.style.backgroundColor = 'lightgreen';
       minus.setAttribute('disabled', 'true')
       }
});



let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('second');


// let start = document.getElementById('start')
// let stop = document.getElementById('stop')
// let reset = document.getElementById('reset')

// let sec = 0;
// let min = 0;
// let hrs = 0;

// start.addEventListener('click', function() {
//     setInterval(function() {
//         sec++;
//         console.log(sec);
//         seconds.innerHTML = sec;

//         if (sec >=59) {
//             sec = 0
//             min++;
//             minutes.innerHTML = min;
//         }

//     })



// });

let paragh = document.getElementById('paragh')
let text2 = document.getElementById('text2')
let text3 = document.getElementById('text3')
let text4 = document.getElementById('text4')
let text5 = document.getElementById('text5')
let text6 = document.getElementById('text6')
