"use strict";
/* Давайте создадим класс для управления банковским счетом. В этом классе будет приватное
свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
1. Класс должен содержать приватное свойство #balance, которое инициализируется
значением 0 и представляет собой текущий баланс счета.
2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
3. Реализуйте метод deposit(amount), который позволит вносить средства на счет.
Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте
ошибку.
4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета.
Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в
противном случае выбрасывайте ошибку.
5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента.
Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте
ошибку.*/

class BankAccount {
    #balance = 0;
    set balance(value) {
        if (value < 0) {
            throw new Error("Initial balance < 0");
        }
        this.#balance = value;
    }

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        try {
            if (amount < 0) {
                throw new amountError("Отрицательное пополнение");
            } else this.#balance += amount;
        } catch (e) {
            if (e.name === "amountError") {
                console.log(amountError);
            }
        }
    }
    withdraw(amount) {
        try {
            if (amount < 0) {
                throw new amountError("Отрицательное снятие");
            } else if (amount > this.balance) {
                throw new amountError("Снятие больше счета");
            } else this.#balance -= amount;
        } catch (e) {
            if (e.name === "amountError") {
                console.log(amountError);
            }
        }
    }
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
}

let account = new BankAccount(500);
account.balance = 10;
console.log(account.balance);
account.deposit(200);
console.log(account.balance);
account.withdraw(100);
console.log(account.balance);

/* Задание 2 (тайминг 35 минут)
У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а
некоторые – нет.
Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о
наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния
и instanceof.
1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока
действия), а у RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и
возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
Опциональную цепочку вызовов методов и оператор нулевого слияния.
4. В функции getAccountInfo используйте instanceof для проверки типа переданного
пользователя и дайте соответствующий ответ. */

class User {
    constructor(userName, userSurname) {
        this.userName = userName;
        this.userSurname = userSurname;
    }
}

class PremiumUser extends User {
    constructor(userName, userSurname) {
        super(userName, userSurname);
    }
    premiumAccount = null;
    setPremiumAccount() {
        this.premiumAccount = new Date().setFullYear(
            new Date().getFullYear() + 1
        );
    }
}

class RegularUser extends User {
    constructor(userName, userSurname) {
        super(userName, userSurname);
    }
}

function getAccountInfo(user) {
    if (user instanceof PremiumUser) {
        return `Premium account ${user.userName}, ${
            user.userSurname
        } valid: ${new Date(user.premiumAccount).getFullYear()}`;
    } else if (user instanceof RegularUser) {
        return `Regular account ${user.userName}, ${user.userSurname}`;
    } else return "Unkown user";
}

const regular = new RegularUser("Ivan", "Ivanov");
const premium = new PremiumUser("Maria", "Petrova");
premium.setPremiumAccount();
const exPremium = new PremiumUser("1337", "42");

console.log(getAccountInfo(regular));
console.log(getAccountInfo(premium));
console.log(getAccountInfo(exPremium));

// const button = document.querySelector("#myNumber");
// console.log(button);

// const callback = () => {
//     console.log("Must be number");
// };
// button.addEventListener("click", callback);
const inputText = document.getElementById("textField");
const inputButton = document.getElementById("buttonField");

inputText.oninput = disableButton;

function disableButton() {
    document.getElementById("result").innerHTML = inputText.value;
    if (inputText.value != "") {
        inputButton.disabled = false;
    } else {
        inputButton.disabled = true;
    }
}