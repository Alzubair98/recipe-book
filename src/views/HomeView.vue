<template>
  <main>
    <h1>Recipe Book</h1>
    <div>
      <input type="text" placeholder="search recipes..." v-model="searchQuery" />
    </div>
    <RecipeList :recipes="filteredRecipes" />
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRecipeStore } from '../stores/recipe'
import RecipeList from '../components/RecipeList.vue'

const recipeStore = useRecipeStore()
const searchQuery = ref<string>('')

const filteredRecipes = computed(() => recipeStore.filteredRecipes(searchQuery.value))
</script>
