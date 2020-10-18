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
            <ion-checkbox></ion-checkbox>
            <!-- Disabled Checkbox -->
            <ion-checkbox disabled="true"></ion-checkbox>

            <!-- Checked Checkbox -->
            <ion-checkbox checked="true"></ion-checkbox>

            <!-- Checkbox Colors -->
            <ion-checkbox color="primary"></ion-checkbox>
            <ion-checkbox color="secondary"></ion-checkbox>
            <ion-checkbox color="danger"></ion-checkbox>
            <ion-checkbox color="light"></ion-checkbox>
            <ion-checkbox color="dark"></ion-checkbox>

            <ion-list>
                <ion-item v-for="entry in form" :key="entry.val">
                    <ion-label>{{entry.val}}</ion-label>
                    <ion-checkbox slot="end"
                    @input="entry.checked = $event.target.value"
                    :value="entry.isChecked"></ion-checkbox>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>


<script lang="ts">
    import {
        IonBackButton,
        IonButtons, IonCheckbox, IonContent,
        IonHeader, IonItem, IonLabel, IonList,
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
            IonCheckbox,
            IonList,
            IonItem,
            IonLabel
        },
        setup() {
            const form = [
                { val: 'Pepperoni', isChecked: true },
                { val: 'Sausage', isChecked: false },
                { val: 'Mushroom', isChecked: false }
            ]
            return {
                form
            }
        }
    })
</script>