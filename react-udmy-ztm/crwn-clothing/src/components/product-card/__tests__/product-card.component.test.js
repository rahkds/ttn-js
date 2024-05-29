import {render, fireEvent, screen} from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import ProductCard from "../product-card.component";

describe('Product Card tests', () => {
   test('it should add the product when card button is clicked', async() => {
    const mockProduct = {
        id : 1,
        imageUrl : 'test',
        name : 'Item A',
        price : 10
    };

    const {store} = renderWithProviders(<ProductCard product={mockProduct}/>, {
        preloadedState : {
            cart : {
                cartItems : []
            }
        }
    });

    const addToCardButtonElement = screen.getByText(/add to card/i);
    fireEvent.click(addToCardButtonElement);

    expect(store.getState().cart.cartItems.length).toBe(1);

   });
});