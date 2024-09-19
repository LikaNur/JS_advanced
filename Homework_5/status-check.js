function getStatusMessage(status) {
  switch (status) {
    case "error":
      return "Не известная ошибка";
    case "pending":
      return "Транзакция в ожидании";
    case "success":
      return "Транзакция прошла успешно";
    case "feild":
      return "Транзакция не прошла успешно";
    default:
      return "Неизвестный статус";
  }
}

console.log(getStatusMessage("error"));
console.log(getStatusMessage("pending"));
console.log(getStatusMessage("success"));
console.log(getStatusMessage("feild"));
console.log(getStatusMessage("other"));
