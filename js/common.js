// ヘッダーとスキルズエレメントを取得
const header = document.querySelector('header');
const skills = document.querySelector('.skills');

// スクロールイベントリスナーを追加
window.addEventListener('scroll', () => {
  // スキルズエレメントの位置を取得
  const skillsTop = skills.getBoundingClientRect().top;

  // スキルズエレメントがヘッダーと重なったら色を変更
  if (skillsTop <= header.offsetHeight && skillsTop + skills.offsetHeight >= 0) {
    header.classList.add('over-skills');
  } else {
    header.classList.remove('over-skills');
  }
});