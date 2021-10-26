
// ボタン押す→画像ランダム
let roulette_arry = ["img/乙女座.jpeg",
                "img/双子座.jpeg",
                "img/天秤座.jpeg",
                "img/射手座.jpeg",
                "img/山羊座.jpeg",
                "img/水瓶座.jpeg",
                "img/牡牛座.jpg",
                "img/牡羊座.jpeg",
                "img/獅子座.jpeg",
                "img/蟹座.jpeg",
                "img/蠍座.jpeg",
                "img/魚座.jpeg",
                ];  //  画像の配列
    const roulette_img = document.getElementById("roulette_img");  //  ここに画像を表示
    const roulette_btn = document.getElementById("roulette_btn");  //  ボタン
    roulette_img.src = roulette_arry[0];  //  最初の画面

      $("#roulette_btn").on("click", function(){
        if(roulette_btn.textContent==="スタート"){
         roulette_btn.textContent = "ストップ"  //  ボタンの表示を変える
            timerId = setInterval( () => {
           let rouletteIndex = Math.floor(Math.random() * roulette_arry.length) ;
            roulette_img.src = roulette_arry[rouletteIndex];
         }, 200);   //  ランダム表示
        }else{
         roulette_btn.textContent = "スタート";  //  ボタンの表示を変える
         clearInterval(timerId);   //  ランダム表示の停止
        }
    })

// ボタン押す→順位がランダム表示
    const un0 = ["1位","2位","3位","4位","5位","6位","7位","8位","9位","10位"];
    const today_btn1 = document.getElementById("today_btn1");  //  ボタン
    const today_result = document.getElementById("today_result");  //  ここにテキストを表示
    today_result.innerHTML = un0[0];  //  最初の画面
    $("#today_btn1").on("click", function(){
      if(today_btn1.textContent==="占う"){
        today_btn1.textContent = "ストップ"  //  ボタンの表示を変える
        timerId = setInterval( () => {
           let todayIndex = Math.floor(Math.random() * un0.length) ;
            today_result.innerHTML = un0[todayIndex];
         }, 200);   //  ランダム表示
      }else{
        today_btn1.textContent = "占う";  //  ボタンの表示を変える
         clearInterval(timerId);   //  ランダム表示の停止
      }
      $("#today_btn2").show();
    });

// ボタン押す→内容ランダム表示
      $("#today_btn2").on("click",function(){
      const un1 = [
        "今日のアナタは絶好調！何をやってもうまくいきます。苦手なことに再チャレンジしたら案外うまくいくかも！",
        "今日は調子が良い日。久しぶりに昔の友だちに連絡してもるのもいいかも！",
        "今日はとてもいつもどおりな日。気を抜きすぎて寝坊をしやすくなるかも？",
        "今日はなんだか気分が良くない日。忘れ物には気をつけて！",
        "今日は何もせずゆっくりしているのが良いかも・・・",
      ];
      const un1random = Math.floor(Math.random()*un1.length);
        document.getElementById("today_detail").innerHTML = un1[un1random];
        $("#today_btn3").show();
    });


// 占い→おみくじ
// $("#today_btn3").on("click", function () {
//   $("#roulette").hide();
//   $("#today").hide();
//   $("#omikuji").show();
// });


// 「くじを引く」ボタンを押すとランダムで結果発表
    setTimeout(function drawkuji() {
      let randomNumber = Math.floor(Math.random()*6+1);
      document.getElementsByClassName("omikuji_img")[0].setAttribute('src', 'img/kuji' + randomNumber + '.png');
      document.querySelectorAll("#omikuji_btn")[0].innerHTML = "もう一度引く";
    },5000)



// 「くじを引く」ボタンを押すとおみくじ画像が回転
    $("#omikuji_btn").on("click",function(){
      $("#move").addClass("show");
    });