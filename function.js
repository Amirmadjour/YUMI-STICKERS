let image_number = JSON.parse(localStorage.getItem("img_num"));
let img = document.querySelectorAll(".bookmark-img");

image_number === null && (image_number = 0);
img[image_number].classList.add("grow");

let left_btn = document.querySelector(".left-switcher");
let right_btn = document.querySelector(".right-switcher");

left_btn.addEventListener("click", () => {
  img[image_number].classList.remove("grow");
  image_number = image_number === 0 ? 7 : image_number - 1;
  img[image_number].classList.add("grow");
  localStorage.setItem("img_num", JSON.stringify(image_number));
});

right_btn.addEventListener("click", () => {
  img[image_number].classList.remove("grow");
  image_number = (image_number + 1) % 8;
  img[image_number].classList.add("grow");
  localStorage.setItem("img_num", JSON.stringify(image_number));
});

const sections = document.querySelectorAll("section");
const nav_links = document.querySelectorAll(".nv-btn");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      for (let i = 0; i < nav_links.length; i++) {
        if (nav_links[i].getAttribute("href") === "#" + id) {
          nav_links[i].classList.add("active");
        } else {
          nav_links[i].classList.remove("active");
        }
      }
    }
  });
};

function removenonresponsivesections() {
  const polaroids = document.getElementById("polaroid");
  const email = document.getElementById("email");
  const footer = document.getElementById("footer");
  

  if(window.innerWidth < 1024) {
    polaroids.remove();
    email.remove();
    footer.remove();
  }
}

function replaceherodescription() {

  const main_header_description_1 = document.getElementById("hero-description-1");
  const main_header_description_2 = document.getElementById("hero-description-2");
  const hero_btn = document.getElementById("hero-order-btn");
  const hero = document.getElementById("hero");
  const hero_container = document.getElementsByClassName("hero-container");

  const bookmarkssection = document.getElementById("bookmarks");
  const morebutton = document.getElementById("more-btn");

  if (window.innerWidth < 1024) {
    hero.appendChild(main_header_description_1);
    hero.appendChild(hero_btn);
    hero.appendChild(main_header_description_2);

    bookmarkssection.style.paddingTop = "0px";
    morebutton.style.marginTop = "20px";
    morebutton.style.marginBottom = "0px";
  }
  else {
    hero_container[0].appendChild(main_header_description_1);
    hero_container[0].appendChild(main_header_description_2);
    hero_container[0].appendChild(hero_btn);


    bookmarkssection.style.paddingTop = "48px";
    morebutton.style.marginTop = "64px";
    morebutton.style.marginBottom = "64px";
  }
}

replaceherodescription();
removenonresponsivesections();

window.addEventListener("resize", replaceherodescription);

const sticker_cards = document.getElementsByClassName("bookmark-img");

if(window.innerWidth < 1024) {

  const bookmark_cards = document.getElementsByClassName("bookmark-img");
  const bookmark_container = document.getElementsByClassName("bookmarks-img-container");

  for(var i = 0; i < bookmark_cards.length; i++) {
    if(!(bookmark_cards[i].classList.contains("active-card"))) {
      bookmark_cards[i].style.display = "none";
    }
    else {
      bookmark_cards[i].style.position = "static";
    }
    bookmark_cards[i].style.transform = "translateX(0px)";
  }

  bookmark_container[0].style.gap = "5vw";
}
