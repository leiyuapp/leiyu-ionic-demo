<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/" text=""></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-button expand="block" @click="presentActionSheet">Action Sheet</ion-button>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
    import {
        actionSheetController,
        IonButton,
        IonPage,
        IonHeader,
        IonContent,
        IonToolbar,
        IonButtons,
        IonBackButton
    } from "@ionic/vue";
import { trash, share, heart, close, caretForwardCircle } from 'ionicons/icons'
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ActionSheet',
    components: {
        IonButton,
        IonPage,
        IonHeader,
        IonContent,
        IonToolbar,
        IonButtons,
        IonBackButton
    },
    setup() {
        const presentActionSheet = async () => {
            const actionSheet = await actionSheetController.create({
                header: 'Albums',
                cssClass: 'my-custom-class',
                buttons: [
                    {
                        text: 'Delete',
                        role: 'destructive',
                        icon: trash,
                        handler: () => {
                            console.log('Delete clicked')
                        }
                    },
                    {
                        text: 'Share',
                        icon: share,
                        handler: () => {
                            console.log('Share clicked')
                        }
                    },
                    {
                        text: 'Play (open modal)',
                        icon: caretForwardCircle,
                        handler: () => {
                            console.log('Play clicked')
                        }
                    },
                    {
                        text: 'Favorite',
                        icon: heart,
                        handler: () => {
                            console.log('Favorite clicked')
                        }
                    },
                    {
                        text: 'Cancel',
                        icon: close,
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked')
                        }
                    }
                ]
            });
            return actionSheet.present();
        }

        return {
            presentActionSheet
        }
    }
})
</script>