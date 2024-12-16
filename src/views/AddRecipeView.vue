<template>
  <h1 class="text-2l font-bold mb-4">Add form</h1>
  <form @submit.prevent="addRecipe" class="space-y-4">
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
      Add
    </button>
  </form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useRecipeStore } from '../stores/recipe'

const store = useRecipeStore()
const name = ref('')
const description = ref('')
const router = useRouter()

const addRecipe = () => {
  const recipe = store.addRecipe({
    name: name.value,
    description: description.value,
  })
  router.push({
    name: 'recipe',
    params: {
      id: recipe.id,
    },
  })
}
</script>
