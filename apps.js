// Page N2 "Our Services" Option 3  
const content = { 
  webDesign: {
    text : ` Nikita's the best, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa
    qui officia deserunt mollit anim id est laborum. Lorem ipsum
    dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum. Deserunt mollit anim id est
    laborum. Lorem ipsum dolor sit amet, consectetur adip isicing
    elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.`,
    img : `./img/wdesign.jpg`
  }, 
  graphicDesign : {
    text : ` Graphic design is the profession and academic discipline whose activity 
    consists in projecting visual communications intended to transmit specific 
    messages to social groups, with specific objectives. Design is based on the 
    principle of "form follows a specific function". Therefore, graphic design is 
    an interdisciplinary branch of design whose foundations and objectives 
    revolve around the definition of problems and the determination of objectives 
    for decision-making, through creativity, innovation and lateral thinking along 
    with manual or digital tools, transforming them for proper interpretation. 
    This activity helps in the optimization of graphic communications (see also 
    communication design). It is also known as visual communication design, visual 
    design or editorial design.`,
    img : `./img/gdesign.jpg`
  },
  onlineSupport : {
    text : ` Stay cool`,  
    img : `./img/vtykalo.png`
  },
  appDesign : {
    text : ` To become an App Designer you have to learn how to design apps`, 
    img : `./img/adesign.png`
  },
  onlineMarketing : {
    text : ` Online advertising, also known as online marketing, is a form of marketing 
    and advertising which uses the Internet to promote products and services to 
    audiences and platform users. Online advertising includes email marketing, 
    search engine marketing (SEM), social media marketing, many types of display advertising 
    (including web banner advertising), and mobile advertising. Advertisements are increasingly 
    being delivered via automated software systems operating across multiple websites, media 
    services and platforms, known as programmatic advertising.`, 
    img : `./img/omarketing.jpg`
  },
    seoService : {
    text : ` Search engine optimization (SEO) is the process of 
    improving the quality and quantity of website traffic to a website 
    or a web page from search engines. SEO targets unpaid traffic 
    (known as "natural" or "organic" results) rather than direct traffic or 
    paid traffic. Unpaid traffic may originate from different kinds of searches, 
    including image search, video search, academic search, news search, and 
    industry-specific vertical search engines.`,
    img : `./img/sservice.jpg` 
  } 
} 


function changeActive(newActiveId) {
  const serviceItems = document.getElementsByClassName('services-item');
  for(let i = 0; i < serviceItems.length; i++) {
    const li = serviceItems[i];
    li.classList.remove('active');
    if (li.id === newActiveId) {
      li.classList.add('active');
    }

  }
}
function setContent(key) {
  const div = document.getElementById('content');
  changeActive(key);
  div.innerHTML = `
      <img class="services-item-content-img" src="${content[key].img}" alt="" />
      <p class="services-item-content-text">${content[key].text}</p>
    `;
}
window.addEventListener(
  'load',
  function() {
    setContent('webDesign');
  }
);

  
const tabsNameWork = document.querySelectorAll(".third-page-item");
const tabsDescriptionWork = document.querySelectorAll(".work-photo-list");
const buttonLoad = document.querySelector(".button.load");
tabsNameWork.forEach((name) => {
  name.addEventListener("click", function () {
    const dataTab = name.dataset.worktab;
    document.querySelector(".third-page-item.active").classList.remove("active");
    name.classList.add("active");

    tabsDescriptionWork.forEach((element) => {
      const dataTabDescription = element.dataset.workdescription; 

      dataTabDescription === dataTab
        ? (element.style.display = "block")
        : (element.style.display = "none");
      if (dataTab === "All") {
        element.style.display = "block";
      }
    });
  });
});



const moreImages = [
  'us-img/city-illustration.jpg',
  'us-img/city2.webp', 
  'us-img/city3.webp',
  'us-img/city4.webp',
  'us-img/city5.webp',
  'us-img/city6.jpg',
  'us-img/city7.jpg',
  'us-img/city8.jpg',
  'us-img/city9.jpg',
  'us-img/city10.jpg',
  'us-img/city11.png', 
  'us-img/music1.jpg',
];

function loadMore() {
  const worklist = document.getElementById('work-list'); 
  const buttonload = document.getElementById('loadMore');

  for( let i = 0; i<moreImages.length; i+=1){
    const image = moreImages[i];
    const li = document.createElement('li');
    li.setAttribute('class', 'work-photo-list');
    li.innerHTML = `
    <li class="work-photo-list" data-workdescription="Web Design">
                <img class="work-photo-img" src="${image}" alt="Graphics" />
                <div class="work-photo-description"> 
                    <a href="#">
                        <img class="work-photo-icon" src="./sections-img/work-links.svg" alt="Graphics" /></a>
                    <h4 class="work-photo-description-title">creative design</h4>
                    <p class="work-photo-description-text">Web Design</p>
                </div>
            </li>
    `;
    worklist.appendChild(li);
  } 
  buttonload.parentNode.removeChild(buttonload);
  
}



const buttonLoadGallery = document.querySelector(".button-load1");
buttonLoadGallery.addEventListener("click", function () {
  loadMoreGallery();
});

function loadMoreGallery() {
  document
    .querySelector(".gallery-add.additionally")
    .classList.remove("additionally");
  buttonLoadGallery.style.display = "none";
}



new Swiper(".slider", {
  navigation: {
    nextEl: ".swiper-button-forvard",
    prevEl: ".swiper-button-back", 
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
  thumbs: {
    swiper: {
      el: ".slider-mini",
      slidesPerView: 4,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
}); 


