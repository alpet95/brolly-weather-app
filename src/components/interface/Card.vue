<template>
  <div class="card">
    <slot name="showcase"></slot>
    <slot name="forecast"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card {
  max-width: 400px;
  width: 100%;
  height: 200px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-align: center;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.25);
  text-shadow: 2px 1px 0px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
