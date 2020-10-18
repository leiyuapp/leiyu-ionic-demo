<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Ionic Framework</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-list>
          <ion-item v-for="cmp in cmps"
                    :key="cmp.label"
                    @click="goPage(cmp)">
            <ion-icon :icon="bookmarkOutline" slot="start"></ion-icon>
            <ion-label>{{cmp.label}}</ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import {
    IonButtons,
    IonContent,
    IonHeader, IonIcon,
    IonItem, IonLabel,
    IonList,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  } from '@ionic/vue';

  import {
    bookmarkOutline,
  } from 'ionicons/icons';
import { useRoute, useRouter } from 'vue-router';
import { ref, computed, watch, reactive } from 'vue';

export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const cmps = reactive([
      {label: 'Action Sheet', page: '/components/action-sheet'},
      {label: 'Alert', page: '/components/alert'},
      {label: 'Avatar', page: '/components/badge'},
      {label: 'Badge', page: '/components/badge'},
      {label: 'Button', page: '/components/button'},
      // {label: 'Ripple Effect', page: '/components/ripple-effect'},
      {label: 'Card', page: '/components/card'},
      {label: 'Checkbox', page: '/components/checkbox'},
      {label: 'Chip', page: '/components/chip'},
      {label: 'Content', page: '/components/content'},
      {label: 'Date & Time Picker', page: '/components/badge'},
      {label: 'Floating Action Button', page: '/components/badge'},
      {label: 'Grid', page: '/components/badge'},
      {label: 'Icons', page: '/components/badge'},
      {label: 'Infinite Scroll', page: '/components/badge'},
      {label: 'Input', page: '/components/badge'},
      {label: 'Item', page: '/components/badge'},
      {label: 'Item Group', page: '/components/badge'},
      {label: 'List', page: '/components/badge'},
      {label: 'Loading', page: '/components/badge'},
      {label: 'Menu', page: '/components/badge'},
      {label: 'Modal', page: '/components/badge'},
      {label: 'Navigation', page: '/components/badge'},
      {label: 'Note', page: '/components/badge'},
      {label: 'Picker', page: '/components/badge'},
      {label: 'Popover', page: '/components/badge'},
      {label: 'Progress Bar', page: '/components/badge'},
      {label: 'Radio', page: '/components/badge'},
      {label: 'Range', page: '/components/badge'},
      {label: 'Refresher', page: '/components/badge'},
      {label: 'Reorder', page: '/components/badge'},
      {label: 'Searchbar', page: '/components/badge'},
      {label: 'Segment', page: '/components/badge'},
      {label: 'Select', page: '/components/badge'},
      {label: 'Skeleton Text', page: '/components/badge'},
      {label: 'Spinner', page: '/components/badge'},
      {label: 'Sliders', page: '/components/badge'},
      {label: 'Tabs', page: '/components/badge'},
      {label: 'Text', page: '/components/badge'},
      {label: 'Thumbnail', page: '/components/badge'},
      {label: 'Toast', page: '/components/badge'},
      {label: 'Toggle', page: '/components/badge'},
      {label: 'Toolbar', page: '/components/badge'},
    ])
    const folder = ref(route.params.id || 'Inbox');
    const matchedFolder = computed(() => route.params.id);
    
    watch(matchedFolder, () => {
      folder.value = matchedFolder.value as string;
    })

    const goPage = (cmp: any) => {
      router.push(cmp.page);
    }

    return {
      folder,
      cmps,
      bookmarkOutline,
      goPage
    }
  }
}
</script>

<style scoped>
ion-menu-button {
  color: var(--ion-color-primary);
}
</style>