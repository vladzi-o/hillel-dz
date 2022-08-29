// Необходимо реализовать алгоритм запроса у банкомата:

// 1. баланса на карте
// 2. выдачи наличных

// Входящие данные:

// Для этого пишем функцию getMoney, которая:

// в качестве входящих аргументов принимает объекты userData и bankData.
// возвращает Promise, в котором условием перехода в первый .then является ответ юзера на вопрос 'Посмотреть баланс на карте?’.
// Если юзер выбирает Да (Yes, Подтвердить), то вызываем функцию resolve(userData)
// В функции resolve, в зависимости от доступных пользователю валют (userData), предлагаем пользователю ввести валюту, по которой
// будет выведен баланс.
// Если пользователь вводить в prompt название НЕдопустимой для него валюты, продолжаем запрашивать валюту, пока не будет
// введена допустимая.
// При вводе пользователем названия допустимой ему валюты – выводим данные о балансе по данной валюте в консоль, например:
//‘Баланс составляет: 1000 USD’.
// Если юзер выбирает Отмена (No), то взываем функцию reject({userData: userData, bankData: bankData})
// В функции reject, в зависимости от доступных пользователю валют (userData) и доступных валют в текущем банкомате
// bankData (с НЕ нулевым значением свойства max,
//что говорит об отсутствии в данный момент купюр этой валюты в банкомате), предлагаем пользователю ввести валюту, по которой
// будет произведено снятие наличных и сумму снятия.
// Если пользователь вводить в prompt название НЕдопустимой для него и для банкомата валюты, продолжаем запрашивать
//валюту, пока
// не будет введена допустимая.
// Если пользователь вводить в prompt сумму превышающую max для данной валюты, выводим в консоль сообщение: `Введенная сумма больше
//допустимой. Максимальная сумма снятия: …`.
// Если пользователь вводить в prompt сумму меньше min для данной валюты, выводим в консоль сообщение:
//`Введенная сумма меньше допустимой. Минимальная сумма снятия: …`
// При вводе пользователем допустимой ему и текущему банкомату название валюты и сумму – выводим сообщение об успешном снятии
//наличных в консоль, например: ‘Вот Ваши денежки 200 USD 💵’.
// Финальное сообщение, которое вне зависимости от выбора операции должен получить юзер в консоли – 'Спасибо, хорошего дня 😊'

let userData = {
  USD: 1000,
  EUR: 900,
  UAH: 15000,
  BIF: 20000,
  AOA: 100,
};

let bankData = {
  USD: {
    max: 3000,
    min: 100,
    img: "💵",
  },
  EUR: {
    max: 1000,
    min: 50,
    img: "💶",
  },
  UAH: {
    max: 0,
    min: 0,
    img: "💴",
  },
  GBP: {
    max: 10000,
    min: 100,
    img: "💷",
  },
};

const getMoney = (userData, bankData) =>
  new Promise((resolve, reject) => {
    const balanceConfirmation = confirm("Check cart balance?");
    if (balanceConfirmation) {
      resolve(userData);
    } else {
      reject({ userData, bankData });
    }
  })
    .then((userData) => {
      const availableCurrencies = Object.keys(userData);
      let balance;
      let currency;
      while (!balance) {
        currency = prompt(
          `Choose available currency: ${availableCurrencies.join()}`
        );
        balance = userData[currency];
      }
      console.log(`Your balance is ${balance} ${currency}`);
    })
    .catch(({ userData, bankData }) => {
      const availableCurrencies = Object.entries(bankData)
        .filter((entry) => {
          const currency = entry[0];
          const currencyBankData = entry[1];
          const userBalance = userData[currency];
          return currencyBankData.max && userBalance;
        })
        .map((entry) => entry[0]);

      let currency;
      let isValidCurrency = false;
      while (!isValidCurrency) {
        currency = prompt(
          `Choose available currency: ${availableCurrencies.join()}`
        );
        isValidCurrency = availableCurrencies.includes(currency);
      }
      const amount = +prompt("Choose amount to withdraw");
      if (Number.isNaN(amount)) {
        return console.log("Invalid amount");
      }
      const currencyBankData = bankData[currency];
      if (amount > currencyBankData.max) {
        return console.log(`Max withdrawal amount is ${currencyBankData.max}`);
      }
      if (amount < currencyBankData.min) {
        return console.log(
          `Minimal withdrawal amount is ${currencyBankData.min}`
        );
      }
      return console.log(
        `Your money ${amount} ${currency} ${currencyBankData.img}`
      );
    })
    .finally(() => {
      console.log("Thank you, have a nice day!!");
    });

getMoney(userData, bankData);
