function filterCoursesByPriceRange(courses, min, max) {
  const nullToInfinity = value => value === null ? Infinity : value;
  return courses.filter(item => {
    return item.prices[0] <= nullToInfinity(max) && nullToInfinity(item.prices[1]) >= min;
  })
}

function sortCoursesByMinPrice(courses, ascending) {
  if (ascending === null) return courses;

  return courses.slice().sort((a, b) => {
    return (a.prices[0] - b.prices[0]) * (ascending || -1);
  })
}
