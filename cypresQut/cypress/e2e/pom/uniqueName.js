///<reference types="cypress"/>
import example from "../../fixtures/example.json";
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let charac_comp =""
const UniqueName = ()=>{
   
                    
                    for(let k=0;k<10;k++)
                    {
                        let ind = Math.floor(Math.random()*characters.length);
                        charac_comp += characters.charAt(ind)
                    
                    }
                    
                   
                return charac_comp
}

export default UniqueName()