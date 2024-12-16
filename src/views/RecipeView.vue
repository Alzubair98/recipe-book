<template>
  <div>
    <h1>{{ recipe?.name }}</h1>
    <p>{{ recipe?.description }}</p>
    <div>
      <RouterLink :to="{ name: 'edit-recipe', params: { id: recipe?.id } }"> Edit </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useRecipeStore } from '../stores/recipe'

const route = useRoute()
const recipeStore = useRecipeStore()

const recipe = computed(() => recipeStore.getRecipeById(route.params.id as string))
</script>
