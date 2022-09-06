/* ---- particles.js config ---- */
window.addEventListener('DOMContentLoaded', (event) => {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  });
  jQuery(function($){
    $(document).ajaxSend(function() {
      $("#particles-js").fadeIn(300);　
    });
          
  });
  

const buttonElement = document.querySelectorAll('.tablinks');
const tabContent = document.querySelectorAll(".tabcontent");

tabContent[0].style.display = "block";

buttonElement.forEach(function (i) {
    i.addEventListener('click', function (event) {

        for (let x = 0; x < buttonElement.length; x++) {
            if (event.target.id == buttonElement[x].id) {
                buttonElement[x].className = buttonElement[x].className.replace(" active", "");
                tabContent[x].style.display = "block";
                event.currentTarget.className += " active";
            } else {
                tabContent[x].style.display = "none";
                buttonElement[x].className = buttonElement[x].className.replace(" active", "");
            }
        }
        
    });
});
  
// 350 

const HOTSPOTS_CONFIG = [
    {
      positions: [
        { imageIndex: 1, xCoord: 310, yCoord: 300 },
              { imageIndex: 2, yCoord: 300, xCoord: 280},
              { imageIndex: 3, yCoord: 300, xCoord: 250 },
              { imageIndex: 4, yCoord: 300, xCoord: 220 },
              { imageIndex: 5, yCoord: 300, xCoord: 190 },
              { imageIndex: 6, yCoord: 300, xCoord: 160 }
      ],
      variant: {
        images: [
          {
            src:
              "https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            alt: "air snorkel"
          }
        ],
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id justo lobortis, posuere eros non, sagittis nisl. Fusce vehicula turpis nec lorem scelerisque",
        moreDetailsUrl: "/"
      }
    },
      {
      positions: [
        { imageIndex: 1, xCoord: 385, yCoord: 325 },
              { imageIndex: 2, xCoord: 355, yCoord: 335 },
              { imageIndex: 3, xCoord: 325, yCoord: 335 },
              { imageIndex: 4, xCoord: 295, yCoord: 335 },
              { imageIndex: 5, xCoord: 265, yCoord: 335 },
              { imageIndex: 6, xCoord: 235, yCoord: 335 }
      ],
      variant: {
        images: [
          {
            src:
              "https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            alt: "air snorkel"
          }
        ],
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id justo lobortis, posuere eros non, sagittis nisl. Fusce vehicula turpis nec lorem scelerisque",
        moreDetailsUrl: "/"
      }
    },
      {
      positions: [
        { imageIndex: 1, xCoord: 212, yCoord: 215 },
              { imageIndex: 2, yCoord: 215, xCoord: 200},
              { imageIndex: 3, yCoord: 215, xCoord: 190 },
              { imageIndex: 4, yCoord: 215, xCoord: 185 },
              { imageIndex: 5, yCoord: 205, xCoord: 175 },
              { imageIndex: 6, yCoord: 205, xCoord: 170 }
      ],
      variant: {
        images: [
          {
            src:
              "https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            alt: "air snorkel"
          }
        ],
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id justo lobortis, posuere eros non, sagittis nisl. Fusce vehicula turpis nec lorem scelerisque",
        moreDetailsUrl: "/"
      }
    },
      {
      positions: [
        { imageIndex: 7, xCoord: 210, yCoord: 255 },
              { imageIndex: 8,  xCoord: 180, yCoord: 255 },
              { imageIndex: 9,  xCoord: 150, yCoord: 255 },
              { imageIndex: 10,  xCoord: 150, yCoord: 235  },
      ],
      variant: {
        images: [
          {
            src:
              "https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            alt: "air snorkel"
          }
        ],
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id justo lobortis, posuere eros non, sagittis nisl. Fusce vehicula turpis nec lorem scelerisque",
        moreDetailsUrl: "/"
      }
    },
      {
      positions: [
        { imageIndex: 9, xCoord: 185, yCoord: 345 },
              { imageIndex: 10,  xCoord: 155, yCoord: 345 },
              { imageIndex: 11,  xCoord: 130, yCoord: 335 },
              { imageIndex: 12,  xCoord: 110, yCoord: 325 },
              { imageIndex: 13,  xCoord: 90, yCoord: 325 },
  
      ],
      variant: {
        images: [
          {
            src:
              "https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            alt: "air snorkel"
          }
        ],
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id justo lobortis, posuere eros non, sagittis nisl. Fusce vehicula turpis nec lorem scelerisque",
        moreDetailsUrl: "/"
      }
    },
      {
      positions: [
        { imageIndex: 13, xCoord: 175, yCoord: 385 },
              { imageIndex: 14,  xCoord: 155, yCoord: 380 },
              { imageIndex: 15,  xCoord: 145, yCoord: 375 },
              { imageIndex: 16,  xCoord: 135, yCoord: 365 },
              { imageIndex: 17,  xCoord: 125, yCoord: 355 },
              { imageIndex: 18,  xCoord: 115, yCoord: 345 },
              // { imageIndex: 19,  xCoord: 120, yCoord: 355 },
              // { imageIndex: 20,  xCoord: 120, yCoord: 355 },
              // { imageIndex: 21,  xCoord: 120, yCoord: 355 },
  
      ],
      variant: {
        images: [
          {
            src:
              "https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            alt: "air snorkel"
          }
        ],
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id justo lobortis, posuere eros non, sagittis nisl. Fusce vehicula turpis nec lorem scelerisque",
        moreDetailsUrl: "/"
      }
    },
    {
      positions: [
        { imageIndex: 13, xCoord: 370, yCoord: 320 },
              { imageIndex: 14,  xCoord: 370, yCoord: 330 },
              { imageIndex: 15,  xCoord: 370, yCoord: 335 },
              { imageIndex: 16,  xCoord: 365, yCoord: 340 },
              { imageIndex: 17,  xCoord: 365, yCoord: 345 },
              { imageIndex: 18,  xCoord: 355, yCoord: 355 },
              // { imageIndex: 19,  xCoord: 120, yCoord: 355 },
              // { imageIndex: 20,  xCoord: 120, yCoord: 355 },
              // { imageIndex: 21,  xCoord: 120, yCoord: 355 },
  
      ],
      variant: {
        images: [
          {
            src:
              "https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            alt: "air snorkel"
          }
        ],
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id justo lobortis, posuere eros non, sagittis nisl. Fusce vehicula turpis nec lorem scelerisque",
        moreDetailsUrl: "/"
      }
    },
    {
      positions: [
        { imageIndex: 13, xCoord: 290, yCoord: 320 },
              { imageIndex: 14,  xCoord: 285, yCoord: 320 },
              { imageIndex: 15,  xCoord: 280, yCoord: 320 },
              { imageIndex: 16,  xCoord: 265, yCoord: 320 },
              { imageIndex: 17,  xCoord: 260, yCoord: 325 },
              { imageIndex: 18,  xCoord: 250, yCoord: 325 },
              { imageIndex: 19,  xCoord: 240, yCoord: 325 },
  
              // { imageIndex: 19,  xCoord: 120, yCoord: 355 },
              // { imageIndex: 20,  xCoord: 120, yCoord: 355 },
              // { imageIndex: 21,  xCoord: 120, yCoord: 355 },
  
      ],
      variant: {
        timages: [
          {
            src:
              "https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            alt: "air snorkel"
          }
        ],
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id justo lobortis, posuere eros non, sagittis nisl. Fusce vehicula turpis nec lorem scelerisque",
        moreDetailsUrl: "/"
      }
    },
    {
      positions: [
        { imageIndex: 13, xCoord: 295, yCoord: 270 },
              { imageIndex: 14,  xCoord: 288, yCoord: 270 },
              { imageIndex: 15,  xCoord: 280, yCoord: 275 },
              { imageIndex: 16,  xCoord: 270, yCoord: 265 },
              { imageIndex: 17,  xCoord: 263, yCoord: 265 },
              { imageIndex: 18,  xCoord: 253, yCoord: 265 },
              { imageIndex: 19,  xCoord: 245, yCoord: 265 },
  
              // { imageIndex: 19,  xCoord: 120, yCoord: 355 },
              // { imageIndex: 20,  xCoord: 120, yCoord: 355 },
              // { imageIndex: 21,  xCoord: 120, yCoord: 355 },
  
      ],
      variant: {
        images: [
          {
            src:
              "https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            alt: "air snorkel"
          }
        ],
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id justo lobortis, posuere eros non, sagittis nisl. Fusce vehicula turpis nec lorem scelerisque",
        moreDetailsUrl: "/"
      }
    },
    ,
    {
      positions: [
        { imageIndex: 13, xCoord: 345, yCoord: 270 },
              { imageIndex: 14,  xCoord: 345, yCoord: 270 },
              { imageIndex: 15,  xCoord: 340, yCoord: 275 },
              { imageIndex: 16,  xCoord: 340, yCoord: 265 },
              { imageIndex: 17,  xCoord: 335, yCoord: 265 },
              { imageIndex: 18,  xCoord: 328, yCoord: 265 },
              { imageIndex: 19,  xCoord: 318, yCoord: 265 },
  
              // { imageIndex: 19,  xCoord: 120, yCoord: 355 },
              // { imageIndex: 20,  xCoord: 120, yCoord: 355 },
              // { imageIndex: 21,  xCoord: 120, yCoord: 355 },
  
      ],
      variant: {
        images: [
          {
            src:
              "https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            alt: "air snorkel"
          }
        ],
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id justo lobortis, posuere eros non, sagittis nisl. Fusce vehicula turpis nec lorem scelerisque",
        moreDetailsUrl: "/"
      }
    },
    {
      positions: [
        { imageIndex: 13, xCoord: 315, yCoord: 180 },
              { imageIndex: 14,  xCoord: 310, yCoord: 180 },
              { imageIndex: 15,  xCoord: 310, yCoord: 180 },
              { imageIndex: 16,  xCoord: 300, yCoord: 180 },
              { imageIndex: 17,  xCoord: 300, yCoord: 180 },
              { imageIndex: 18,  xCoord: 290, yCoord: 180 },
              { imageIndex: 19,  xCoord: 280, yCoord: 190 },
  
              // { imageIndex: 19,  xCoord: 120, yCoord: 355 },
              // { imageIndex: 20,  xCoord: 120, yCoord: 355 },
              // { imageIndex: 21,  xCoord: 120, yCoord: 355 },
  
      ],
      variant: {
        images: [
          {
            src:
              "https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            alt: "air snorkel"
          }
        ],
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id justo lobortis, posuere eros non, sagittis nisl. Fusce vehicula turpis nec lorem scelerisque",
        moreDetailsUrl: "/"
      }
    },{
      positions: [
        { imageIndex: 13, xCoord: 395, yCoord: 210 },
              { imageIndex: 14,  xCoord: 405, yCoord: 210 },
              { imageIndex: 15,  xCoord: 410, yCoord: 220 },
              { imageIndex: 16,  xCoord: 415, yCoord: 220 },
              { imageIndex: 17,  xCoord: 417, yCoord: 220 },
              { imageIndex: 18,  xCoord: 415, yCoord: 230 },
              { imageIndex: 19,  xCoord: 415, yCoord: 235 },
  
              // { imageIndex: 19,  xCoord: 120, yCoord: 355 },
              // { imageIndex: 20,  xCoord: 120, yCoord: 355 },
              // { imageIndex: 21,  xCoord: 120, yCoord: 355 },
  
      ],
      variant: {
        images: [
          {
            src:
              "https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            alt: "air snorkel"
          }
        ],
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id justo lobortis, posuere eros non, sagittis nisl. Fusce vehicula turpis nec lorem scelerisque",
        moreDetailsUrl: "/"
      }
    },
  ];
  
  window.CI360.addHotspots("hotspot-example", HOTSPOTS_CONFIG);
  
  const container360 = window.CI360._viewers.filter(x => x.id === 'hotspot-example')[0]
  var playing = false
  const playButton = document.querySelector("[data-360-id='play']")
  const stopButton = document.querySelector("[data-360-id='stop']")
  
  playButton.addEventListener("click", function(){
      if( playing == true ) return
      playing = true
      container360.play(150)
  })
  
  stopButton.addEventListener("click", function(){
      playing = false
      container360.stop()
  })
  
  
  function handle_MMqLrAhy2oN() {
    document.getElementById("pano").src = "https://demos.evox.com/SquareSpaceWeb/X5/13751_in1024.html?wmode=opaque"; 
    document.getElementById("pano").classList.add("fadeIn");
   document.getElementById("iframeCover").classList.add("fadeOut");
   $.ajax({
    type: 'GET',
    success: function(data){
    }
  }).done(function() {
    setTimeout(function(){
      // $("#particles-js").fadeOut(300);
    },2000);
  });
  }
  
  function functionShow() {
    $.ajax({
        type: 'GET',
        success: function(data){
        }
      }).done(function() {
        setTimeout(function(){
          // $("#particles-js").fadeOut(300);
        },2000);
      });
  }