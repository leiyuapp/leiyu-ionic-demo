<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons>
                    <ion-back-button></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
            <ion-title>Badge</ion-title>
        </ion-header>
        <ion-content>
            <ion-badge>99</ion-badge>
            <ion-badge color="primary">11</ion-badge>
            <ion-badge color="secondary">22</ion-badge>
            <ion-badge color="tertiary">33</ion-badge>
            <ion-badge color="success">44</ion-badge>
            <ion-badge color="warning">55</ion-badge>
            <ion-badge color="danger">66</ion-badge>
            <ion-badge color="light">77</ion-badge>
            <ion-badge color="medium">88</ion-badge>
            <ion-badge color="dark">99</ion-badge>

            <ion-item>
                <ion-badge slot="start">11</ion-badge>
                <ion-label>My Item</ion-label>
                <ion-badge slot="end">22</ion-badge>
            </ion-item>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
    import {
        IonPage,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonTitle,
        IonContent,
        IonBadge, IonItem, IonLabel
    } from "@ionic/vue";
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'Badge',
        components: {
            IonPage,
            IonHeader,
            IonToolbar,
            IonButtons,
            IonBackButton,
            IonTitle,
            IonContent,
            IonBadge,
            IonItem,
            IonLabel
        }
    })
</script>