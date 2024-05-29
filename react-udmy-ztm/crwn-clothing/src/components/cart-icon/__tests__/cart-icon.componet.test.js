import {screen} from "@testing-library/react";
import {renderWithProviders} from "../../../utils/test/test.utils";
import CartIcon from "../cart-icon.component";


describe('Cart Icon tests', () => {
    test('Uses preloaded state to render', () => {
        const intialCartItems = [
            {id:1, name:'Item A', imageUrl: 'test', price: 10, quantity: 2},
            {id:2, name:'Item B', imageUrl: 'test2', price: 10, quantity: 3}
        ];

        renderWithProviders(<CartIcon/>, {
            preloadedState: {
                cart: {
                    cartItems : intialCartItems
                }
            }
        });

        const cartIconElem = screen.getByText('5');
        expect(cartIconElem).toBeInTheDocument();

    });
});
