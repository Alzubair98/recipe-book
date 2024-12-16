<template>
  <main>
    <h1>Recipe Book</h1>
    <div>
      <input type="text" placeholder="search recipes..." v-model="recipeStore.searchQuery" />
    </div>
    <nav v-if="recipeStore.filteredRecipes.length > 0">
      <ul>
        <li v-for="recipe in recipeStore.filteredRecipes" :key="recipe.id">
          <router-link :to="{ name: 'recipe', params: { id: recipe.id } }">{{
            recipe.name
          }}</router-link>
        </li>
      </ul>
    </nav>
    <div v-else>No recipes found!</div>
  </main>
</template>

<script setup lang="ts">
import { useRecipeStore } from '../stores/recipe'

const recipeStore = useRecipeStore()
</script>
