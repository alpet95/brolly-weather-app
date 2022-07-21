<template>
  <card>
    <template>
      <fa-tower-broadcast
        icon="fa-solid fa-tower-broadcast"
        class="tower-broadcast-icon"
      />
      <p v-html="error" class="error-message"></p>
    </template>
  </card>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style>
.tower-broadcast-icon {
  margin-bottom: 5px;
  width: 30px;
  height: 30px;
  color: #f4d03f;
}

.error-message {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
}
</style>
