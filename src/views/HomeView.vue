<template>
  <main>
    <h1>Home</h1>
    <nav v-if="recipeStore.recipes.length > 0">
      <ul>
        <li v-for="recipe in recipeStore.recipes" :key="recipe.id">
          <router-link :to="{ name: 'recipe', params: { id: recipe.id } }">{{
            recipe.name
          }}</router-link>
        </li>
      </ul>
    </nav>
  </main>
</template>

<script setup lang="ts">
import { useRecipeStore } from '../stores/recipe'

const recipeStore = useRecipeStore()
</script>
