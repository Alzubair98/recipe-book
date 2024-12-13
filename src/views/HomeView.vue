<template>
  <main>
    <h1>Home</h1>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'recipe', params: { id: 1 } }">Recipe 1</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'recipe', params: { id: 2 } }">Recipe 2</router-link>
        </li>
      </ul>
    </nav>
  </main>
</template>

<script setup lang="ts"></script>
