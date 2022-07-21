<template>
  <card>
    <template #showcase>
      <fa-umbrella icon="fa-solid fa-umbrella" class="umbrella-icon" />
      <h1 class="showcase-title">Brolly</h1>
      <p class="showcase-subtitle">
        Holiday plans?<br />
        Check the weather so as not to take a rain check!
      </p>
    </template>
  </card>
</template>

<script>
export default {};
</script>

<style>
.showcase-title {
  margin-bottom: 5px;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
}

.showcase-subtitle {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
}

.umbrella-icon {
  width: 50px;
  height: 50px;
  color: #f4d03f;
}
</style>
