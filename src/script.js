const articleBtn = document.querySelector('.article__btn')
const articleAuthor = document.querySelector('.article__author')

articleBtn.addEventListener('click', handleClick)

function handleClick(e) {
  articleAuthor.classList.toggle('active')
}