// 画像スライダーの実装はこちらに記述してください
// `use strict`

// {
    (function () {
        var elem = document.querySelector(".swiper-container");
        if (elem !== null) { //swiper-containerがあれば…
        var mySwiper = new Swiper(".swiper-container", {
          loop: true, //ループさせる
          effect: "fade", //フェードのエフェクト
          autoplay: {
            delay: 4000, //４秒後に次の画像へ
            disableOnInteraction: false //ユーザー操作後に自動再生を再開する
          },
          speed: 2000 //２秒かけながら次の画像へ移動
          navigation: { //左右のページ送りを有効にする
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          pagination: { //円形のページネーションを有効にする
            el: ".swiper-pagination"
          }
        });
      }
      })();

     
// }