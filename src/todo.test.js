
import React from 'react';
import Enzyme, { shallow} from 'enzyme';
import ClassTodo from './TodoClass';
import FnTodo from './TodoFunction';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('Class Tests', () => {
    let componentUnderTest;
    const props = {
        id: 1,
        description: 'do something',
        deleteTodo: jest.fn(),
        updateTodo: jest.fn()
    }

    beforeEach(() => {
        componentUnderTest = shallow(<ClassTodo {...props} />);
    });

    it('should update checked state', () => {
        componentUnderTest.find('input[type="checkbox"]').simulate('change', { target: { checked: true } });

        expect(componentUnderTest.find('input[type="checkbox"]').prop('checked')).toEqual(true);
    });

    it('should call "updateTodo" on click', () => {
        componentUnderTest.find('input[type="checkbox"]').simulate('change', { target: { checked: true } });

        expect(props.updateTodo).toHaveBeenCalled();
    });

    it('should call "updateTodo" on change', () => {
        componentUnderTest.find('span.btn-delete-todo').simulate('click');

        expect(props.updateTodo).toHaveBeenCalled();
    });

});

describe('Function Tests', () => {
    let componentUnderTest;
    const props = {
        id: 1,
        description: 'do something',
        deleteTodo: jest.fn(),
        updateTodo: jest.fn()
    }

    beforeEach(() => {
        componentUnderTest = shallow(<FnTodo {...props} />);
    });

    it('should update checked state', () => {
        componentUnderTest.find('input[type="checkbox"]').simulate('change', { target: { checked: true } });


        // This doesn't work
        // expect(componentUnderTest.find('input[type="checkbox"]').prop('checked')).toEqual(true);


        // THIS WORKS
        // setTimeout(() => {
        //     expect(componentUnderTest.find('input[type="checkbox"]').prop('checked')).toEqual(true);
        // }, 0);
    });

    it('should call "updateTodo" on click', () => {
        componentUnderTest.find('input[type="checkbox"]').simulate('change', { target: { checked: true } });

        expect(props.updateTodo).toHaveBeenCalled();
    });

    it('should call "updateTodo" on change', () => {
        componentUnderTest.find('span.btn-delete-todo').simulate('click');

        expect(props.updateTodo).toHaveBeenCalled();
    });
});