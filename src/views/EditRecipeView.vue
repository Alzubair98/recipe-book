<template>
  <div>Edit form</div>
  <form @submit.prevent="updateRecipe">
    <div>
      <input type="text" placeholder="Recipe Name" v-model="name" required />
    </div>
    <div>
      <textarea v-model="description" placeholder="Recipe description" required></textarea>
    </div>
    <button type="submit">Save</button>
  </form>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useRecipeStore } from '../stores/recipe'

const store = useRecipeStore()
const name = ref('')
const description = ref('')
const router = useRouter()
const route = useRoute()

const fetchRecipe = () => {
  const id = route.params.id as string
  const recipe = store.getRecipeById(id)
  if (recipe) {
    name.value = recipe.name
    description.value = recipe.description
  } else {
    router.push({
      name: 'not-found',
    })
  }
}

const updateRecipe = () => {
  store.editRecipe({
    id: route.params.id as string,
    name: name.value,
    description: description.value,
  })
  router.push({
    name: 'recipe',
    params: {
      id: route.params.id as string,
    },
  })
}

onMounted(fetchRecipe)
</script>
