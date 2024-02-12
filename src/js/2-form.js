document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');

  // Проверяем, есть ли сохраненные значения в локальном хранилище
  const storedData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  // Заполняем поля формы сохраненными значениями
  form.email.value = storedData.email || '';
  form.message.value = storedData.message || '';

  // Слушаем события ввода и обновляем локальное хранилище
  form.addEventListener('input', function (event) {
    const { name, value } = event.target;
    const currentState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
    currentState[name] = value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
  });

  // Слушаем отправку формы
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Проверяем, заполнены ли оба поля
    if (form.email.value.trim() && form.message.value.trim()) {
      // Логируем объект, очищаем локальное хранилище и поля формы
      const formData = {
        email: form.email.value.trim(),
        message: form.message.value.trim()
      };
      console.log(formData);

      localStorage.removeItem('feedback-form-state');
      form.reset();
    }
  });
});
