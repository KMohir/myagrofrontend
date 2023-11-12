<template>
  <div class="map-container" id="map">
    <iframe
      class="map-iframe"
      src="https://old.assalomagro.uz/ru/services/map/3"
    />
  </div>
</template>

<style>
.map-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.map-iframe {
  position: absolute;
  top: -100px;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  border: none;
}
</style>
