import { IBag } from "../type-bag-controller";
import updateTotalsBag from "./update-totals-bag";

export default function removeProduct(id:number, bag: IBag) {
  const indexToDelete = bag.products.findIndex(product=> product.id === id)
  if(indexToDelete>-1){
    bag.products.splice(indexToDelete, 1)
    updateTotalsBag(bag)
  }
}
