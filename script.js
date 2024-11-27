
const userStatus = [
  {
    name: "Sheetal",
    time: "12:10 pm",
    img: "./Assets/sheetal2.jpg",
    isVideo: false,
    status: "https://cdn.pixabay.com/video/2021/06/13/77511-563001941_tiny.mp4",
  },
  {
    name: "Divyansh",
    time: "11:40 am",
    img: "./Assets/divyansh1.jpg",
    isVideo: true,
    status: "./Assets/video1.mp4",
  },
  {
    name: "Rahul Bhai",
    time: "12:10 am",
    img: "./Assets/rahulbhai.jpg",
    isVideo: false,
    status: "https://cdn.pixabay.com/video/2017/03/07/8216-207321100_tiny.mp4",
  },
  {
    name: "Bhura Bhai",
    time: "10:20 pm",
    img: "./Assets/bhurabhai.jpg",
    isVideo: true,
    status: "./Assets/video2.mp4",
  },
  {
    name: "Hariom",
    time: "09:40 am",
    img: "./Assets/hariom.jpg",
    isVideo: false,
    status: "https://cdn.pixabay.com/video/2017/03/07/8216-207321100_tiny.mp4",
  },
  {
    name: "Abhisek",
    time: "11:40 am",
    img: "./Assets/abhisek.jpg",
    isVideo: true,
    status: "./Assets/video3.mp4",
  },
  {
    name: "Manish",
    time: "01:40 pm",
    img: "./Assets/manish.jpg",
    isVideo: false,
    status: "https://cdn.pixabay.com/video/2017/03/07/8216-207321100_tiny.mp4",
  },
];

let clutter = "";
userStatus.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img id=${idx} src="${elem.img}" alt="">
                <div class="name">
                    <h2>${elem.name}</h2>
                    <p>${elem.time}</p>
                </div>
        </div>`
})

const stories = document.querySelector("main .stories");
stories.innerHTML = clutter;

const images = document.querySelectorAll(".stories .story img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal img");
const modalVideo = document.querySelector(".modal video");
const icon = document.querySelector(".modal i");

images.forEach(function (elem){
  elem.addEventListener("click", function(e){
    // console.log(e.target);
    modalImg.style.display = "block";
    modalVideo.style.display = "none";
    modal.style.display = "flex";

    if(userStatus[e.target.id].isVideo){
        modalImg.style.display = "none";
        modalVideo.style.display = "block";
        modalVideo.setAttribute("src",`${userStatus[e.target.id].status}`);
        elem.style.border = "none";
    }
    else{
        modalImg.setAttribute("src", `${e.target.src}`);
        elem.style.border = "none";
    }
  });
});

icon.addEventListener("click", function () {
  modal.style.display = "none";
  modalVideo.pause();
});