<template>
  <h1 class="text-2l font-bold mb-4">Edit form</h1>
  <form @submit.prevent="updateRecipe" class="space-y-4">
    <div>
      <input
        type="text"
        placeholder="Recipe Name"
        v-model="name"
        class="p-2 border rounnded w-full"
        required
      />
    </div>
    <div>
      <textarea
        v-model="description"
        placeholder="Recipe description"
        class="p-2 border rounnded w-full"
        required
      ></textarea>
    </div>
    <button type="submit" class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
      Save
    </button>
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
