document.addEventListener("DOMContentLoaded", (function() {
  ht(),
  function() {
      for (var t = document.querySelector("body"), n = document.querySelectorAll(".js-modal-element"), r = document.querySelectorAll(".js-modal-opener"), e = function(e) {
          r[e].addEventListener("click", (function() {
              n[e].classList.add("is-show"),
              t.classList.add("is-modal-hidden")
          }
          ))
      }, i = 0; i < r.length; i++)
          e(i);
      for (var o = document.querySelectorAll(".js-modal-closer"), u = document.querySelectorAll(".js-modal-cover"), c = function(r) {
          o[r].addEventListener("click", (function() {
              n[r].classList.remove("is-show"),
              t.classList.remove("is-modal-hidden")
          }
          ))
      }, a = 0; a < o.length; a++)
          c(a);
      for (var s = function(r) {
          u[r].addEventListener("click", (function() {
              n[r].classList.remove("is-show"),
              t.classList.remove("is-modal-hidden")
          }
          ))
      }, f = 0; f < u.length; f++)
          s(f)
  }(),
  function() {
      for (var t = document.querySelectorAll(".js-accordion-trigger"), n = document.querySelectorAll(".js-accordion-element"), r = function(r) {
          t[r].addEventListener("click", (function() {
              t[r].classList.toggle("is-active"),
              n[r].classList.toggle("is-active")
          }
          ))
      }, e = 0; e < t.length; e++)
          r(e)
  }()
}
))
