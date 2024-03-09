<template>
  <v-app-bar flat color="#000000">
    <!-- <v-icon icon="mdi-circle-slice-4" /> -->
    <v-app-bar-title style="display: flex;  justify-content: center; " class="ml-12">
      <v-btn>
        HOME
      </v-btn>

      <v-btn>
        PORTFOLIO
      </v-btn>

      <v-btn>
        SKILLS
      </v-btn>

      <v-btn>
        CONTACT
      </v-btn>

    </v-app-bar-title>
    <template v-slot:append>
      <v-switch label="Dark" inset class="mt-5"></v-switch>
    </template>
  </v-app-bar>
</template>

<script setup>
//
</script>
