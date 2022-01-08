'use strict';

(function openMenu() {
  let burger = document.querySelector('.burger');
  let menu = document.querySelector('.nav__menu');
  burger.addEventListener('click', function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav__menu--open');
}); 
})();

(function controlAmountProducts() {
  let append = document.querySelectorAll('.amount-product__button-append');
  let subtract = document.querySelectorAll('.amount-product__button-subtract');
  let amountProducts = document.querySelectorAll('.amount-product__number');
  let price = document.querySelectorAll('.product-card__price')

  for (let i = 0; i < append.length; i++) {
    let priceForOneItem = price[i].innerHTML;
    console.log(priceForOneItem);
    append[i].addEventListener('click', function () {
      amountProducts[i].innerHTML = Number(amountProducts[i].innerHTML) + 1;
      price[i].innerHTML = controlChangePrice(priceForOneItem, amountProducts[i])
    })
  }

  for (let i = 0; i < subtract.length; i++) {
    let priceForOneItem = price[i].innerHTML;
    subtract[i].addEventListener('click', function () {
      let num = amountProducts[i];
      if (Number(num.innerHTML) > 0) {
        num.innerHTML -= 1;
        price[i].innerHTML = controlChangePrice(priceForOneItem, num)
      }
    })
  }
  
  function changePrice(price, num) {
    price *= num;
    return price
  }

  function removeFirstSymbolStirng(string) {
    let newString = string.substring(1);
    return newString
  }

  function saveFirstSymbolString(string) {
    let firstSymbol = string.slice(0, 1);
    return firstSymbol
  }

  function addFirstSymbolString(string, symbol){
    let newString = symbol + string;
    return newString
  }

  function controlChangePrice(price, amount) {
    
    let firstSymbol = saveFirstSymbolString(price);
    let priceNumbers = removeFirstSymbolStirng(price);
    let priceNow = changePrice(Number(priceNumbers), Number(amount.innerHTML));
    priceNow = priceNow.toFixed(2);
    return firstSymbol + priceNow
  }
})();


// slider connection
$(document).ready(function (){
  $('.slider').slick({
    slidesToShow:3,
    slidesToScroll:3,
    speed: 500,
    infinite:false,
      responsive:[
        {
          breakpoint: 1024,
          settings:{
            slidesToShow:2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            arrows:false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false
          }
        }
      ]
  });
});


(function dropDownList() {
  let footerTitle = document.querySelectorAll('.footer-inner__box-title');
  for (let i = 0; i < footerTitle.length; i++){
    footerTitle[i].addEventListener('click', function () {
      let droplist = document.querySelectorAll('.footer-inner__box-list')
      droplist[i].classList.toggle('footer-inner__box-list--active')
    })
  }
})();