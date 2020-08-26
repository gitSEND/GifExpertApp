
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Probar componente <GifExpertApp></GifExpertApp>', () => {


    test('debe mostrarse correctamente el componente', () => {
        const wrapper = shallow(<GifExpertApp></GifExpertApp>);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar una lista de categorías', () => {
        const categories = ['naruto', 'goku'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}></GifExpertApp>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })



})

