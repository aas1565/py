const newCard = {
    name: "Samsung Galaxy S21",
    image: "img/iphone-15.png",
    price: "85 000 ₽",
    hashtag: "#Samsung"
};

const block = document.createElement("div");
block.classList.add("block-goods");
block.setAttribute("data-category", "phone");

const image = document.createElement("img");
image.src = newCard.image;
image.alt = newCard.name;
image.classList.add("iphone-15");

const content = document.createElement("div");
content.classList.add("col");

const title = document.createElement("h3");
title.textContent = newCard.name;

const description = document.createElement("p");
description.textContent = "описание описание описание описание описание описание описание описание описание описание описаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописание описаниеописаниеописание";

const price = document.createElement("div");
price.classList.add("price");

const priceValue = document.createElement("h3");
priceValue.textContent = newCard.price;
priceValue.classList.add("l");

const hashTag = document.createElement("h3");
hashTag.textContent = newCard.hashtag;
hashTag.classList.add("hash-country");

content.appendChild(title);
content.appendChild(description);

price.appendChild(priceValue);
price.appendChild(hashTag);

block.appendChild(image);
block.appendChild(content);
block.appendChild(price);

document.querySelector(".main-manufact-goods").appendChild(block);