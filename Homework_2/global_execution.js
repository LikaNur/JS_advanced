var theme = "light";
let language = "English";
const maxNotifications = 10;

function updateTheme(newTheme) {
  theme = newTheme;
  console.log(`Тема обновлена: ${theme}`);
}

const updateLanguage = function (newLanguage) {
  language = newLanguage;
  console.log(`Язык обновлен: ${language}`);
};

function displaySettings() {
  console.log(`Текущая тема: ${theme}`);
  console.log(`Текущий язык: ${language}`);
  console.log(`Максимальное количество уведомлений: ${maxNotifications}`);
}

displaySettings();

updateTheme("dark");
updateLanguage("Spanish");

displaySettings();
