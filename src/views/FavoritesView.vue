<template>
  <div>
    <h1>Favorite Recipes</h1>
    <RecipeList :recipes="recipeStore.favoriteRecipes" />
  </div>
</template>

<script lang="ts" setup>
import RecipeList from '../components/RecipeList.vue'
import { useRecipeStore } from '../stores/recipe'

const recipeStore = useRecipeStore()
</script>
