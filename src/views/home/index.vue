<script setup lang="ts">
import { ref } from "vue";
import filterData from "../filterData/index.vue";
import mapComponent from "../map/index.vue";
const drawerRight = ref(false);
</script>

<template>
  <div>
    <q-layout>
      <q-header>
        <q-toolbar>
          <q-toolbar-title>
            <div class="flex items-center">
              <div class="q-mr-sm">My Agro</div>
              <img src="/logo.png" alt="logo qalam X" height="30" width="30" />
            </div>
          </q-toolbar-title>
          <q-btn
            flat
            @click="drawerRight = !drawerRight"
            round
            dense
            icon="menu"
            class="drawer-toggle"
          />

          <ul class="tabs-list">
            <li class="tabs-item">
              <div class="tabs-item-text">
                <a href="#map">Map</a>
              </div>
            </li>
            <li class="tabs-item">
              <div class="tabs-item-text">
                <a href="#filterData">Filter data</a>
              </div>
            </li>
          </ul>
        </q-toolbar>
      </q-header>

      <q-drawer
        side="right"
        v-model="drawerRight"
        show-if-above
        bordered
        :width="200"
        :breakpoint="20000"
        class="bg-black"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <ul class="drawer-tabs">
              <li class="text-white drawer-tabs-tab">
                  <a href="#map">Map</a>
              </li>
              <li class="text-white drawer-tabs-tab">
                  <a href="#filterData">Filter data</a>
              </li>
            </ul>
          </div>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding class="page-container">
          <mapComponent />
          <filterData />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style lang="scss" scoped>
.drawer-tabs-tab{
  color: white;
  font-size: 17px;
}
a {
  text-decoration: none;
  color: white;
}
.drawer-toggle {
  display: inline-block;
  @media (min-width: 700px) {
    display: none;
  }
}

.tabs-list {
  display: flex;
  min-width: max-content;
}

.tabs-item {
  list-style: none;
  cursor: pointer;
  margin-right: 20px;
  display: inline-block;
  @media (max-width: 700px) {
    display: none;
  }
}
</style>
