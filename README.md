# ZenbitTech

Demo: [website](http://159.223.13.78/)

Stack: Node.js | Nest.js | React.JS | Postgres | Docker
Design: [Figma](https://www.figma.com/file/OmpRyHggnkIZ7Qr1c5o5gg/Untitled?node-id=1%3A2)

Check API:

- All callbacks
  `GET: http://159.223.13.78/api/callback`
- Get callback by ID
  `GET: http://159.223.13.78/api/callback/:id`

- Create callback
  `POST: http://159.223.13.78/api/callback`
  fields:

```json
{
  "name": "",
  "email": "",
  "message": ""
}
```

- Edit callback
  `PUT: http://159.223.13.78/api/callback/:id`
- Remove callback
  `DELETE: http://159.223.13.78/api/callback/:id`

Also you can use PgAdmin:
ip: http://159.223.13.78:5050
login: admin@gmail.com
password: root
host_name: database
username: admin
password: root

Description:
Сделать форму обратной связи

Технические моменты frontend:
Сделать открытую страницу, с мобильной адаптацией по собственному видению

- React
- Styled-component
- Redux - будет отлично, если будете спользовать

Технические моменты backend:

- Сделать открытое АПИ которое будет принимать заявку и сохранять в базе
- NodeJs (Nest предпочтительный фреймворк)
- Mysql/Postgress

Приложение залить на любой сервер,
Скинуть ссылку на загруженное приложение и на гитхаб

Покажите что вы умеете, ваш подход к пониманию задачи, подумайте какие могут быть узкие места, посмотрите на результат как пользователь, а не как программист.
