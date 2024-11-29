// ページトップに戻るボタンを取得
const pageTopButton = document.getElementById("page-top");

// 初期状態ではボタンを非表示にする
pageTopButton.style.display = "none";

let scrollTimeout;

// スクロールイベントの監視
window.addEventListener("scroll", function () {
    // スクロール中はボタンを非表示にする
    pageTopButton.style.display = "none";

    // 既存のタイマーがあればクリアする
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }

    // スクロール停止後1秒経ったらボタンをフェードイン
    scrollTimeout = setTimeout(function () {
        pageTopButton.style.display = "block";
        pageTopButton.style.opacity = "0";
        fadeIn(pageTopButton, 1); // フェードイン処理
    }, 1000);
});

// フェードインを行う関数
function fadeIn(element, targetOpacity) {
    let opacity = 0;
    element.style.opacity = opacity;
    element.style.display = "block"; // フェードインする際に表示

    const fadeInterval = setInterval(function () {
        if (opacity < targetOpacity) {
            opacity += 0.05;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeInterval);
        }
    }, 50); // フェードのスピードを調整
}
