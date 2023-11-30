import type { CartItem } from '../types'
import { defineStore } from 'pinia'

// Creating a Pinia store for managing shopping carts
export const useCartsStore = defineStore('carts', {
  // Initial state setup
  state: () => ({
    items: <CartItem[]>[],
  }),
  // Actions to modify the state
  actions: {
    addToCart(input: CartItem) {
      // Check if the item with the same ticket slug already exists
      const exist = this.items.find((i) => i.ticket.slug === input.ticket.slug)
      if (!exist) {
        // If the item doesn't exist, add it to the shopping cart
        this.items.push(input)
        return true
      }
      return false
    },
    removeFromCart(slug: string) {
      // Find the index of the current item
      const index = this.items.findIndex((i) => i.ticket.slug === slug)
      if (index !== -1) {
        // If the item exists, remove it from the shopping cart
        this.items.splice(index, 1)
        return true
      }
      return false
    }
  },
})
