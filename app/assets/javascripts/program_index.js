//ローディング画面
var time=new Date().getTime();
$(function() {
  var h = $(window).height();
  $('#contents').hide();
  $('#loading').height(h);
});
//全ての読み込みが完了したら実行
$(window).on('load',function () {
  var now = new Date().getTime();
  if (now-time<=2500) {
    setTimeout('stopload()',2500-(now-time));
    return;
  } else {
    stopload();
  }
});
//10秒たったら強制的にロード画面を非表示
// $(function(){
//   setTimeout('stopload()',10000);
// });
function stopload(){
  $('#contents').show();
  $('#loading').delay(900).fadeOut(800);
  $(".menu-open-button").click();
}


//スムーズスクロールの処理
$(function(){
  $('a[href^="#"]').click(function(){
      var speed = 1000;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
  });
});
  

//トップページの変化テキスト処理
$(function(){
  class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  
  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————
  
  const phrases = [
    'エンジニアの',
    '悩みや疑問',
    'エラー文を',
    '素早く解決。',
    'そんな、エンジニアの',
    'エンジニアによる',
    'エンジニアの為の',
    'エンジニア疑問解決サイトです！',
  ]
  
  const el = document.querySelector('.topPage_left_message')
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 800)
    })
    counter = (counter + 1) % phrases.length
  }
  next()

});