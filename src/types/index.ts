// Definition of the Ticket interface representing a ticket item
export interface Ticket {
  name: string
  slug: string
  description: string
  isVip: boolean
  count: number
  price: number
}

// Definition of the CartItem interface representing an item in the shopping cart
export interface CartItem {
  ticket: Ticket
  quantity: number
}
