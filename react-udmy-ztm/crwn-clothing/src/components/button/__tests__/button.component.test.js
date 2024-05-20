import {screen, render} from "@testing-library/react";
import Button, {BUTTON_TYPE_CLASSES} from '../button.component';
describe("button tests", () => {
    test('should render base button when nothing is passed', () => {
        render(<Button>Test</Button>);
        const buttonElement = screen.getByText(/test/i);
        // console.log(buttonElement);
        expect(buttonElement).toHaveStyle('background-color: white');

        const buttonElement2 = screen.getByRole('button');
        expect(buttonElement2).toHaveStyle('background-color: white');        

    });


    test('should render google button when passed google button type', () => {
        render(<Button buttonType={BUTTON_TYPE_CLASSES.google}/>);

        const buttonElem = screen.getByRole('button');
        expect(buttonElem).toHaveStyle('background-color: #357ae8');
    })

    test('should render inverted button when passed invert button type', () => {
        render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted}/>);

        const buttonElem = screen.getByRole('button');
        expect(buttonElem).toHaveStyle('background-color: black');
    })

    test('should be disabled if isLoading is true', () => {
        render(<Button isLoading={true}/>);
        
        const buttonElem = screen.getByRole('button');
        expect(buttonElem).toBeDisabled();
    });

});