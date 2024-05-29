const newcard = {
    name: "samsung galaxy s21",
    image: "img/iphone-15.png",
    price: "85 000 ₽",
    hashtag: "#samsung",
    id:2
};

const block = document.createElement("div");
block.classList.add("block-goods");
block.setAttribute("data-category", "phone");

const image = document.createElement("img");
image.src = newcard.image;
image.alt = newcard.name;
image.classList.add("iphone-15");

const content = document.createElement("div");
content.classList.add("col");

const d=document.createElement("div");
d.classList.add("g");
const id=document.createElement("p");
id.textContent=newcard.id

const title = document.createElement("h3");
title.textContent = newcard.name;

const description = document.createElement("p");
description.textContent = "описание описание описание описание описание описание описаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописание описаниеописаниеописание";

const price = document.createElement("div");
price.classList.add("price");

const priceValue = document.createElement("h3");
priceValue.textContent = newcard.price;
priceValue.classList.add("l");

const hashRub = document.createElement("div");
hashRub.classList.add("hash-rub");

const button = document.createElement("button");
button.classList.add("rub-button-3");

const buttonImage = document.createElement("img");
buttonImage.src = "img/rubish.png";
buttonImage.alt = "корзина";
buttonImage.classList.add("rub-3");

const hashtag = document.createElement("h3");
hashtag.textContent = newcard.hashtag;
hashtag.classList.add("hash-country");

d.appendChild(title)
d.appendChild(id)

content.appendChild(d);
content.appendChild(description);


button.appendChild(buttonImage)

price.appendChild(priceValue);

hashRub.appendChild(button);
hashRub.appendChild(hashtag);
price.appendChild(hashRub);

block.appendChild(image);
block.appendChild(content);
block.appendChild(price);

document.querySelector(".main-manufact-goods").appendChild(block);