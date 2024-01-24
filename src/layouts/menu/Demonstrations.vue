<template>
  <div class="slides">

    <h2>Vincent van Gogh</h2>
    <h4>METHOD 1 - Slide Down/Up</h4>

    <details class="more">
      <summary>Starry Night</summary>
    </details>
    <div class="show">
      <div class="show-end">
        <img :src="require(`@/assets/image/pic2.jpg`)" class="   object-fit: cover;"
             title="Starry Night">
        <p>The Starry Night (Dutch: De sterrennacht) is an oil-on-canvas painting by the Dutch Post-Impressionist
          painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum
          room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.</p>
        <br>
        <p>It has been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired
          through the Lillie P. Bliss Bequest. Widely regarded as Van Gogh's magnum opus, 'The Starry Night' is one of
          the most recognizable paintings in Western art.</p>
        <p><a href="https://en.wikipedia.org/wiki/Vincent_van_Gogh">Wikepedia</a></p>
      </div>
    </div>
    <h4>METHOD 2 - Cover/Uncover</h4>
    <details class="more">
      <summary>The Night Café</summary>
    </details>
    <div class="show">
      <div class="show-start">
        <img :src="require(`@/assets/image/g5.jpg`)" class="   object-fit: cover;"
             title="Starry Night">
        <p>The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in
          September 1888 in Arles.[1] Its title is inscribed lower right beneath the signature. The painting is owned by
          Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut.</p>
        <br>
        <p>The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife
          Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux
          evidently posed for both artists, too.</p>
        <p><a href="https://en.wikipedia.org/wiki/Vincent_van_Gogh">Wikepedia</a></p>
      </div>
    </div>
  </div>
</template>

<style>
.slides {
  width: 98%;
  max-width: 500px;
  margin: 50px auto;
}

.show {
  display: grid;
  grid-template-rows:0fr;
  overflow: hidden;
  transition: 0.75s;
  width: 100%;
}

.show-start {
  min-height: 0;
}

.show-end {
  min-height: 0;
  align-self: end;
}

#tutorial #info .show p {
  margin: 0;
  padding: 0;
  text-align: justify;
}

details.more[open] + div {
  grid-template-rows:1fr;
  padding-bottom: 10px;
  outline: 0;
}

details summary {
  font-weight: bold;
  cursor: pointer;
  -webkit-tap-highlight-color: #0000;
  font: 400 18px/22px 'Roboto', arial, sans-serif;
  color: #c60;
}

details summary:focus {
  outline: none !important;
}

img {
  display: block;
  float: left;
  max-width: 50%;
  margin: 5px 10px 0 0;
}

img.star {
  width: 200px;
}

img.cafe {
  width: 250px;
}
</style>

<script lang="ts" setup>
</script>
