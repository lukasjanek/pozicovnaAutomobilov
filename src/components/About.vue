<template>
    <div class="about">
    <h1>This is an about page</h1>
    <div class="articles">
      <article>
        <h2>Article 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
      <article>
        <h2>Article 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
      <article>
        <h2>Article 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
    </div>
  </div>
</template>


<script>
export default {
  name: 'AboutPage',
};
</script>

<style>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 800px;
}

article {
  margin: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 300px;
}

@media (max-width: 768px) {
  article {
    width: 100%;
  }
}
</style>