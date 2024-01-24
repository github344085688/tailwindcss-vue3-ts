<template>
  <div class="track-document">
    <div class="mid">
      <details class="more">
        <summary><span>Show</span><span>Hide</span> Image</summary>
      </details>
      <div class="imgInfo">
        <div class="img w-100" style="aspect-ratio: 1/1">
          <img :src="require(`@/assets/image/ski2.jpg`)" class="   object-fit: cover;">
        </div>

      </div>
    </div>

  </div>
</template>

<style>        .track-document .mid {
  width: 100%;
  position: relative;
}

.track-document .mid .info {
  overflow: hidden;
  position: relative;
}

.track-document .mid summary {
  cursor: pointer;
  font: 600 20px/24px 'Roboto', arial, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* for iOS Safari */
}

.track-document .mid summary:focus {
  outline: none !important;
}

/* for iOS Safari */

.track-document .mid .summary {
  display: block;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
}

.track-document .imgInfo {
  width: 100%;
  height: 0;
  padding-top: 0%;
  position: relative;
  overflow: hidden;
  transition: 1s linear;
}

.track-document .imgInfo img {
  display: block;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}

.track-document .mid details.more[open] + .imgInfo {
  padding-top: 50%;
}


</style>

<script lang="ts" setup>
</script>
