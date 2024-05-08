// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів.
//  Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

{
  /* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
;dlfkkglgk */
}
const elements = {
  input: document.querySelector('#name-input'),

  span: document.querySelector('#name-output'),
};

elements.input.addEventListener('input', event => {
  const value = event.currentTarget.value.trim();

  elements.span.textContent = value || 'Anonymous';
});
