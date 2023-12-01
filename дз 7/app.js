document.addEventListener('DOMContentLoaded', () => {
  const showAnswersButton = document.querySelectorAll('.show_answers');
  showAnswersButton.forEach(button => {
    const answer = button.nextElementSibling;
    answer.style.display = 'none'

    button.addEventListener('click', () => {
      if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block'
        button.textContent = 'скрыть ответ'
      } else {
        answer.style.display = 'none'
        button.textContent = 'показать ответ'
      }
    })
  })
})

