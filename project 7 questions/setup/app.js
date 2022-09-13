//using selectors inside the element
// traversing the dom

// option 1 - if i want the option i need to add the condition

// const btns = document.querySelectorAll(".question-btn");
// const question = document.querySelectorAll(".question");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     e.currentTarget.parentElement.parentElement.classList.toggle("show-text");
//   });
// });

// option 2

const questions = document.querySelectorAll(".question");

questions.forEach(function (q) {
  const btn = q.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    q.classList.toggle("show-text");
    //condition: when  open 1 the rest gonna close - Q = each question , q = each question while click - אם הקוושטן לא שווה לקוושטן שלחצנו, תסגור אותו:
    questions.forEach(function (Q) {
      if (Q !== q) {
        Q.classList.remove("show-text");
      }
    });
  });
});
