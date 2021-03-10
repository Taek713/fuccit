// var page = 1;

// function scrollDown() {

//     document.getElementsByClassName("cont" + page)[0].className = "cont up cont" + page;

//     page++;
//     document.getElementsByClassName("cont" + page)[0].className = "cont currentPage cont" + page;

// }

// function scrollUp() {

//     document.getElementsByClassName("cont" + page)[0].className = "cont down cont" + page;

//     page--;
//     document.getElementsByClassName("cont" + page)[0].className = "cont currentPage cont" + page;

// }

// const text = document.querySelector(".text");
// text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
// const animation = anime.timeline({
//     targets: ".text span",
//     easing: "easeInOutExpo",
//     loop: true
// });

// setTimeout(function() {
//     animation
//         .add({
//             rotate: function() {
//                 return anime.random(-360, 360);
//             },
//             translateX: function() {
//                 return anime.random(-500, 500);
//             },
//             translateY: function() {
//                 return anime.random(-500, 500);
//             },
//             duration: 5000,
//             delay: anime.stagger(20)
//         })

//     .add({
//         rotate: 0,
//         translateX: 0,
//         translateY: 0,
//         duration: 5000,
//         delay: anime.stagger(20)
//     });
// }, 5500);