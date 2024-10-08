const testimonials = [
    {
        name: "Jack Doe",
        imgUrl: "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=1024x1024&w=is&k=20&c=8mgK2Kq73o8DIjazvLmEGkhx2p_7P5r3mvpbIM6q5cA=",
        text: "I have been using MSI for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great."
    },
    {
        name: "Aven Doski",
        imgUrl: "https://www.istockphoto.com/photo/portrait-of-attractive-young-school-boy-white-background-stock-photo-gm1370558408-440088546",
        text: "Apple makes me more productive and gets the job done in a fraction of the time. I'm glad I found Apple."
    },
    {
        name: "Clazier Sow",
        imgUrl: "https://media.istockphoto.com/id/1137310904/photo/close-up-photo-amazing-attractive-he-him-his-guy-gladly-toothy-smiling-self-confidently-look.jpg?s=1024x1024&w=is&k=20&c=m1DA0WaAMY4Njk0-CW6ypSuL5kesvqMXFe-Gu_lLbC4=",
        text: "Realme has helped my team and I stay on the same page. Previously, we were all over the board. Using Realme has definitely saved us time and money."
    }
]

const nameEl = document.querySelector(".username");
const textEl = document.querySelector(".text");
const imgEl = document.querySelector("img");

let index = 0;
updateTestimonial();

function updateTestimonial(){
    const {name, imgUrl, text} = testimonials[index];
    nameEl.innerText = "-" + " " + name;
    textEl.innerText = text;
    imgEl.src = imgUrl;
    
    index++;
    if(index === testimonials.length){
        index = 0;
    }
    setTimeout(updateTestimonial, 10000)

}