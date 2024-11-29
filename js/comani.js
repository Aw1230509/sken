(function() {
    function createModalElements() {
        const style = document.createElement('style');
        style.textContent = `
            .konami-modal {
                display: none;
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 20px;
                color: white;
                z-index: 1001; /* オーバーレイより上に表示 */
                min-width: 300px;
                text-align: center;
            }

            .konami-overlay {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5); /* 半透明の黒色 */
                z-index: 1000;
                cursor: pointer; /* クリック可能なことを示す */
            }
            .konami-modal-title img{
            width:100%;
            }
        `;
        document.head.appendChild(style);

        const modal = document.createElement('div');
        modal.className = 'konami-modal';
        modal.innerHTML = `
            <div class="konami-modal-title">
                <img src="img/コマンド.png">
            </div>
        `;

        const overlay = document.createElement('div');
        overlay.className = 'konami-overlay';

        document.body.appendChild(modal);
        document.body.appendChild(overlay);

        return { modal, overlay };
    }

    const konamiCode = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a'
    ];

    let konamiIndex = 0;
    let isModalVisible = false;
    
    const { modal, overlay } = createModalElements();

    function handleKeydown(event) {
        if (isModalVisible) {
            return;
        }

        if (event.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                showModal();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    }

    function showModal() {
        if (isModalVisible) {
            return;
        }

        modal.style.display = 'block';
        overlay.style.display = 'block';
        isModalVisible = true;
    }

    function handleOverlayClick() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        isModalVisible = false;
    }

    document.addEventListener('keydown', handleKeydown, true);
    overlay.addEventListener('click', handleOverlayClick, true);

    console.log('Konami code handler initialized');
})();