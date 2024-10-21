### Для удобства главный файл `index.html` инклюдит 3 секции: авторизацию, регистрацию и восстановление пароля, а также каждая секция подчеркнута сплошной фиолетовой линией для разделения.

Иконка "показать пароль" по умолчанию закрыта и имеет состояние `form__password-icon--close`. Когда состояние открытое, меняется модификатор на `form__password-icon--open`.

Также во всех формах кнопки принимают 4 состояния:

- `button` - внешний вид по умолчанию
- `button--disable`
- `button--transparrent` - прозрачная кнопка с серым текстом
- `button--secondary` - прозрачный фон с фиолетовым текстом и бордером

Во всех формах кнопки задизейблены, для проверки меняется модификатор.

Ошибки подсвечиваются классом `invalid-field`.

1. Авторизация<br>
   в разделе 2 формы.

   - Первая форма с незаполненными полями и неактивной кнопкой.<br>
   - Вторая форма с подсвеченными ошибками.

2. Регистрация<br>
   в разделе 3 формы.

   - Первая форма с незаполненными полями и неактивной кнопкой.<br>
   - Вторая форма с подсвеченными ошибками.<br>
   - Третья форма с текстом успешно отправлено

3. Восстановление пароля<br>
   в разделе 5 форм.
   - Первая форма с незаполненными полями и неактивной кнопкой.<br>
   - Вторая форма с текстом успешно отправлено<br>
   - Третья форма с предложением придумать новый пароль<br>
   - Четвертая форма с предложением придумать новый пароль и подсвеченными ошибками<br>
   - Пятая форма с текстом успешно
