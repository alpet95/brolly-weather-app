<template>
  <div class="dropdown">
    <ul>
      <li
        class="dropdown-item"
        v-for="(city, index) in cities"
        :key="index"
        @click="chooseCity"
      >
        {{ city }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["cities"],
  emits: ["get-new-location"],
  inject: ["fetchData"],
  data() {
    return {
      location: "",
    };
  },
  methods: {
    chooseCity(event) {
      this.location = event.target.innerText;
      this.$emit("get-new-location", this.location);
      this.fetchData();
    },
  },
};
</script>

<style>
.dropdown {
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  height: auto;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9);
  overflow: hidden;
}

.dropdown ul {
  list-style-type: none;
}

.dropdown-item {
  padding: 8px 10px;
  text-transform: capitalize;
  border-bottom: 1px solid #000;
  color: #000;
  cursor: pointer;
}

.dropdown-item:last-of-type {
  border-bottom: none;
}

.dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.95);
}
</style>
