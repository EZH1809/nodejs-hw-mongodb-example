// import express from 'express';

// const PORT = 3000;

// const app = express();

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello world!',
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
// });

/*
В файлі src/server.js створіть функцію setupServer, в якій буде створюватись express сервер. Ця функція має в себе включати:

Створення серверу за допомогою виклику express()
Налаштування cors та логгера pino.
Обробку неіснуючих роутів (повертає статус 404 і відповідне повідомлення)
{
  message: 'Not found',
}

Запуск серверу на порті, вказаному через змінну оточення PORT або 3000, якщо такої змінної не зазначено
При вдалому запуску сервера виводити в консоль рядок “Server is running on port {PORT}”, де {PORT} - це номер вашого порта
Не забудьте вказати змінну оточення в файлі .env.example

Створіть файл src/index.js. Імпортуйте і викличте у ньому функцію setupServer.


*/
