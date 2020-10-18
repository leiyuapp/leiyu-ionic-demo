<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons>
                    <ion-back-button></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
            <ion-title>Chip</ion-title>
        </ion-header>
        <ion-content>
            <ion-chip>
                <ion-label>Default</ion-label>
            </ion-chip>

            <ion-chip>
                <ion-label color="secondary">Secondary Label</ion-label>
            </ion-chip>

            <ion-chip color="secondary">
                <ion-label color="dark">Secondary w/ Dark label</ion-label>
            </ion-chip>

            <ion-chip>
                <ion-icon :icon="pin"></ion-icon>
                <ion-label>Default</ion-label>
            </ion-chip>

            <ion-chip>
                <ion-icon :icon="heart" color="dark"></ion-icon>
                <ion-label>Default</ion-label>
            </ion-chip>

            <ion-chip>
                <ion-label>Button Chip</ion-label>
                <ion-icon :icon="closeCircle"></ion-icon>
            </ion-chip>

            <ion-chip>
                <ion-icon :icon="pin" color="primary"></ion-icon>
                <ion-label>Icon Chip</ion-label>
                <ion-icon :icon="close"></ion-icon>
            </ion-chip>

            <ion-chip>
                <ion-avatar>
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
                </ion-avatar>
                <ion-label>Avatar Chip</ion-label>
                <ion-icon :icon="closeCircle"></ion-icon>
            </ion-chip>
        </ion-content>
    </ion-page>
</template>


<script lang="ts">
    import {
        IonAvatar,
        IonBackButton,
        IonButtons, IonChip, IonContent,
        IonHeader, IonIcon, IonLabel,
        IonPage, IonTitle, IonToolbar,

    } from "@ionic/vue";
    import { defineComponent } from 'vue';
    import { pin, heart, closeCircle } from 'ionicons/icons';
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
            IonChip,
            IonLabel,
            IonIcon,
            IonAvatar
        },
        setup() {
            return {
                pin, heart, closeCircle
            }
        }
    })
</script>