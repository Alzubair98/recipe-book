<template>
  <main>
    <h1 class="text-2xl font-bold mb-4">Recipe Book</h1>
    <div>
      <input
        type="text"
        placeholder="search recipes..."
        v-model="searchQuery"
        class="p-2 border rounded mb-4 w-full"
      />
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
