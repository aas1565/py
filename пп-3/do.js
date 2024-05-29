const newsData = [
    {
        text: "Вышел новый айфон! Вышел новый айфон! Вышел новый айфон! Вышел новый айфон! Вышел новый айфон! Вышел новый айфон! Вышел новый айфон! Вышел новый айфон! Вышел новый айфон! Вышел новый айфон! Вышел новый айфон! Вышел новый айфон!"
    },
    {
        text: "Запущена новая версия приложения. Запущена новая версия приложения. Запущена новая версия приложения."
    }
];

const newNewsSection = document.querySelector(".new-news");

newsData.forEach(data => {
    const newsSmallSection = document.createElement("div");
    newsSmallSection.classList.add("news-small");

    const newNewsText = document.createElement("p");
    newNewsText.textContent = data.text;

    const rubButton = document.createElement("button");
    rubButton.classList.add("rub-button");

    const rubIcon = document.createElement("img");
    rubIcon.classList.add("rub");
    rubIcon.setAttribute("src", "img/rubish.png");
    rubIcon.setAttribute("alt", "корзина");

    rubButton.appendChild(rubIcon);
    newsSmallSection.appendChild(newNewsText);
    newsSmallSection.appendChild(rubButton);
    newNewsSection.appendChild(newsSmallSection);
});


