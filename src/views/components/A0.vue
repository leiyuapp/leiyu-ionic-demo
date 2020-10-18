<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons>
                    <ion-back-button></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
            <ion-title></ion-title>
        </ion-header>
        <ion-content>
        </ion-content>
    </ion-page>
</template>


<script lang="ts">
    import {
        IonBackButton,
        IonButtons, IonContent,
        IonHeader,
        IonPage, IonTitle, IonToolbar,

    } from "@ionic/vue";
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'Button',
        components: {
            IonPage,
            IonHeader,
            IonToolbar,
            IonButtons,
            IonBackButton,
            IonTitle,
            IonContent,
        },
        setup() {
            return {
            }
        }
    })
</script>