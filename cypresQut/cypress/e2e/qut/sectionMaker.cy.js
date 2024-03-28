///<reference types="cypress"/>
import example from "../../fixtures/example.json";
describe("",()=>{
    it("",()=>{
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charac_comp =""
        for(let i=0; i<example.courseId.length; i++)
        {
            for(let j=0; j<example.cupaToolId.length; j++)
            {
                let completeUrl = example.baseUrl + "/" + example.courseId[i] + "/" + example.cupaToolId[j]
                    cy.log(completeUrl)
                    for(let k=0;k<10;k++)
                    {
                        let ind = Math.floor(Math.random()*characters.length);
                        charac_comp += characters.charAt(ind)
                    
                    }
                    cy.log(`Unique name is ${charac_comp}`)
                    charac_comp =""
            }
           
        }
        
    })
})