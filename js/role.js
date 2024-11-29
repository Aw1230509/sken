


// 初期角度
let rotationAngle = 0;

function rotateLogo() {
    const logo = document.getElementById("logo");

    // 角度を更新
    rotationAngle += 2; // 2度ずつ回転
    if (rotationAngle >= 360) {
        rotationAngle = 0; // 360度に達したらリセット
    }

    // CSS transformで回転を適用
    logo.style.transform = `rotate(${rotationAngle}deg)`;
}

// setIntervalでrotateLogo関数を50msごとに実行
setInterval(rotateLogo, 50);


