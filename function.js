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
  const bookmarks = document.getElementById("bookmarks");
  const polaroids = document.getElementById("polaroid");
  const email = document.getElementById("email");
  const footer = document.getElementById("footer");

  if(window.innerWidth < 1024) {
    bookmarks.remove();
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

  if (window.innerWidth < 1024) {
    hero.appendChild(main_header_description_1);
    hero.appendChild(hero_btn);
    hero.appendChild(main_header_description_2);
    console.log("This should work!!");
  }
  else {
    hero_container[0].appendChild(main_header_description_1);
    hero_container[0].appendChild(main_header_description_2);
    hero_container[0].appendChild(hero_btn);
  }
}

replaceherodescription();
removenonresponsivesections();

window.addEventListener("resize", replaceherodescription);
