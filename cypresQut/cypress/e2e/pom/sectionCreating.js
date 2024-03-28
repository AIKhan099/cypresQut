/// <reference types="cypress"/>
import "cypress-xpath";
import  UniqueName from "../pom/uniqueName.js";
// const uniqueName_ =  UniqueName();
class SectionCreator {
    // Elements
    get iframePxpath() { return cy.get('(//iframe)[2]') }
    get manageSection() { return cy.get('h2') }
    
    
    // Actions
     async section(username, password) {
        const getIframeBody = (iframe) => {
            //gets the body of the iframe and wraps it in a cypress understandable object
            cy.wait(3000)
            return cy
            .xpath(iframe, { log: false })
                .its('0.contentDocument.body', { log: false }).should('not.be.empty')
                .then((body) => cy.wrap(body, { log: false }))
        }
        await getIframeBody('(//iframe)[2]').find('h2').click() //replace 'ifr_name' with your Iframe selector
        cy.wait(15000)
        //await getIframeBody('(//iframe)[2]').xpath('//*[@id="root"]/div/div[3]/div[1]/div[2]/button').should('be.visible')
        await getIframeBody('(//iframe)[2]').find('button[class="css-16t9593-view--inlineBlock-baseButton"]').click()
        cy.wait(15000)
        await getIframeBody('(//iframe)[2]').xpath('(//input[@class="css-wlkv2r-textInput"])[2]').type(UniqueName)
       
        await getIframeBody('(//iframe)[2]').xpath('(//span[@class="css-1fqp9az-radioInput__facade"])[1]').click()
     
        await getIframeBody('(//iframe)[2]').xpath('(//span[@class="css-1fqp9az-radioInput__facade"])[4]').click()
      
        await getIframeBody('(//iframe)[2]').xpath('(//span[@class="css-1fqp9az-radioInput__facade"])[7]').click()
       
        await getIframeBody('(//iframe)[2]').xpath('(//span[@class="css-1fqp9az-radioInput__facade"])[9]').click()
        
        await getIframeBody('(//iframe)[2]').xpath('(//button[@class="css-16t9593-view--inlineBlock-baseButton"])[2]').click()
        
        await getIframeBody('(//iframe)[2]').xpath('//input[@class="css-1ggy75o-numberInput_input"]').type('40')

        await getIframeBody('(//iframe)[2]').xpath('(//button[@class="css-16t9593-view--inlineBlock-baseButton"])[2]').click()

        await getIframeBody('(//iframe)[2]').xpath('(//button[@class="css-16t9593-view--inlineBlock-baseButton"])[2]').click()

        await getIframeBody('(//iframe)[2]').xpath('//span[contains(text(),"Allocating students...")]', { timeout: 10000 }).should('exist');

        
        
        
        
    }
}
export default SectionCreator;