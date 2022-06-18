<template>
  <div class="courses" >
    <div class="courses__headers">
      <div class="courses__header">
        <div class="courses__item">
          Курс
        </div>
      </div>
      <div class="courses__header">
        <div class="courses__item">
          <div class="courses__inner">
            <span>Стоимость</span>
            <SelectSortByOrder @sortCourses="sortCourses"/>
          </div>
          <InputFilterByPrice @setRange="setRange" />
        </div>
      </div>
    </div>
    <div
      class="courses__body"
      v-for="(course, i) in sortedCourses"
      :key="i"
    >
      <div class="courses__row">
        <div class="courses__field">
          <span>{{course.name}}</span>
        </div>
        <div class="courses__field">
          <span v-show="course.prices[0] === null && course.prices[1] === null">не указана</span>
          <span v-show="course.prices[0] !== null "> от {{ course.prices[0] }} </span>
          <span v-show="course.prices[1]"> до {{ course.prices[1]}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectSortByOrder from "@/components/SelectSortByOrder";
import InputFilterByPrice from "@/components/InputFilterByPrice";

export default {
  name: "ListOfCourses",
  components: {
    InputFilterByPrice,
    SelectSortByOrder,
  },
  data() {
    return {
      minPrice: null,
      maxPrice: null,
      courses: [
        { name: "Courses in England", prices: [0, 100] },
        { name: "Courses in Germany", prices: [500, null] },
        { name: "Courses in Italy", prices: [100, 200] },
        { name: "Courses in Russia", prices: [null, 400] },
        { name: "Courses in China", prices: [50, 250] },
        { name: "Courses in USA", prices: [200, null] },
        { name: "Courses in Kazakhstan", prices: [56, 324] },
        { name: "Courses in France", prices: [null, null] },
      ],
      sortedCourses: [],
    }
  },
  methods: {
    setRange(minPrice, maxPrice) {
      Number(minPrice) === 0 ? this.minPrice = null : this.minPrice = Number(minPrice);
      Number(maxPrice) === 0 ? this.maxPrice = null : this.maxPrice = Number(maxPrice);
      this.sortedCourses = this.filterCoursesByPriceRange(this.courses, this.minPrice, this.maxPrice)
    },
    filterCoursesByPriceRange(arr, min, max) {
      const nullToInfinity = value => value === null ? Infinity : value;
      return arr.filter(item => {
        return item.prices[0] <= nullToInfinity(max) && nullToInfinity(item.prices[1]) >= min
      })

    },
    sortCourses(ascending) {
      if (ascending === null) {
        this.sortedCourses = [...this.courses];
        return;
      }
      this.sortedCourses =  this.courses.slice().sort((a, b) => {
        return (a.prices[0] - b.prices[0]) * (ascending ? 1: -1);
      })
    },

  },
  mounted() {
    this.sortedCourses = [...this.courses];
  }
}
</script>

<style scoped lang="scss">
.courses {
  font-size: 15px;
  margin: 5% auto 0;
  width: 50%;
  min-width: 350px;
  &__headers {
    display: flex;
    justify-content: space-between;
    padding-bottom: 14px;
  }
  &__header {
    position: relative;
    flex: 1;
    flex-direction: column;
    display: flex;
    justify-content: center;
    border: 1px solid #e6e6e6;
    margin: 0 auto;
  }
  &__item {
    margin: 0 auto;
  }
  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__body {
    display: flex;
    justify-content: space-between;
  }
  &__row {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 21px 0;
    width: 100%;
  }
  &__field {
    flex: 1;
    display: flex;
    justify-content: center;
    & > span {
      margin-right: 5px;
    }

  }
}
</style>
