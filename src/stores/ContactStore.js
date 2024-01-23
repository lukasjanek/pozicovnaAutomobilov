import { defineStore } from "pinia";
import contact from './Contact.json'


export const useContactStore = defineStore('ContactStore', {
    state: () => ({
         contact: contact
        })
})
