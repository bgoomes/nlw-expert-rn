import { ProductProps } from "@/utils/data/products"
import { create } from "zustand"

export type ProductCartProps = ProductProps & {
    quantity: number
}

type StateProps = {
    product: ProductCartProps[],
    add: (product: ProductProps) => void
}

export const useCartStore = create<StateProps>((set) => ({
    product: [],

    add: () => {},
}))

