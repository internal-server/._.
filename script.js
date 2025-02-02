const messages = [
    "Thật chứ?",
    "Thật sự á??",
    "Có đồng ý không?",
    "Đi mà...",
    "Cho 1 cơ hội đi mà!",
    "Nếu cậu từ chối, tớ sẽ buồn lắm đấy...",
    "Tớ sẽ rất buồn đấy...",
    "Buồn lắm đấy...",
    "Thôi được rồi, tôi sẽ không hỏi nữa...",
    "Đùa thôi, đồng ý đi! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
