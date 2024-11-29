// パララックス効果を適用する関数
function applyParallax() {
    // 各セクション要素を取得
    const homeLogo = document.querySelector('.back');

    // スクロール位置に応じてスタイルを変更する関数
    window.addEventListener('scroll', function () {
        const scrollPosition = window.pageYOffset;

        // 背景画像にパララックス効果を適用
        homeLogo.style.backgroundPositionY = scrollPosition * 0.5 + 'px'; // ゆっくり動かす

    });
}

// ページの読み込みが完了したらパララックス効果を適用
window.onload = function () {
    applyParallax();
};
