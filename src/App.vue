<template>
  <header>
    <nav>
      <ul class="flex gap-4 p-8 bg-orange-200 text-orange-800 text-lg">
        <li>
          <RouterLink class="hover:underline" :to="{ name: 'home' }"> Home </RouterLink>
        </li>
        <li>
          <RouterLink class="hover:underline" :to="{ name: 'favorites' }">Favorites</RouterLink>
        </li>
        <li>
          <RouterLink class="hover:underline" :to="{ name: 'add-recipe' }">Add Recipe</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <main class="bg-orange-100 h-screen p-4"><RouterView /></main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
