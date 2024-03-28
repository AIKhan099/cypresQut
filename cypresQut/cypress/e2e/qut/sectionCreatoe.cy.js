/// <reference types="cypress"/>
import Login from "../pom/login.js";
import example from "../../fixtures/example.json";
import SectionCreator from "../pom/sectionCreating.js";
const login = new Login();
const sectionCreator = new SectionCreator();


const getIframeBody = (iframe) => {
    //gets the body of the iframe and wraps it in a cypress understandable object
    return cy
	.get(iframe, { log: false })
	    .its('0.contentDocument.body', { log: false }).should('not.be.empty')
	    .then((body) => cy.wrap(body, { log: false }))
}

describe("Login", async ()=>{
    it("Login to the application", async()=>{
        cy.visit("https://qut-uat.instructure.com/")
        login.login(example.username,example.password)
        
    })

    it.only(`going to the course ${example.courseId} and cupa tool id based course ${example.cupaToolId} and  creating section`,async ()=>{
        await cy.visit("https://qut-uat.instructure.com/")
        await login.login(example.username,example.password)
        await cy.get('#global_nav_courses_link').click();
        let completeUrl = await "https://qut-uat.instructure.com/" + "courses/"+ example.courseId + "/" +"external_tools/"+ example.cupaToolId
        cy.visit(completeUrl)
        //cy.xpath("//h1").should("be.visible")
        cy.wait(30000)
        await sectionCreator.section()
            // const getIframeBody = (iframe) => {
            //     //gets the body of the iframe and wraps it in a cypress understandable object
            //     cy.wait(3000)
            //     return cy
            //     .xpath(iframe, { log: false })
            //         .its('0.contentDocument.body', { log: false }).should('not.be.empty')
            //         .then((body) => cy.wrap(body, { log: false }))
            // }
            // await getIframeBody('(//iframe)[2]').find('h2').click() //replace 'ifr_name' with your Iframe selector
            
    })
})
