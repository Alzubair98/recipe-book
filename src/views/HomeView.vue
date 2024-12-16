<template>
  <main>
    <h1>Recipe Book</h1>
    <div>
      <input type="text" placeholder="search recipes..." v-model="searchQuery" />
    </div>
    <nav v-if="filteredRecipes.length > 0">
      <ul>
        <li v-for="recipe in filteredRecipes" :key="recipe.id">
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
import { computed, ref } from 'vue'
import { useRecipeStore } from '../stores/recipe'

const recipeStore = useRecipeStore()
const searchQuery = ref('')

// functions
const filteredRecipes = computed(() =>
  recipeStore.recipes.filter((recipe) =>
    recipe.name.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase()),
  ),
)
</script>
