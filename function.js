function bookmarkswitcher() {

  let img = document.querySelectorAll(".bookmark-img");
  let image_number = JSON.parse(localStorage.getItem("img_num"));
  var couple_bookmarks = JSON.parse(localStorage.getItem("couple_bookmarks"));
  image_number === null && (image_number = 0);

  let left_btn = document.querySelector(".left-switcher");
  let right_btn = document.querySelector(".right-switcher");

  if(window.innerWidth > 1024) {

    img[image_number].classList.add("grow");

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
  }
  else {
    img[image_number].classList.remove("grow");
    couple_bookmarks === null && (couple_bookmarks = [0, 1]);
    var temp = 0;

    left_btn.addEventListener("click", () => {
      img[couple_bookmarks[1]].style.display = "none";
      img[couple_bookmarks[0]].style.display = "none";
      couple_bookmarks[1] = couple_bookmarks[0];
      couple_bookmarks[0] = couple_bookmarks[0] === 0 ? 7: couple_bookmarks[0] - 1;
      img[couple_bookmarks[0]].style.display = "inline";
      img[couple_bookmarks[1]].style.display = "inline";
      img[couple_bookmarks[0]].style.position = "static";
      img[couple_bookmarks[0]].style.transform = "translateX(0px)";
    })

    right_btn.addEventListener("click", () => {
      img[couple_bookmarks[0]].style.display = "none";
      img[couple_bookmarks[1]].style.display = "none";
      couple_bookmarks[0] = couple_bookmarks[1];
      couple_bookmarks[1] = couple_bookmarks[1] === 7 ? 0: couple_bookmarks[0] + 1;
      img[couple_bookmarks[1]].style.display = "inline";
      img[couple_bookmarks[0]].style.display = "inline";
      img[couple_bookmarks[1]].style.position = "static";
      img[couple_bookmarks[1]].style.transform = "translateX(0px)";
    })
  }

}

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
  adjustbookmarkimages();
}

function adjustbookmarkimages() {

  let couple_bookmarks = JSON.parse(localStorage.getItem("couple_bookmarks"));
  const bookmark_cards = document.getElementsByClassName("bookmark-img");
  const bookmark_container = document.getElementsByClassName("bookmarks-img-container");

  couple_bookmarks === null && (couple_bookmarks = [0, 1])

  if(window.innerWidth < 1024) {

    for(var i = 0; i < bookmark_cards.length; i++) {
      if(i != couple_bookmarks[0] && i != couple_bookmarks[1]) {
        bookmark_cards[i].style.display = "none";
      }
      else {
        bookmark_cards[i].style.position = "static";
      }
      bookmark_cards[i].style.transform = "translateX(0px)";
    }
    bookmark_container[0].style.gap = "5vw";
  }

  else {
    bookmark_container[0].style.gap = "0vw";
    var position = -350;

    for(var i = 0; i < bookmark_cards.length; i++) {
      bookmark_cards[i].style.display = "inline";
      bookmark_cards[i].style.position = "absolute";
      bookmark_cards[i].style.transform = `translateX(${ position }px)`;
      position = position + 100;
    }
  }
}

replaceherodescription();
removenonresponsivesections();
bookmarkswitcher();
window.addEventListener("resize", bookmarkswitcher);
window.addEventListener("resize", replaceherodescription);