const circle = document.querySelector(".circle-seletor");
const alt1 = document.querySelector(".p-alt-1");
const alt2 = document.querySelector(".p-alt-2");
const alt3 = document.querySelector(".p-alt-3");
const checkbox = document.querySelector("#serv");
const checkbox2 = document.querySelector("#serv2");
const checkbox3 = document.querySelector("#serv3");
const plano = document.querySelector(".ativo");
const plano2 = document.querySelector(".ativo-2");
const plano3 = document.querySelector(".ativo-3");

function move() {
  circle.classList.toggle("circle-selector-on");
  if (alt1.innerHTML == "R$ 47/mes") {
    alt1.innerHTML = "R$ 520/ano";
    alt2.innerHTML = "R$ 740/ano";
    alt3.innerHTML = "R$ 920/ano";
  } else {
    alt1.innerHTML = "R$ 47/mes";
    alt2.innerHTML = "R$ 63/mes";
    alt3.innerHTML = "R$ 79/mes";
  }
}

$(".ativo").click(function(){
    plano.classList.toggle("ativo");
    plano2.classList.add("ativo-2");
    plano3.classList.add("ativo-3");

    document.querySelector(".not-service-online").classList.toggle(".not-service-online")

})

$(".ativo-2").click(function(){
    plano2.classList.toggle("ativo-2");
    plano.classList.add("ativo");
    plano3.classList.add("ativo-3");
})

$(".ativo-3").click(function(){
    plano3.classList.toggle("ativo-3");
    plano.classList.add("ativo");
    plano2.classList.add("ativo-2");
})



//Checkbox pagina 3

$(".add1").click(function () {
  $(".add1").toggleClass("bk");
  if (checkbox.checked == false) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
});


$(".add2").click(function () {
  $(".add2").toggleClass("bk");
  if (checkbox2.checked == false) {
    checkbox2.checked = true;
  } else {
    checkbox2.checked = false;
  }
});


$(".add3").click(function () {
  $(".add3").toggleClass("bk");
  if (checkbox3.checked == false) {
    checkbox3.checked = true;
  } else {
    checkbox3.checked = false;
  }
});

circle.addEventListener("click", move);
