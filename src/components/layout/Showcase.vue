<template>
  <div class="showcase-block">
    <umbrella-icon icon="fa-solid fa-umbrella" class="umbrella-icon" />
    <h1 class="showcase-title">Umbrella</h1>
    <p class="showcase-subtitle">
      Holiday plans?<br />
      Check the weather so as not to take a rain check!
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.showcase-block {
  max-width: 450px;
  width: 100%;
  height: 200px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.25);
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.2);
}

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
