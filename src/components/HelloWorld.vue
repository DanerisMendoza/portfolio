<template>
  <section id="section1">
    <div class="text-h1">Daneris Mendoza</div>
    <div class="text-h3 font-weight-light" style="color: gray;">FULL STACK DEVELOPER</div>
  </section>
  <section id="section2" style="background-color: lightgrey;">
    <div class="text-h3 mt-6" style="color: black;">PROJECTS</div>
    <div class="card-container">

      <v-card width="500" height="650" density="comforable" elevation="20" outlined style="justify-content: center" class="pt-2 pl-2">
        <v-img class="align-end text-white" height="350" src="../assets/system.png" >
        </v-img>
        <v-card-title class="d-flex justify-center">E-Palengke</v-card-title>
        <v-card-text>

          <strong>Stacks: </strong>
          <v-chip>Vue.2(Web)</v-chip>
          <v-chip>Vue.3(Mobile)</v-chip>
          <v-chip>Ionic</v-chip>
          <v-chip>Laravel.10</v-chip>
          <br>
          <strong>Platform: </strong>
          <v-chip>Web</v-chip>
          <v-chip>Mobile</v-chip>
          <br>
          <strong>Type: </strong>
          <v-chip>Academic Thesis</v-chip>
        </v-card-text>

        <v-card-subtitle>Web Based Ecomerce</v-card-subtitle>
        <v-card-subtitle>Multiple user role (Admin, Customer, Seller and Delivery)</v-card-subtitle>

        <v-card-actions  class="d-flex justify-center">
          <v-btn color="black" variant="outlined">
            View Website
          </v-btn>

          <v-btn color="black" variant="outlined">
            More Details
          </v-btn>
        </v-card-actions>
      </v-card>


    </div>

  </section>
</template>

<script setup>
</script>

<style>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
}

#section1 {
  justify-content: center;
}

#section2 {
  /* justify-content: center; */
}

.card-container {
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: row;
}



.v-card {
  margin: 1.5rem;
}

.v-chip {
  margin: 0.2rem;
}
</style>