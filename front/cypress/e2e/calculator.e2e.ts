import { NO_RETRY } from "../support/testing.consts";
import { dataCy } from "../support/utils";

describe('Calculator tests', NO_RETRY, () => {
    it('Should do 1 + 1 = 2', () => {


        cy.visit('calc').then(() => {

            cy.get(dataCy('num1')).click();
            cy.get(dataCy('plus')).click();
            cy.get(dataCy('num1')).click();
            cy.get(dataCy('equals')).click();

            // cy.get(dataCy('result')).should('have.text', '2')

            cy.get(dataCy('result')).invoke('text').then((text) => {
                const trimmedText = text.trim();
                expect(trimmedText).to.equal('2');
            });
        });

    });
})