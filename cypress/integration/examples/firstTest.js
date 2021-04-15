describe('My Test Suite', function () {

    before("Open page", function () {
        cy.visit('https://qa-apps.netlify.app/hero/fix');
    });

    it('TC-001 Verify Title of the Page', function() {
        cy.title().should('eq', 'MLH trial');
    });

    it('TC-002 Header is present', function() {
        cy.get('h3').should('include.text', "My Little Hero")
    });

    it('TC-003 Instruction is present', function() {
        cy.get('p').should('include.text', 'Let\'s create your own HERO! It\'s super easy with our application!');
    });

    it('TC-004 Name field label is present', function() {
        cy.get('label[for=name]').should('include.text', "1. What is your Hero's name?");
    });

    it('TC-005 Name field is present', function() {
        cy.get('#name').should('exist');
    });

    it('TC-006 Gender label are present', function() {
        cy.get('label[for=gender]').should("include.text",'2. Please choose a gender.');
    });

    it('TC-007 Gender radio buttons are present', function() {
        cy.get('.ant-radio-group').should("exist");
    });

    it('TC-008 Age label is present', function() {
        cy.get('label[for=age]').should('include.text', '3. How old is your hero?');
    });

    it('TC-009 Age field is present', function() {
        cy.get('#age').should('exist');
    });

    it('TC-010 Story Type label is present', function() {
        cy.get('label[for=story]').should('include.text','4. What type of story would you like to read?');
    });

    it('TC-011 Story Type dropdown is present', function() {
        cy.get('.ant-select-selector').should('exist');
    });

    it.only('TC-012 Image label is present', function() {
        cy.get('title[for=5. Upload an image (optional)]').should('include.text', '5. Upload an image (optional)');
    });

    it.only('TC-013 Image field is present', function() {
        cy.get('span.ant-upload').should('exist');
    });

    it.only('TC-014 Submit button is present', function() {
        cy.get('.ant-btn').should('exist');
    });

});