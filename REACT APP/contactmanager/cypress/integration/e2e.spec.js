context("Contact Manager E2E test cases",()=>{
    beforeEach(()=>{
        cy.visit('/');
    });

    it('Should check for wrong credentials',()=>{
        cy.get('#username').type('admin');
        cy.get('#password').type('123456');
        cy.get('#btnLogin').click();
        cy.wait(1000);
        cy.get('.alert').should('have.text','Invalid Username or Password');
    });

    it('Should check for correct credentials',()=>{
        cy.get('#username').type('admin');
        cy.get('#password').type('password');
        cy.get('#btnLogin').click();
        cy.wait(1000);
        cy.get('#mainheading').should('have.text', 'Contact List');

    });

    it('Should add new contact', () => {
        cy.get('#username').type('admin');
        cy.get('#password').type('password');
        cy.get('#btnLogin').click();
        cy.visit('/addcontact');
        cy.get('#txtFname').type('Amit');
        cy.get('#txtLname').type('Kumar');
        cy.get('#txtEmail').type('amit@gmail.com');
        cy.get('#txtCity').type('Chennai');
        cy.get('#txtPhone').type('276358926');
        cy.get('#btnAdd').click();
        cy.get('.card-title').contains('Amit Kumar');
    });

}) 