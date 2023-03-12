///<reference types ="cypress"/>
import Userlogin from "../fixtures/Userlogin.json"



describe('Your Store website', () => {
  it('Home', () => {
    cy.visit('http://opencart.abstracta.us/index.php?route=common/home')
    cy.get('.caret').click()


  })
  const uuid = () => Cypress._.random(0, 1e6)      /// Generate a random firstname , lastname and email 
const id = uuid()
const firstname = `pin${id}`
const lastname = `stam${id}`
const email = `${id}sim@gmail.com`

  it.only('Registration', () => {                     ///Register the user
    cy.visit('https://opencart.abstracta.us/index.php?route=account/register')
  
    cy.get('#input-firstname').should ('be.visible').type(firstname)
    cy.get('#input-lastname').should ('be.visible').type(lastname)
    cy.get('#input-email').should ('be.visible').type(email)
    cy.get('#input-telephone').should ('be.visible').type('03333400990')
    cy.get('#input-password').type(Userlogin.password)
    cy.get('#input-confirm').type(Userlogin.password)
    cy.get('[type="checkbox"]').should ('be.visible').click()
   cy.window().document().then(function (doc) 
    {
      doc.addEventListener('click', () => {
      setTimeout(function () { doc.location.reload() }, 5000) 
     
    })
   }) 
     cy.get('input[value="Continue"]').should ('be.visible').click();
      cy.get('.caret').click()
    cy.get('.dropdown-menu > :nth-child(5) > a').click()
    
   
  })
  it.skip('login the page', () => {            /// Login the user

    cy.AccessTheLoginPage(email,Userlogin.password)
    
  
   })

})
