$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})





const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const image = document.querySelector(".image");
const feedback = document.querySelector(".feedback");

const users = [{
        name: 'Tanya Sinclair',
        role: 'UX Engineer',
        feedback: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        image: './images/Group 3.png'
    },
    {
        name: 'John Tarkpor',
        role: 'Junior Front-end Developer',
        feedback: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        image: './images/Group 4.png'
    },
    {
        name: 'Satyam Singh',
        role: 'Junior Front-end Developer',
        feedback: '“ Hello There. ”',
        image: './images/Group 4.png'
    }
]

let slide = 0;


const navigation = () => {
    if (slide > users.length - 1) {
        slide = 0;
    }
    image.innerHTML = `
    <img src="${users[slide].image}" alt="">
    `;
    feedback.innerHTML = `
    <img src="./images/pattern-quotes.svg" alt="">
    <p>${users[slide].feedback}</p>
    <h4 class="name">${users[slide].name}<span class="role">${users[slide].role}</span></h4>
    `;
    slide++;
}

navigation();
prevBtn.addEventListener('click', navigation);
nextBtn.addEventListener('click', navigation);