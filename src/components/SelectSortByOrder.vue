<template>
  <div class="select-sort">
    <div class="select-sort__title" @click="optionsVisible = !optionsVisible">
      <img class="select-sort__icon" src="@/assets/icon-sort.png">
    </div>
    <div
      class="select-sort__options"
      v-if="optionsVisible"
    >
      <p
        class="select-sort__option"
        v-for="(option, i) in options"
        :key="i"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectSortByOrder',
  data() {
    return {
      options: [
        {
          name: 'По умолчанию',
          isAscending: null,
        },
        {
          name: 'По увеличению цены',
          isAscending: true,
        },
        {
          name: 'По уменьшению цены',
          isAscending: false,
        },
      ],
      optionsVisible: false,
      selectedOption: 'По умолчанию',
    }
  },
  methods: {
    selectOption(option) {
      if (option.name !== this.selectedOption) {
        this.selectedOption = option.name;
        this.$emit('sortCourses', option.isAscending);
        this.optionsVisible = false;
      } else {
        this.optionsVisible = false;
      }
    },
  }
}
</script>

<style scoped lang="scss">
.select-sort {
  display: flex;
  align-items: center;
  height: 30px;
  color: white;
  &__icon {
    width: 13px;
  }
  &__options {
    position: absolute;
    top: 35px;
    right: 0;
    z-index: 10;
    width: 100%;
    background-color: #86bbf9;
    cursor: pointer;
  }
  &__icon {
    padding: 6px 5px;
    font-size: 16px;
    line-height: 15px;
    cursor: pointer;
  }
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 6px 10px;
    font-size: 12px;
    line-height: 15px;
    cursor: pointer;
    & > p {
      white-space: nowrap;
    }
  }
  &__option {
    margin: 8px;
    padding: 8px 0 8px 8px;
  }
}
</style>
