const ratings = document.querySelectorAll('.rating');
const button = document.querySelector('.btn');
const container = document.querySelector('.container');
const thankyouContainer = document.querySelector('.thankyou-container');
const text = document.querySelector('.text');

let ratingValue;

const updateRating = (num, ratingEl) => {
  text.innerText = num;
  ratings.forEach((rating) => {
    rating.classList.remove('active');
  });

  ratingEl.classList.add('active');
};

ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    ratingValue = rating.innerText;
    updateRating(ratingValue, rating);
  });
});

button.addEventListener('click', () => {
  container.style.display = 'none';
  thankyouContainer.style.display = 'flex';
});
