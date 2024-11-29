const style = document.createElement('style');
style.textContent = `
  .hidden-button {
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    z-index: 1000;
    font-family: Arial, sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  .show-button {
    visibility: visible;
    opacity: 1;
  }

  .modal-content img {
    width: 90%;
    pointer-events: none;
  }

  .modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2000;
  }

  .modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    z-index: 2001;
    text-align: center;
  }

  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -40%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;
document.head.appendChild(style);

// DOM要素の作成
const hiddenButton = document.createElement('button');
hiddenButton.className = 'hidden-button';
hiddenButton.textContent = 'TAP';
document.body.appendChild(hiddenButton);

const modalOverlay = document.createElement('div');
modalOverlay.className = 'modal-overlay';

const modalContent = document.createElement('div');
modalContent.className = 'modal-content';
modalContent.innerHTML = `
  <p><img src="img/隠しコマンド.png"></p>
`;

modalOverlay.appendChild(modalContent);
document.body.appendChild(modalOverlay);

// スクロール関連の処理
let scrollTimer = null;

// スクロールハンドラ
const handleScroll = () => {
  // スクロール時に即座にボタンを隠す
  hiddenButton.classList.remove('show-button');
  
  // 既存のタイマーをクリア
  if (scrollTimer) {
    clearTimeout(scrollTimer);
  }
  
  // 新しいタイマーを設定
  scrollTimer = setTimeout(() => {
    // スクロール停止3秒後にボタンを表示
    setTimeout(() => {
      hiddenButton.classList.add('show-button');
    }, 3000);
  }, 100);
};

// ページ読み込み完了後にスクロールイベントを設定
window.addEventListener('load', () => {
  setTimeout(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 初期表示のための処理
    setTimeout(() => {
      hiddenButton.classList.add('show-button');
    }, 3000);
  }, 100);
});

// クリック処理
let clickCount = 0;
const requiredClicks = 5;

hiddenButton.addEventListener('click', () => {
  clickCount++;
  
  if (clickCount === requiredClicks) {
    modalOverlay.style.display = 'block';
    modalContent.style.animation = 'modalFadeIn 0.3s ease-out forwards';
    clickCount = 0;
  }
});

// モーダルを閉じる処理
modalOverlay.addEventListener('click', (e) => {
  // Check if the click is outside the modal content
  if (e.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});

// Escape key handling
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.style.display === 'block') {
    modalOverlay.style.display = 'none';
  }
});