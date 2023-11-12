<script setup lang="ts">
import { ref } from "vue";
import { useGet } from "@/api/index.ts";

import filterComponent from "./components/filterComponent.vue";
const text = ref("");
const name = ref("");
const number = ref("");

const cardsData = ref();

const rows: any = ref([]);

const columns: any = [
  {
    name: "name",
    field: "vaqt",
    label: "Дата создания",
    align: "left",
  },
  {
    name: "damp",
    field: "statistica",
    align: "center",
    label: "Градус",
  },
  {
    name: "usefulDamp",
    field: "vlajnost",
    align: "center",
    label: "Полезная влага",
  },
  {
    name: "dagree",
    field: () => "17.0 C",
    align: "center",
    label: "Температура воздуха",
  },
];

function getTableData(data: any) {
  if (data.length > 0) {
    rows.value = data;
    rows.value.push({
      vaqt: "15 день",
      statistica: "406.5 °C",
      vlajnost: "62.0 %",
      dagree: "17.0 C",
    });
    useGet({
      url: "data",
    }).then((res: any) => {
      cardsData.value = res.data[0];
    });
  } else {
    rows.value = [];
    cardsData.value = {};
  }
}

function onSubmit() {
  text.value = "";
  name.value = "";
  number.value = "";
}
</script>

