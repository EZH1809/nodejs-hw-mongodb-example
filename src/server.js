import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { env } from './utils/env';

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  //   app.get('/', (req, res) => {
  //     res.json({
  //       message: 'Hello world!',
  //     });
  //   });

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  //   app.use((err, req, res, next) => {
  //     res.status(500).json({
  //       message: 'Something went wrong',
  //       error: err.message,
  //     });
  //   });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

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
