const newCard = {
    country: "Испания",
    flag: "img/america.png"
  };
  
  const cardContainer = document.querySelector(".main-manufact");
  const newBlock = document.createElement("div");
  newBlock.classList.add("block-2");
  
  const newHeading = document.createElement("h3");
  newHeading.classList.add("block-h-2");
  newHeading.textContent = newCard.country;
  
  const newContent = document.createElement("div");
  newContent.classList.add("all");
  
  const newImage = document.createElement("img");
  newImage.classList.add("america");
  newImage.src = newCard.flag;
  newImage.alt = "флаг Испании";
  
  const newButton = document.createElement("button");
  newButton.classList.add("rub-button-2");
  
  const newIcon = document.createElement("img");
  newIcon.classList.add("rub-2");
  newIcon.src = "img/rubish.png";
  newIcon.alt = "корзина";
  
  newButton.appendChild(newIcon);
  newContent.append(newImage, newButton);
  newBlock.append(newHeading, newContent);
  cardContainer.appendChild(newBlock);