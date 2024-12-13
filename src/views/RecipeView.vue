<template>
  <div>Recipe {{ $route.params.id }}</div>
  <div>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: 1 } }">Recipe 1</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: 3 } }">Recipe 3</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()

console.log(route.params)

onMounted(() => console.log(`Fetching data inside onMounted`))

watch(
  () => route.params.id,
  () => console.log('fetching inside watch'),
  { immediate: true },
)
</script>
