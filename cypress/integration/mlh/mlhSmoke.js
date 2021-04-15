import sel from '../mlh/selectors'
import exp from '../mlh/expected'
import {name, gender, age} from '../mlh/data'
import {inputValues4} from '../mlh/metods'
describe('My Test Suite', function () {

    before("Open page", function () {
        cy.visit('');
    });
    describe('Elements exists', function (){

        it('TC-001 Verify Title of the Page', function() {
            cy.title().should('eq', exp.title);
        });

        it('TC-002 Header is present', function() {
            cy.get(sel.header).should("exist")
        });

        it('TC-003 Instruction is present', function() {
            cy.get(sel.instruction).should("exist");
        });

        it('TC-004 Name field label is present', function() {
            cy.get(sel.nameLabel).should("exist");
        });

        it('TC-005 Name field is present', function() {
            cy.get(sel.name).should('exist');
        });

        it('TC-006 Gender label are present', function() {
            cy.get(sel.genderLabel).should("exist");
        });

        it('TC-007 Gender radio buttons are present', function() {
            cy.get(sel.radioButtons).should("exist");
        });

        it('TC-008 Age label is present', function() {
            cy.get(sel.ageLabel).should("exist");
        });

        it('TC-009 Age field is present', function() {
            cy.get(sel.age).should('exist');
        });

        it('TC-010 Story Type label is present', function() {
            cy.get(sel.storyLabel).should("exist");
        });

        it('TC-011 Story Type dropdown is present', function() {
            cy.get(sel.storyType).should('exist');
        });

        it('TC-012 Image label is present', function() {
            cy.get(sel.imageLabel).should("exist");
        });

        it('TC-013 Image field is present', function() {
            cy.get(sel.image).should('exist');
        });

        it('TC-014 Submit button is present', function() {
            cy.get(sel.submit).should('exist');
        });
    });

    describe('Labels are correct', function () {

        it('TC-015 Header = My Little Hero', function () {
            cy.get(sel.header).should("include.text", exp.header)
        });

        it('TC-016 Instruction = Let\'s create your own HERO! It\'s super easy with our application! ', function () {
            cy.get(sel.instruction).should("include.text", exp.instruction)
        });

        it('TC-017 Name label = 1. What is your Hero\'s name?', function () {
            cy.get(sel.nameLabel).should("include.text", exp.nameLabel)
        });

        it('TC-018 Gender label = 2. Please choose a gender.', function () {
            cy.get(sel.genderLabel).should("include.text", exp.genderLabel)
        });

        it('TC-019 Gender radio button 1 label = he', function () {
            cy.get(sel.radioButtonsLabels).should("include.text", exp.heLabel)
        });

        it('TC-020 Gender radio button 2 label = she', function () {
            cy.get(sel.radioButtonsLabels).should("include.text", exp.sheLabel)
        });

        it('TC-021 Gender radio button 3 label = it', function () {
            cy.get(sel.radioButtonsLabels).should("include.text", exp.itLabel)
        });

        it('TC-022 Age label = 3. How old is your hero?', function () {
            cy.get(sel.ageLabel).should("include.text", exp.ageLabel)
        });

        it('TC-023 Story Type label = 4. Type of the story', function () {
            cy.get(sel.storyLabel).should("include.text", exp.storyLabel)
        })

        it('TC-024 Image label = 5. Upload an image (optional)', function () {
            cy.get(sel.imageLabel).should("include.text", exp.imageLabel)
        });

        it('TC-024 Submit button label = Create!', function () {
            cy.get(sel.submit).should("include.text", exp.submitLabel)
        });
    });

    describe('Required fields & Story created', function () {

        it('TC-026 Submit button is enabled after fields 1-4 are filled in with valid values', function () {
            cy.get(sel.name).type(name.default);
            cy.get(sel.radioSelected).first().check();
            cy.get(sel.age).type(age.default);
            cy.get(sel.storyType).click();
            cy.get(sel.comedy).trigger('mousemove').click();
            cy.get(sel.submit).eq(0).should('not.be.disabled');
        });

        it('TC-027 User is redirected to the story page', function () {
           cy.reload()
            cy.get(sel.name).type(name.default);
            cy.get(sel.radioSelected).first().check();
            cy.get(sel.age).type(age.default);
            cy.get(sel.storyType).click();
            cy.get(sel.comedy).trigger('mousemove').click();
            cy.get(sel.submit).click();
            cy.get(sel.tryAgainBtn).eq(0).should('not.be.disabled');
        });
    });
});