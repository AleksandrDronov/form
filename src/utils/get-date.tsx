const getDate = () => {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  let hour: string | number = currentDate.getHours();
  let minute: string | number = currentDate.getMinutes();
  let second: string | number = currentDate.getSeconds();

  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  hour = hour < 10 ? "0" + hour : hour;

  return `${day} ${month} ${year} в ${hour}:${minute}:${second}`;
};

export default getDate;