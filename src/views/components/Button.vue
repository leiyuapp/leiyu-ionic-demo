<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons>
                    <ion-back-button></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
            <ion-title>Button</ion-title>
        </ion-header>
        <ion-content>
            <div>
                SMALL SIZE
            </div>
            <div>
                <ion-button size="small">Default</ion-button>
                <ion-button href="#">Anchor</ion-button>

                <ion-button color="primary">Primary</ion-button>
                <ion-button color="secondary">Secondary</ion-button>
                <ion-button color="tertiary">Tertiary</ion-button>
                <ion-button color="success">Success</ion-button>
                <ion-button color="warning">Warning</ion-button>
                <ion-button color="danger">Danger</ion-button>
                <ion-button color="light">Light</ion-button>
                <ion-button color="medium">Medium</ion-button>
                <ion-button color="dark">Dark</ion-button>

                <ion-button expand="full">Full Button</ion-button>
                <ion-button expand="block">Block Button</ion-button>

                <ion-button shape="round">Round Button</ion-button>

                <ion-button expand="full" fill="outline">Outline + Full</ion-button>
                <ion-button expand="block" fill="outline">Outline + Block</ion-button>
                <ion-button shape="round" fill="outline">Outline + Round</ion-button>

                <ion-button>
                    <ion-icon slot="start" :icon="star"></ion-icon>
                    Left Icon
                </ion-button>

                <ion-button>
                    Right Icon
                    <ion-icon slot="end" :icon="star"></ion-icon>
                </ion-button>

                <ion-button>
                    <ion-icon slot="icon-only" :icon="star"></ion-icon>
                </ion-button>

                <!-- Sizes -->
                <ion-button size="large">Large</ion-button>
                <ion-button>Default</ion-button>
                <ion-button size="small">Small</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import {
        IonBackButton, IonButton,
        IonButtons, IonContent,
        IonHeader, IonIcon,
        IonPage, IonTitle, IonToolbar,

    } from "@ionic/vue";
    import { star } from 'ionicons/icons'
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
            IonIcon
        },
        setup() {
            return {
                star
            }
        }
    })
</script>