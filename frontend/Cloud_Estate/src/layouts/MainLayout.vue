<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Cloud Estate </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Naslovnica",
    caption: "Početna stranica",
    icon: "house",
    link: "#/",
  },
  {
    title: "Kupi nekretninu",
    caption: "Dostupne nekretnine za kupnju",
    icon: "home_work",
    link: "#/kupnja_nekretnina",
  },
  {
    title: "Prijava",
    caption: "Prijava postoječih korisnika",
    icon: "login",
    link: "#/login",
  },
  {
    title: "Registracija",
    caption: "Registracija novih korisnika",
    icon: "how_to_reg",
    link: "#/registracija",
  },
  {
    title: "Agencije",
    caption: "Lista agencija koje surađuju s nama",
    icon: "real_estate_agent",
    link: "#/popis_agencija",
  },
  {
    title: "O nama",
    caption: "Opis naše vizije i misije",
    icon: "info",
    link: "#/o_nama",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
