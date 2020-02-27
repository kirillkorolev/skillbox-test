"use strict";

(function() {
  var form = document.querySelector(".form");
  var inputName = form.querySelector(".form__item--name .form__input");
  var inputPhone = form.querySelector(".form__item--phone .form__input");
  var inputEmail = form.querySelector(".form__item--email .form__input");
  var button = form.querySelector(".form__button");
  var checkbox = form.querySelector(".form__input-checkbox");

  var validateName = function() {
    var name = inputName.value;

    if (!name) {
      inputName.setCustomValidity("введите имя");
      return false;
    } else {
      inputName.setCustomValidity("");
      return true;
    }
  };

  var validatePhone = function() {
    var phone = inputPhone.value;
    var regEx = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    if (regEx.test(phone) === false) {
      inputPhone.setCustomValidity("введите правильный номер телефона");
      return false;
    } else {
      inputPhone.setCustomValidity("");
      return true;
    }
  };

  var validateEmail = function() {
    var regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var mail = inputEmail.value;

    if (regEx.test(mail) === false) {
      inputEmail.setCustomValidity("введите правильный адрес почты");
      return false;
    } else {
      inputEmail.setCustomValidity("");
      return true;
    }
  };

  var validateCheckbox = function() {
    if (checkbox.checked === false) {
      checkbox.setCustomValidity("подтвердите согласие");
      return false;
    } else {
      checkbox.setCustomValidity("");
      return true;
    }
  };

  button.addEventListener("click", function() {
    validateName();
    validatePhone();
    validateEmail();
    validateCheckbox();
  });
})();
