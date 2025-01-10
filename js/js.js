function parallax() {
    var parallaxItem = document.getElementById("workers-img");
    var currentPos = window.scrollY;
    var m = -1.5;
    var b = 0;
    var newPos = (currentPos * m) + b;
    parallaxItem.style.backgroundPositionY = newPos + "px";
}

function todaySale() {
    var today = new Date();
    var day = today.getDay();
    if (day == 0) {
        price = document.getElementById("price-hardhat")
        price.innerHTML = "Sunday's Price: $7.99";
        price.classList.add("deal")
    }
    else if (day == 1) {
        price = document.getElementById("price-boots")
        price.innerHTML = "Monday's Price: $39.99";
        price.classList.add("deal")
    }
    else if (day == 2) {
        price = document.getElementById("price-hardhat")
        price.innerHTML = "Tuesday's Price: $5.99";
        price.classList.add("deal")
    }
    else if (day == 3) {
        price = document.getElementById("price-vest")
        price.innerHTML = "Wednesday's Price: $11.99";
        price.classList.add("deal")
    }
    else if (day == 4) {
        price = document.getElementById("price-gloves")
        price.innerHTML = "Thursday's Price: $3.99";
        price.classList.add("deal")
    }
    else if (day == 5) {
        price = document.getElementById("price-boots")
        price.innerHTML = "Friday's Price: $37.99";
        price.classList.add("deal")
    }
    else if (day == 6) {
        price = document.getElementById("price-vest")
        price.innerHTML = "Saturday's Price: $9.99";
        price.classList.add("deal")
    }
}

function updateReason() {
    var productInfo = document.getElementById("product-info");
    var productIdLabel = document.getElementById("product-id-label");
    var productIdBox = document.getElementById("product-id-box");
    if (productInfo.checked) {
        productIdLabel.className = "visible";
        productIdBox.className = "visible";
    }
    else {
        productIdLabel.className = "hidden";
        productIdBox.className = "hidden";
    }
}

function checkName() {
    var nameBox = document.getElementById("name");
    var name = nameBox.value;
    var isValid = /\d/;
    if ((name.length >= 4) && (!isValid.test(name))) {
        nameBox.style.borderColor = "green";
    }
    else {
        nameBox.style.borderColor = "red";
    }
}

function checkPhone() {
    var numberBox = document.getElementById("phone");
    var number = numberBox.value;
    var isPhoneNumber = /\d\d\d\s\d\d\d\s\d\d\d\d/;
    if (isPhoneNumber.test(number)) {
        numberBox.style.borderColor = "green";
    }
    else {
        numberBox.style.borderColor = "red";
    }
}

function checkId() {
    var idBox = document.getElementById("product-id-box");
    var id = idBox.value;
    var validIds = ["0123 4567 8905", "0360 0029 1452", "0421 0000 5264", "7894 5612 3125"];
    for (i = 0; i < validIds.length; i++) {
        if (id == validIds[i]) {
            idBox.style.borderColor = "green";
            return;
        }
    }
    idBox.style.borderColor = "red";
}

function checkMessage() {
    var msgBox = document.getElementById("message");
    var message = msgBox.value;
    if ((message.length >= 10) && (message.length <= 30)) {
        msgBox.style.borderColor = "green";
    }
    else {
        msgBox.style.borderColor = "red";
    }
}

function scrollfire() {
    var topButton = document.getElementById("top-button");
    var scroll = window.scrollY;
    if (scroll > 1000) {
        topButton.style.opacity = 1;
    }
}
