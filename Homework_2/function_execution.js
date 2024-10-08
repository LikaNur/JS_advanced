function userSettings() {
  var theme = "light";
  let language = "English";
  const maxNotifications = 10;

  function updateSettings(newTheme, newLanguage) {
    if (newTheme) {
      theme = newTheme;
    }

    if (newLanguage) {
      language = newLanguage;
    }

    console.log("Настройки обновлены.");
  }

  function displaySettings() {
    console.log(`Текущая тема: ${theme}`);
    console.log(`Текущий язык: ${language}`);
    console.log(`Максимальное количество уведомлений: ${maxNotifications}`);
  }

  return {
    updateSettings,
    displaySettings,
  };
}

const settings = userSettings();

settings.displaySettings();

settings.updateSettings("dark", "Spanish");

settings.displaySettings();
