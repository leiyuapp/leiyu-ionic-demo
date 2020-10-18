<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons>
                    <ion-back-button></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
            <ion-title>
                Alert
            </ion-title>
        </ion-header>
        <ion-content>
            <ion-button expand="block" @click="presetAlert">Open Alert</ion-button>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import {
        IonBackButton,
        IonButton,
        IonButtons,
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        alertController
    } from "@ionic/vue";
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Alert',
        components: {
            IonPage,
            IonHeader,
            IonToolbar,
            IonButtons,
            IonBackButton,
            IonTitle,
            IonContent,
            IonButton
        },
        setup() {
            const presetAlert = async () => {
                const alert = await alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Alert',
                    subHeader: 'Subtitle',
                    message: 'This is an alert message',
                    buttons: ['OK']
                })
                return alert.present();
            }

            return {
                presetAlert
            }
        }
    })
</script>