<template>
  <div id="filterData">
    <div class="text-white text-bold text-h5 q-mb-sm">Filter</div>
    <filterComponent @filtered="getTableData" />
    <div class="statistic-container q-mb-md">
      <q-table
        dark
        :rows="rows"
        :columns="columns"
        row-key="name"
        style="min-width: 300px"
        rows-per-page-label="Har bir sahifadagi qatorlar:"
      />
      <div class="statistic-cards">
        <div
          class="statistic-cards__card"
          style="grid-row-start: 1; grid-row-end: 3"
        >
          <span class="statistic-cards__card--title">Уровен риска</span>
          <div class="statistic-cards__card--value">
            {{ cardsData?.summa || "0 %" }}
            406.5 °C
          </div>
        </div>
        <div class="statistic-cards__card">
          <span class="statistic-cards__card--title"
            >Cумма полезных температур</span
          >
          <div class="statistic-cards__card--value text-info">
            {{ cardsData?.letat ? "550 °C" : "0 °C" }}
          </div>
        </div>
        <div class="statistic-cards__card">
          <span class="statistic-cards__card--title">Прогноз</span>
          <div class="statistic-cards__card--value">
            {{ cardsData?.letat ? "5 день" : "0 день" }}
          </div>
        </div>
        <div class="statistic-cards__card">
          <span class="statistic-cards__card--title"
            >Mоменту, когда бабочки начинают летать.</span
          >
          <div
            class="statistic-cards__card--value"
            :class="[cardsData?.letat ? 'text-negative' : 'text-positive']"
          >
            {{ cardsData?.letat || "0" }} день
          </div>
        </div>
        <div class="statistic-cards__card">
          <span class="statistic-cards__card--title"
            >Cумма полезных температур для яиц</span
          >
          <div class="statistic-cards__card--value text-positive">
            {{ cardsData?.eggs || "0%" }}
          </div>
        </div>
        <div class="statistic-cards__card">
          <span class="statistic-cards__card--title"
            >Cумма полезных температур для личинка</span
          >
          <div class="statistic-cards__card--value text-positive">
            {{ cardsData?.lichinka || "0%" }}
          </div>
        </div>
        <div class="statistic-cards__card">
          <span class="statistic-cards__card--title"
            >Сумма температур, полезных для зрелых видов</span
          >
          <div class="statistic-cards__card--value text-positive">
            {{ cardsData?.dlyazrelix || "0%" }}
          </div>
        </div>
      </div>
    </div>
    <div class="solutions-container">
      <div class="solutions-container__paragraph">
        <span class="text-bold q-mb-md">Инфо Хлопковая Совка:</span>
        <div class="block">
          <img
            src="@/assets/images/9b7283b2-ef6b-4d17-a5f9-adf92b7fcb70.webp"
            alt="img-1"
          />
          <img src="@/assets/images/кўсак қурти (2).png" alt="img-2" />
          <img
            src="@/assets/images/9fa35d45-12e3-4a8c-aa11-62316b55b926.webp"
            alt="img-3"
          />
          <img
            src="@/assets/images/f2a83ab9-8d4d-44e0-aa2d-5f89385a421d.webp"
            alt="img-4"
          />
          <img
            src="@/assets/images/9b7283b2-ef6b-4d17-a5f9-adf92b7fcb70.webp"
            alt="img-5"
          />
        </div>
        Анестезия является основным вредителем хлопка и питается 120 видами
        растений, особенно в областях хлопка, помидоров, баклажанов, нута, мха,
        соевых бобов и кукурузы. Развитие одного поколения вредителей может
        длиться 35-40 дней и давать 3-4 поколения. Для развития
        экстракорпоральной генерации температура должна быть выше 55 ° С, а
        полезная температура составляет 110 ° С. Из этого яйца около 500S для
        экскреции личинок, 3000S для гусеницы, 200S для гуморального периода.
        Этот вредитель обычно поднимается в почве и опускается на глубину 8-12
        см в области таза. Ранней весной бегемот летит от позвоночника до высоты
        2000 градусов, когда температура выше 10 ° C, а весной температура
        падает до 10 ° C. Личинки крупные, крыло 30-40 мм, длина тела 17-20 мм.
        Цвет его тела варьируется от синяков до желтых и серых. Бабочка
        заводится через 3-4 дня после полета и начинает класть яйца. Бабочки
        помещают 500-600 средних бабочек в 3000 яиц. Так как у бабочек первого
        поколения есть яйца в ранние годы, у бабочек есть яйца только на
        прибрежных сорняках и на завтрашних овощных культурах. Вредитель в форме
        серого, куполообразной формы 1 мм. Чтобы не допустить увеличения
        количества запоров червей второго поколения, необходимо организовать
        биомассулот для борьбы с вредителями в домашних хозяйствах и на фермах
        вместе с руководителями, агрономами и специалистами. Вторая
        (первородная) порода бабочек бабочки летает в период цветения, в
        основном на хлопковых полях во 2-й день 1-й декады июня. Для определения
        прохода потомков потомков этого поколения должны использоваться башни, с
        якорными башнями в 25-30 метрах поля и с одного гектара на каждые 2
        гектара, бабочки на темном месте регистрируются каждый день. Желательно
        использовать башни Feramon в течение длительных периодов и провести день
        в прохладных местах. Бабочки начинают откладывать яйца через 3-4 дня
        после того, как жук начинает летать. Яйца для капучино прикрепляются к
        новым листьям, мензуркам и цветочным лоткам рядом с точками роста хлопка
        с помощью набухшей бутылки. В то же время бутоны бабочек радуют злаки,
        растущие на земле. Выход червей из яиц составляет 3-3,5 дня, через 5-6
        дней весной.
      </div>
      <div class="solutions-container__paragraph">
        <span class="text-bold">Решения:</span>
        Рекомендуется размещать трихограмму на поле из расчета 10 см х 10 см на
        гектар на 1 гектар на гектар и определять в среднем 2-3 томатных яйца по
        100 ст. Пожилой червь разбивает яйцо и повреждает до 24 частей микробных
        компонентов. Тело тела меняется в зависимости от цвета травы. Золотые
        личинки используются для борьбы с маленькими червями. Для этого, в
        зависимости от толщины вредного организма, обнаруженного на каждом
        гектаре, откладывается до 500-1000 золота. Ядовитый червь должен быть
        вакцинирован от 500 до 1000 га на гектар для червей среднего и старшего
        возраста. Когда кормление грудью происходит на более чем 10-12 растениях
        на 100 растениях, рекомендуется обрабатывать средства защиты растений
        менее эффективными химическими веществами, которые очень полезны для
        человека. Кроме того, крайне важно своевременно проводить
        агротехнические мероприятия на хлопковых полях в борьбе с глистами.
      </div>
      <div class="solutions-container__paragraph">
        <span class="text-bold">Агротехнический мероприятие:</span>
        <ol style="margin-left: 20px">
          <li>Своевременное завершение осеннего плуга</li>
          <li>
            Подача зерна на неорошаемые земли зимой, вызывающая от 80 до 90
            процентов кашляющих побегов.
          </li>
          <li>
            Уничтожьте сорняки ранней весной, дороги, арык и полынь на
            прибрежных склонах.
          </li>
          <li>
            Затяните почву, чтобы вода не использовалась для полива
            сельскохозяйственных культур.
          </li>
          <li>
            Вытягивание и сброс хлопковых точек и листьев на юбках при
            свертывании во время роста хлопка. Эта процедура помогает устранить
            кошек и молодых червей на 40-55%.
          </li>
          <li>
            В яичной скорлупе телки и всех червей всех возрастов используются
            Энтовант (0,4-0,45 литра), Протектор (0,5 кг), Энтовант ПРО (0,25
            кг) и другие лекарственные средства.
          </li>
          <li>Качественная дефолиация в первые дни.</li>
        </ol>
      </div>
      <div class="solutions-container__paragraph">
        <span class="text-bold">Защитные мероприятия:</span>
        возделывание устойчивых гибридов, уничтожение сорняков, удаление с поля
        растительных остатков после уборки урожая, глубокая зяблевая вспашка,
        междурядные обработки, оптимально ранние сроки посева, включение в
        севооборот вико-овсяных занятых паров, рытье заградительных канав и
        борозд, поливы, применение зеленых отравленных приманок, обработка
        инсектицидами семян и всходов растений, выпуски паразитов Trichogramma
        spp., а также использование биопрепаратов вирин, дендробациллин,
        энтобактерин и битоксибациллин. Возможен мониторинг и сигнализация с
        помощью феромонных ловушек.
      </div>
      <div class="solutions-container__paragraph">
        <span class="text-bold">СЗР</span>
        <ol>
          <li style="display: flex; flex-direction: column">
            <div>Круйзер 350</div>
            <div>SYNGENTA</div>
          </li>
          <li style="display: flex; flex-direction: column">
            <div>Фастак</div>
            <div>BASF</div>
            <div>Инсектициды</div>
          </li>
          <li style="display: flex; flex-direction: column">
            <div>Цунами</div>
            <div>СибАгроХим</div>
            <div>Инсектициды</div>
          </li>
          <li style="display: flex; flex-direction: column">
            <div>Алпак</div>
            <div>Safa Tarim</div>
            <div>Инсектициды</div>
          </li>
          <li style="display: flex; flex-direction: column">
            <div>Тагрел</div>
            <div>Tagros Chemicals</div>
            <div>Инсектициды</div>
          </li>
        </ol>
      </div>
    </div>
    <div class="contact-container">
      <div class="contact-title">Отправить заявку агроному</div>
      <div class="contact-body">
        <div class="contact-info">
          <div class="contact-info--title">Контакт</div>
          <div class="contact-contact">
            <div class="contact-contact--label">Электронная почта</div>
            <div class="contact-contact--value">mayagro@gmail.com</div>
          </div>
          <div class="contact-contact">
            <div class="contact-contact--label">Номер телефона</div>
            <div class="contact-contact--value">+998 (99) 813 07 17</div>
          </div>
        </div>
        <q-form @submit="onSubmit">
          <div class="contact-form">
            <q-input
              v-model="name"
              label="Напишите свое имя"
              dark
              color="white"
              class="input-width"
            />
            <q-input
              v-model="number"
              label="Напишите свой номер телефона"
              placeholder="+998 ( ) --- -- --"
              dark
              color="white"
              class="input-width"
            />
            <q-input
              v-model="text"
              filled
              placeholder="Напишите текст"
              type="textarea"
              class="input-width"
              dark
            />
            <q-btn
              color="secondary"
              label="Отправить"
              text-color="positive"
              class="q-mt-sm input-width"
              size="18px"
              type="submit"
            />
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-width {
  width: 600px;
  @media (max-width: 900px) {
    width: calc(100vw - 20px);
    min-width: 350px;
  }
}
.contact-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
}
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 auto;
  gap: 10px;
}

.contact-contact {
  &--label {
    color: $positive;
    font-size: 24px;
  }
  &--value {
    color: white;
    font-size: 17px;
  }
}

.contact-body {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: start;
  }
}

.contact-info {
  &--title {
    font-size: 35px;
    font-weight: 600;
    color: white;
    margin-bottom: 20px;
  }
}

.contact-title {
  font-size: 27px;
  font-weight: 600;
  color: $positive;
  margin-bottom: 10px;
}
.solutions-container {
  &__paragraph {
    & span {
      font-size: 20px;
    }
    color: white;
    font-size: 17px;
  }
}

.statistic-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  min-height: 340px;
  max-width: 100vw;

  @media (max-width: 900px) {
    min-height: auto;
    grid-template-columns: repeat(1, 1fr);
  }
}

.statistic-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 2;
  gap: 5px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 5;
  }

  &__card {
    width: 100%;
    height: 100%;
    background-color: $secondary;
    color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 10px 10px 20px 10px;
    border: 1px solid $accent;

    &--title {
      font-size: 14px;
      font-weight: 500;
    }
    &--value {
      font-size: 28px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: $positive;
    }
  }
}
</style>
