<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons>
                    <ion-back-button></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
            <ion-title>Card</ion-title>
        </ion-header>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                    <ion-card-title>Card Title</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    Keep close to Nature's heart... and break clear away, once in awhile,
                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </ion-card-content>
            </ion-card>

            <ion-card>
                <ion-item>
                    <ion-icon :icon="pin" slot="start"></ion-icon>
                    <ion-label>ion-item in a card, icon left, button right</ion-label>
                    <ion-button fill="outline" slot="end">View</ion-button>
                </ion-item>

                <ion-card-content>
                    This is content, without any paragraph or header tags,
                    within an ion-card-content element.
                </ion-card-content>
            </ion-card>

            <ion-card>
                <ion-item class="ion-activated">
                    <ion-icon :icon="wifi" slot="start"></ion-icon>
                    <ion-label>Card Link Item 1 activated</ion-label>
                </ion-item>

                <ion-item>
                    <ion-icon :icon="wine" slot="start"></ion-icon>
                    <ion-label>Card Link Item 2</ion-label>
                </ion-item>

                <ion-item class="ion-activated">
                    <ion-icon :icon="warning" slot="start"></ion-icon>
                    <ion-label>Card Button Item 1 activated</ion-label>
                </ion-item>

                <ion-item>
                    <ion-icon :icon="walk" slot="start"></ion-icon>
                    <ion-label>Card Button Item 2</ion-label>
                </ion-item>
            </ion-card>
        </ion-content>
    </ion-page>
</template>


<script lang="ts">
    import {
        IonBackButton, IonButton,
        IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent,
        IonHeader, IonIcon, IonItem, IonLabel,
        IonPage, IonTitle, IonToolbar,

    } from "@ionic/vue";
    import { pin, wifi, wine, warning, walk } from 'ionicons/icons'
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
            IonButton,
            IonIcon,
            IonCard,
            IonCardHeader,
            IonCardSubtitle,
            IonCardTitle,
            IonCardContent,
            IonItem,
            IonLabel
        },
        setup() {
            return {
                pin, wifi, wine, warning, walk
            }
        }
    })
</script>