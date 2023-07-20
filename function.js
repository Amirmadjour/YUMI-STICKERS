const stickers = document.querySelectorAll('.one-sticker-container');
const stickers_container = document.querySelector(".stickers-container");

stickers.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.classList.add("grow");
    stickers_container.classList.add("shrink");
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove("grow");
    stickers_container.classList.remove("shrink");
  });
});
