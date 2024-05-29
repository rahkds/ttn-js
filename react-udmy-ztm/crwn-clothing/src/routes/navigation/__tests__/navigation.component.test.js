import {fireEvent, screen} from "@testing-library/react";
import Navigation  from "../navigation.component";
import * as reactRedux from "react-redux";
import { renderWithProviders } from "../../../utils/test/test.utils";
import { signOutStart } from "../../../store/user/user.action";

jest.mock('react-redux', () => {
    return {
      __esModule: true,
      ...jest.requireActual('react-redux')
    };
  });

describe('Navigation tests', () => {
    test('it should reder a sign in link if there is no current user', () => {
        renderWithProviders(<Navigation/>, {
            preloadedState : {
                user: {
                    currentUser: null
                }
            }
        });

        const sigInLinkElement = screen.getByText(/sign in/i);
        expect(sigInLinkElement).toBeInTheDocument();
    });


    test('it should render a sign out and not sign in link if there is current user', () => {
        renderWithProviders(<Navigation/>, {
            preloadedState : {
                user : {
                    currentUser : {}
                }
            }
        });

        const signOutLinkElement = screen.getByText(/sign out/i);
        expect(signOutLinkElement).toBeInTheDocument();
        
        const signInLinkElement = screen.queryByText(/sign in/i);
        expect(signInLinkElement).toBeNull();
    });

    test('it should not a render dropdown if isCartOpen is false', () => {
        renderWithProviders(<Navigation/>, {
            preloadedState : {
                cart : {
                    isCartOpen : false,
                    cartItems : []
                }
            }
        });      
        
        const emptyMessageElement = screen.queryByText(/your cart is empty/i);
        expect(emptyMessageElement).toBeNull();

    });

    test('it should a render dropdown if isCartOpen is true', () => {
        renderWithProviders(<Navigation/>, {
            preloadedState : {
                cart : {
                    isCartOpen : true,
                    cartItems : []
                }
            }
        });      
        
        const emptyMessageElement = screen.getByText(/your cart is empty/i);
        expect(emptyMessageElement).toBeInTheDocument();
    });

    test('it should dispatch signOutStart action when clicking on signout link', async()=> {
        const mockDispatch  = jest.fn();
        jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);

        renderWithProviders(<Navigation/>, {
            preloadedState: {
                user : {
                    currentUser : {}
                }
            }
        });

        const signOutLinkElement = screen.getByText(/sign out/i);
        expect(signOutLinkElement).toBeInTheDocument();

        fireEvent.click(signOutLinkElement);

        expect(mockDispatch).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith(signOutStart());

        mockDispatch.mockClear();
    })
});