document.getElementById('survey-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Запобігаємо стандартній поведінці форми

  // Отримуємо значення полів
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('number').value;
  const product = document.getElementById('dropdown').value;
  const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').id : null;
  const suggestions = document.getElementById('suggestions').value;

  // Перевірка заповнених полів
  if (!name || !email || !product || !rating) {
    alert('Please fill in all required fields');
    return;
  }

  // Виводимо введені дані в консоль
  console.log({
    name,
    email,
    age,
    product,
    rating,
    suggestions
  });

  alert('Thank you for your feedback!');
});
