<script setup lang="ts">
import { useGet } from "@/api/index.ts";
import { onMounted } from "vue";
import { ref } from "vue";

const emits = defineEmits(["filtered"]);

const region = ref();
const destrict = ref();
const station = ref();
const product = ref();
const pest = ref();

const regions = ref([]);

const districts = ref([]);

const stations = ref([]);

const products = ref([]);

const pests = ref([]);

onMounted(() => {
  useGet({
    url: "viloyat",
  }).then((res: any) => {
    regions.value = res.data;
  });
  useGet({
    url: "tuman",
  }).then((res: any) => {
    districts.value = res.data;
  });
  useGet({
    url: "stansiya",
  }).then((res: any) => {
    stations.value = res.data;
  });
  useGet({
    url: "osimlik",
  }).then((res: any) => {
    products.value = res.data;
  });
  useGet({
    url: "hashorot",
  }).then((res: any) => {
    pests.value = res.data;
  });
});

function filterData() {
  if (pest.value) {
    useGet({
      url: "datahashorot",
      params: {
        viloyat: region.value.id,
        tuman: destrict.value.id,
        stansiya: station.value.id,
        osimlik_nomi: product.value.id,
        hashorot: pest.value.id,
      },
    }).then((res: any) => {
      emits("filtered", res.data);
    });
  }
}
</script>

<template>
  <div class="filter-container">
    <q-select
      color="white"
      dark
      v-model="region"
      :options="regions"
      label="Выберите регион"
      outlined
      square
      option-label="viloyat"
      option-value="id"
      @update:model-value="filterData()"
    />
    <q-select
      color="white"
      dark
      :disable="!region"
      v-model="destrict"
      :options="districts"
      label="Выберите район"
      outlined
      square
      option-label="tuman"
      option-value="id"
      @update:model-value="filterData()"
    />
    <q-select
      color="white"
      dark
      :disable="!destrict"
      v-model="station"
      :options="stations"
      label="Выберите станцию"
      outlined
      square
      option-label="stansiya_nomi"
      option-value="id"
      @update:model-value="filterData()"
    />
    <q-select
      color="white"
      dark
      :disable="!station"
      v-model="product"
      :options="products"
      label="Выберите название продукта"
      outlined
      square
      option-label="osimlik_nomi"
      option-value="id"
      @update:model-value="filterData()"
    />
    <q-select
      color="white"
      dark
      :disable="!product"
      v-model="pest"
      :options="pests"
      label="Выберите название вредителя"
      outlined
      square
      option-label="hashorot_nomi"
      option-value="id"
      @update:model-value="filterData()"
    />
  </div>
</template>

<style scoped lang="scss">
.filter-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
  margin-bottom: 15px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
