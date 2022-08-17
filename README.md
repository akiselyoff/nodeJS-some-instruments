# nodeJS-some-instruments

## morgan

HTTP request logger middleware for node.js

[install](https://www.npmjs.com/package/morgan)

Предопределенные форматы логера:

- **combined** - использует режим combined сервера Apache для формата журналов
  `:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"`

- **common** - использует режим common сервера Apache для формата журналов
  `:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]`

- **dev** - формат журнала с цветовой кодировкой (по статусу запроса) Маркер
  будет окрашен в зеленый цвет для кодов успеха, красный для кодов ошибок
  сервера, желтый для кодов ошибок клиента, бирюзового для перенаправления кодов
  и неокрашенных информационных кодов
  `:method :url :status :response-time ms - :res[content-length]`

- **short** короче, чем формат по умолчанию
  `:remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms`

- **tiny** - самый короткий вывод, только время ответа и несколько
  дополнительных элементов.
  `:method :url :status :res[content-length] - :response-time ms`
