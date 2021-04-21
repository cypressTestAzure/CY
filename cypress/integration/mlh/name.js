import sel from '../mlh/selectors'
import exp from '../mlh/expected'
import {name, gender, age} from '../mlh/data'
import {inputValues4} from '../mlh/metods'

describe('Tests for the name field', function () {

    before("Open page", function () {
        cy.visit('');
    });
    describe('Positive test cases', function (){

        it.only('TC-029 Name field accepts one symbol', function () {
            cy.get(sel.name).type(name.default);
            cy.get(sel.name).should("include.text", name.default)
        });

    });

});