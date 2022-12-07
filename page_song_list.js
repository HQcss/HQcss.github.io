//song list
let All_song = [{
        name: "Dancing With Your Ghost",
        path: "../music/Dancing.mp3",
        img: "../images/dancing.jpg",
        singer: "Sasha Alex Sloan"
    },
    {
        name: "Yêu Thương Là Bão Tố",
        path: "../music/Yeu_thuong_la_bao_to.mp3",
        img: "../images/yeuthuong.jpg",
        singer: "Hùng Quân"
    },
    {
        name: "Phía Sau Một Cô Gái",
        path: "../music/phiasau1cogai.mp3",
        img: "../images/phiasau1cogai.png",
        singer: "Soobin Hoàng Sơn"
    },
    {
        name: "Tòng Phu",
        path: "../music/Tongphu.mp3",
        img: "../images/tongphu.jpg",
        singer: "Keyo"
    },
    {
        name: "Pháo Hồng",
        path: "../music/phaohong.mp3",
        img: "../images/phaohong.jpg",
        singer: "Đạt Long Vinh"
    }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

    let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fal fa-play" aria-hidden="true"></i></button>
      </div>
    </div>`;

    tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/