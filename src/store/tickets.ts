import { defineStore } from 'pinia'
import type { Ticket } from '../types'
import { tickets } from '../constants'
import { useCartsStore } from './cart'


// Creating a Pinia store for managing tickets
export const useTicketsStore = defineStore('tickets', {
  // Initial state setup
  state: () => ({
    tickets: <Ticket[]>[
      ...tickets,
    ],
  }),
  // Actions to modify the state
  actions: {
    addTicket(input: Ticket) {
      // Check if the ticket already exists
      const index = this.tickets.findIndex((i) => i.slug === input.slug)
      if (index !== -1) {
        return false // if exists, return false
      }
      // Add the new ticket to the store
      this.tickets.push(input)
      return true
    },
    async removeTicket(slug: string) {
      // Find the index of the current ticket
      const index = this.tickets.findIndex((i) => i.slug === slug)
      if (index !== -1) {
        // If the ticket exists, remove it from the cart & store
        const { removeFromCart } = useCartsStore()
        this.tickets.splice(index, 1)
        removeFromCart(slug)
        return true
      }
      return false // Ticket not found
    },
  },
  // Enabling persistence for the store
  persist: true,
})
