const button = document.querySelector('.but');

button.addEventListener('click', function () {
    let res = prompt("Enter your name:");
    console.log(res);
    let answer = confirm("Are you ready?");
    console.log(answer); 

});
