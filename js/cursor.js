let lastTime = 0;
const particleInterval = 50; // パーティクル生成の間隔（ミリ秒）

document.addEventListener('mousemove', (e) => {
  const currentTime = Date.now();
  
  // パーティクル生成の間隔を制御
  if (currentTime - lastTime < particleInterval) return;
  lastTime = currentTime;

  // パーティクルを生成
  const particle = document.createElement('div');
  particle.className = 'trail';
  
  // ランダムなサイズを設定
  const size = 15 + Math.random() * 10;
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  
  // ランダムな開始位置を設定（カーソル周辺）
  const offsetX = (Math.random() - 0.5) * 10;
  const offsetY = (Math.random() - 0.5) * 10;
  particle.style.left = (e.clientX + offsetX) + 'px';
  particle.style.top = (e.clientY + offsetY) + 'px';
  
  // ランダムな回転角度を設定
  const rotation = Math.random() * 360;
  particle.style.transform = `rotate(${rotation}deg)`;

  document.body.appendChild(particle);

  // アニメーション終了後に要素を削除
  setTimeout(() => {
    particle.remove();
  }, 1500);
});