# Домашнее задание к лекции 2. «Функции»

## Задача № 1

Требуется написать функцию `getArrayParams(arr)`, которая получает на вход массив чисел от -100 до 100 и возвращает минимальное, максимальное и среднее арифметическое значений массива. 

1. Создайте функцию которая принимает на ввод массив. 
2. Внутри функции задайте 3 переменных `min, max, sum` присвоив им некоторые первоначальные значения.
<details>
  <summary>Какие значения? (внутри подсказка, подумайте прежде чем открыть)</summary>
    min =  Infinity
    max = -Infinity
        
    Также можно использовать в качестве min и max первый элемент массива.
</details>

3. Пройдите по массиву циклом `for` либо `while` и для каждого элемента определите:
    1. Если элемент больше предыдущего максимума, то максимум становится равен элементу
    2. Если элемент меньше предыдущего минимума, то минимум становится равен элементу
    3. Добавляем элемент к сумме `sum` для последующего вычисления среднего.
4. После прохождения цикла функция должна возвращать объект вида: `{max:..., min: ..., avg:...}`, то есть минимальное, максимальное и средние значения. Чтобы вычислить среднее надо сумму элементов поделить на их количество. Среднее надо округлить до 2х знаков после запятой (для округления воспользуйтесь `toFixed`). Заметьте, `toFixed` возвращает `string`, так как вам необходимо вернуть число (`number`), то необходимо дополнительное преобразование значения к числу.

### Пример
```js
getArrayParams([-99, 99, 10]) // { min: -99, max: 99, avg: `3.33` }
getArrayParams([1, 2, 3, -100, 10])  // { min: -100, max: 10, avg: `-16.80` }
```

## Задача № 2
Представьте, что у нас есть мясорубка с разными насадками. Мясорубка запускает процесс, а сам процесс зависит от того, какая будет насадка.  Затем мясорубка применяет насадку ко всему мясу, которое в неё поступает и выдаёт на выход только самый лучший кусок.

Пусть дан массив, каждый элемент которого в свою очередь является массивом чисел, например `arrOfArr=[[1, 2, 3, 4], [10, 20, -10, -20]]`. Необходимо среди всех массивов найти такой, сумма элементов которого максимальна и вывести сумму.

Задачу можно разбить на две части:

- написать функцию, которая будет считать сумму элементов массива - это "насадка мясорубки"
- написать функцию, которая применит "насадку" ко всем массивам, которые поступили нам на вход  - это "мясорубка"
- тогда входные данные, массив массивов, являются "мясом"

Итак, напишем две функции: `makeWork(arrOfArr,func)` - в наших терминах это мясорубка и `worker(arr)` - это насадка.

1. Напишите функцию `worker` которая должна находить сумму элементов массива и возвращать её. 
2. Функция `makeWork`  принимает входные данные - массив массивов (мясо) и функцию `worker` - это насадка, таким образом `makeWork` - функция высшего порядка. 
3. Затем `makeWork` применяет полученную функцию `worker` к каждому из полученных массивов `worker(arrOfArr[i])` вычисляя таким образом сумму элементов. 
4. Если сумма больше предыдущего максимума, то меняем максимум (его следует хранить в отдельной переменной и задавать в начале функции `makeWork`)

Таким образом наша мясорубка не только перемалывает (находит сумму чисел каждого массива) но и возвращает самый жирный кусок (с максимальной суммой) 

**Совет**: Напишите функцию `worker`, которая должна находить максимальное значение элементов массива и возвращать её.
Протестируйте функцию отдельно на своих примерах, например на (https://jsbin.com). Убедитесь, что она работает.
Затем передайте её в `makeWork` (обратите внимание, что внутри она попадет в переменную `func` и мы сможем вызывать её `func(arr)`).
Итерируйтесь по массиву `arrOfArr` с помощью цикла, выполняя `worker` для каждого элемента (находя сумму), и если она больше ранее найденного максимума - присваивайте `max = sum`.

## Задача 3. 
Попробуем реализовать другую насадку для нашей мясорубки. Для этого напишем функцию `worker2` которая должна находить разность максимального и минимального значения внутри массива. Это можно интерпретировать как расстояние между минимумом и максимумом. Заметьте, что данная разность - всегда неотрицательное число. Затем используйте данную насадку как аргумент для функции mincer.


### Пример
```js
//worker
let arrOfArr = [[1, 2, 3], [4, 5, 6]];
makeWork(arrOfArr, worker); // 15

arrOfArr = [[10, 10, 11], [20, 10]];
makeWork(arrOfArr, worker); // 31

arrOfArr = [[0, 0, 0], [-1, -100]];
makeWork(arrOfArr, worker); // 0

//worker2
arrOfArr = [[-10, -20, -40], [10, 20, 30]];
makeWork(arrOfArr, worker2); // 30

arrOfArr = [[0, 0, 0], [-1, -99]];
makeWork(arrOfArr, worker2); // 98
```

## Требования для выполнения домашней работы

- браузер;
- редактор кода, например [Sublime][1] или [Visual Studio Code][2];
- аккаунт на [GitHub][0] ([инструкция по регистрации на GitHub][3]);
- система контроля версий [Git][4], установленная локально ([инструкция по установке Git][5]);
- запуск всех тестов должен успешно выполнять все тесты:

  ![графическое представление](../Jasmine/results/sucessed_tasks1_1.png)

## Решение задач

**1.** Произведите [Fork](https://ru.wikipedia.org/wiki/Форк) репозитория с задачами (`fork` необходимо делать перед выполнением каждой домашней работы). <br>
**2.** Перейдите в папку задания `cd ./2.functions`. <br>
**3.** Откройте файл `task.js` в вашем редакторе кода и выполните задание. <br>
**4.** Самостоятельно вызывать функции не требуется, если это не требуется по заданию. <br>
**5.** Откройте файл `index.html` в вашем браузере и с помощью консоли `DevTools` убедитесь в правильности выводимых результатов. <br>
**6.** Откройте файл `test-runer.html` в вашем браузере и убедитесь, что все тесты выполняются (на вкладке `Spec List` можно видеть какие тесты выполнились, а какие нет). <br>
**7.** Добавьте файл `task.js` в индекс `git` с помощью команды `git add %file-path%`, где `%file-path%` - путь до целевого файла `git add task.js`. <br>
**8.** Сделайте коммит, используя команду `git commit -m '%comment%'`, где `%comment%` - это произвольный комментарий к вашему коммиту `git commit -m 'first commit variables'`. <br>
**9.** Опубликуйте код в репозиторий `homeworks` с помощью команды `git push -u origin main`.<br>
**10.** Пришлите ссылку на репозиторий через личный кабинет на сайте [Нетологии][6].<br>

[0]: https://github.com/
[1]: https://www.sublimetext.com/
[2]: https://code.visualstudio.com/
[3]: https://github.com/netology-code/guides/tree/master/github
[4]: https://git-scm.com/
[5]: https://github.com/netology-code/guides/blob/master/git/README.md
[6]: https://netology.ru/

**_Никаких файлов прикреплять не нужно._**

Все задачи обязательны к выполнению для получения зачета. Присылать на проверку можно каждую задачу по отдельности или все задачи вместе. Во время проверки по частям ваша домашняя работа будет со статусом "На доработке".

Любые вопросы по решению задач задавайте в Slack-канале.
