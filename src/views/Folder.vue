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
      {label: 'Alert', page: ''},
      {label: 'Avatar', page: ''},
      {label: 'Badge', page: ''},
      {label: 'Button', page: ''},
      {label: 'Card', page: ''},
      {label: 'Checkbox', page: ''},
      {label: 'Chip', page: ''},
      {label: 'Content', page: ''},
      {label: 'Date & Time Picker', page: ''},
      {label: 'Floating Action Button', page: ''},
      {label: 'Grid', page: ''},
      {label: 'Icons', page: ''},
      {label: 'Infinite Scroll', page: ''},
      {label: 'Input', page: ''},
      {label: 'Item', page: ''},
      {label: 'Item Group', page: ''},
      {label: 'List', page: ''},
      {label: 'Loading', page: ''},
      {label: 'Menu', page: ''},
      {label: 'Modal', page: ''},
      {label: 'Navigation', page: ''},
      {label: 'Note', page: ''},
      {label: 'Picker', page: ''},
      {label: 'Popover', page: ''},
      {label: 'Progress Bar', page: ''},
      {label: 'Radio', page: ''},
      {label: 'Range', page: ''},
      {label: 'Refresher', page: ''},
      {label: 'Reorder', page: ''},
      {label: 'Searchbar', page: ''},
      {label: 'Segment', page: ''},
      {label: 'Select', page: ''},
      {label: 'Skeleton Text', page: ''},
      {label: 'Spinner', page: ''},
      {label: 'Sliders', page: ''},
      {label: 'Tabs', page: ''},
      {label: 'Text', page: ''},
      {label: 'Thumbnail', page: ''},
      {label: 'Toast', page: ''},
      {label: 'Toggle', page: ''},
      {label: 'Toolbar', page: ''},
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