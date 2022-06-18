Тестовое задание для NewGen Vision

Базовое решение:

Фильтрация:

```javascript
function filterCoursesByPriceRange(courses, min, max) {
  const nullToInfinity = value => value === null ? Infinity : value;
  return courses.filter(item => {
    return item.prices[0] <= nullToInfinity(max) && nullToInfinity(item.prices[1]) >= min;
  })
}
```

Сортировка:

```javascript
function sortCoursesByMinPrice(courses, ascending) {
  if (ascending === null) return courses;

  return courses.slice().sort((a, b) => {
    return (a.prices[0] - b.prices[0]) * (ascending || -1);
  })
}
```

**Дополнительно был реализован фронтенд на vue для этого функционала**

<details>
  <summary>Условие задачи:</summary>

На сайте UniPage есть подборка интересных языковых курсов. У каждого курса есть цена, которая является диапазоном.
Например:

от 100 до 200 рублей;

от 500 рублей;

до 400 рублей.

Пользователю сайта нужно найти подходящие ему курсы. Для этого есть фильтр, где пользователь может задать подходящий ему диапазон цен.

</details>

-----
<details>
  <summary>Требование:</summary>


Опишите, как можно отфильтровать список курсов, чтобы выдались только подходящие по цене? Реализуйте на JavaScript (или TypeScript) функцию, проводящую такую фильтрацию.

Входные данные:
  ```javascript
    // Список курсов
    let courses = [
      { name: "Courses in England", prices: [0, 100] },
      { name: "Courses in Germany", prices: [500, null] },
      { name: "Courses in Italy", prices: [100, 200] },
      { name: "Courses in Russia", prices: [null, 400] },
      { name: "Courses in China", prices: [50, 250] },
      { name: "Courses in USA", prices: [200, null] },
      { name: "Courses in Kazakhstan", prices: [56, 324] },
      { name: "Courses in France", prices: [null, null] },
    ];
    
    // Варианты цен (фильтры), которые ищет пользователь
    let requiredRange1 = [null, 200];
    let requiredRange2 = [100, 350];
    let requiredRange3 = [200, null];
  ```

Вывод:

// [подходящие курсы для каждого варианта фильтра]

Дополнительно, вы также можете реализовать алгоритм сортировки курсов по цене.
</details>



