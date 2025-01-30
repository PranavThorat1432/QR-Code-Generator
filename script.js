let imgBox = document.getElementById("imgBox");
let qrimage = document.getElementById("qrimage");
let qrText = document.getElementById("qrText");
let btn = document.getElementById("btn");

function generateQR() {
    if(qrText.value.trim().length > 0) {
        qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText.value)}`;
        imgBox.classList.add("show-img");
        qrText.classList.remove("error");
    
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    } 
}

btn.addEventListener("click", () => {
    generateQR();   
});

qrText.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        generateQR();
    }
});