<template>
  <v-col>
    <v-card class="filter-card">
      <div class="d-flex justify-space-between">
        <span class="pa-5">فیلترها</span>
        <v-btn variant="plain" color="red" class="pa-5">حذف فیلترها</v-btn>
      </div>
      <div class="d-flex flex-column align-center">
        <v-select
          variant="underlined"
          width="248"
          height="32"
          label="برند"
          outlined
          clearable
          dense
        />

        <v-select
          variant="underlined"
          width="248"
          height="32"
          label="اندازه"
          outlined
          clearable
          dense
        />

        <v-select
          variant="underlined"
          width="248"
          height="32"
          label="رنگ"
          outlined
          clearable
          dense
        />

        <div class="d-flex flex-column">
          <div class="switch-row">
            <span class="switch-text">ارسال امروز</span>
            <v-switch hide-details inset density="compact"></v-switch>
          </div>
          <v-divider></v-divider>

          <div class="switch-row">
            <span class="switch-text">فقط کالاهای موجود</span>
            <v-switch hide-details inset density="compact"></v-switch>
          </div>
          <v-divider></v-divider>
        </div>

        <v-select
          variant="underlined"
          width="248"
          height="32"
          label="محدوده قیمت"
          outlined
          clearable
          dense
        />

        <v-select
          variant="underlined"
          width="248"
          height="32"
          label="مدل"
          outlined
          clearable
          dense
        />

        <v-select
          variant="underlined"
          width="248"
          height="32"
          label="طرح"
          outlined
          clearable
          dense
        />
      </div>
    </v-card>
  </v-col>
</template>

<script setup></script>

<style>
.filter-card {
  border: 1px solid #fff;
  border-radius: 8px;
  width: 288px;
}

.switch-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 0;
}

.switch-text {
  font-size: 14px;
  color: #333;
  margin-left: 4em;
}

/* .rtl-select {
  direction: rtl;
}

.rtl-select .v-field__input {
  text-align: right !important;
}

.rtl-menu .v-list-item-title {
  text-align: right !important;
}

.rtl-select .v-field__append-inner {
  order: -1;
  margin-left: 8px;
  margin-right: 0;
}

.rtl-select .v-label {
  text-align: right !important;
  right: 0;
  left: auto;
} */
</style>
