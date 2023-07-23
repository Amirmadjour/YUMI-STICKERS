let card_number = JSON.parse(localStorage.getItem("img_num"));
let card = document.querySelectorAll('.bookmark-img');

card_number === null && (card_number = 0);  
card[card_number].classList.add("grow");

let left_btn = document.querySelector('.left-switcher');
let right_btn = document.querySelector('.right-switcher');

left_btn.addEventListener("click", () =>
{
    if(card_number > 0){
        card[card_number].classList.remove("grow");
        card_number = card_number === 0 ? 2 : card_number - 1;
        card[card_number].classList.add("grow");
        localStorage.setItem("card_num", JSON.stringify(card_number));

    }
   
})

right_btn.addEventListener("click", () =>
{
    if(card_number < 7) {
      card[card_number].classList.remove("grow");
      card_number = (card_number + 1) % 8;
      card[card_number].classList.add("grow");
      localStorage.setItem("card_num", JSON.stringify(card_number));
    }

})