<template>
  <div class="input-filter">
    <div class="input-filter__values">
      <span>от</span>
      <input type="text" v-model="minPrice" @change="setRange">
      <span>до</span>
      <input type="text" v-model="maxPrice" @change="setRange">
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputFilterByPrice',
  data() {
    return {
      minPrice: null,
      maxPrice: null,
    }
  },
  methods: {
    setRange() {
      if (Number(this.minPrice) > Number(this.maxPrice) && this.maxPrice !== null && this.maxPrice !== "") {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.$emit('setRange', this.minPrice, this.maxPrice);
    },
  }
}
</script>

<style scoped lang="scss">
.input-filter {
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: center;
  &__values {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
    & > input {
      width: 50px;
      margin: 6px 5px;
      outline-color: #86bbf9;
    }
  }
}


</style>
