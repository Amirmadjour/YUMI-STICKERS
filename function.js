let card_number = JSON.parse(localStorage.getItem("img_num"));
let card = document.querySelectorAll('.bookmark-img');

card_number === null && (card_number = 0);  
card[card_number].classList.add("grow");

let left_btn = document.querySelector('.left-switcher');
let right_btn = document.querySelector('.right-switcher');

left_btn.addEventListener("click", () =>
{
  card[card_number].classList.remove("grow");
  card_number = card_number === 0 ? 7 : card_number - 1;
  card[card_number].classList.add("grow");
  localStorage.setItem("img_num", JSON.stringify(card_number));
})

right_btn.addEventListener("click", () =>
{
  card[card_number].classList.remove("grow");
  card_number = (card_number + 1) % 8;
  card[card_number].classList.add("grow");
  localStorage.setItem("img_num", JSON.stringify(card_number));
})

const sections = document.querySelectorAll('section')
const nav_links = document.querySelectorAll('.nv-btn')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if(top >= offset && top < offset + height) {
      for(let i = 0; i < nav_links.length; i++) {
        if (nav_links[i].getAttribute("href") === "#" + id) {
          nav_links[i].classList.add('active');
        } else {
          nav_links[i].classList.remove('active');
        }
      }
    }
  })
}