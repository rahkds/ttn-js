import {screen} from "@testing-library/react";
import CartDropDown from "../cart-dropdown.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

describe('Card Dropdown test', () => {
    test('it should show empty cart when there is no item added to cart', () => {
        const intialCartItems = [
            // {id:1, name:'Item A', imageUrl: 'test', price: 10, quantity: 2},
            // {id:2, name:'Item B', imageUrl: 'test2', price: 10, quantity: 3}
        ];

        renderWithProviders(<CartDropDown/>, {
            preloadedState : {
                cart : {
                    cartItems : intialCartItems
                }
            }
        });

        const emptyMessageElement = screen.getByText(/your cart is empty/i);
        expect(emptyMessageElement).toBeInTheDocument();
    });

    test('it should not show empty cart when there is any item added to cart', () => {
        const intialCartItems = [
            {id:1, name:'Item A', imageUrl: 'test', price: 10, quantity: 55},
            // {id:2, name:'Item B', imageUrl: 'test2', price: 10, quantity: 3}
        ];

        renderWithProviders(<CartDropDown/>, {
            preloadedState : {
                cart : {
                    cartItems : intialCartItems
                }
            }
        });

        const emptyMessageElement = screen.queryByText(/your cart is empty/i);
        expect(emptyMessageElement).toBeNull();


        const quantityElement = screen.getByText(/55/i);
        expect(quantityElement).toBeInTheDocument();

    });    
});
