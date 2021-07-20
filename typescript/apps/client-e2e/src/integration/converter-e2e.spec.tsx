/// <reference types="Cypress" />

import { API_URL } from '../../../client/src/app/constants';

describe('converter component', () => {
  it('renders correctly', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Currency converter').should('exist');
  });

  it('GET API test', () => {
    cy.request('GET', API_URL).then((res) => {
      expect(res.status).equal(200);
      expect(res.body.quotes).has.property('EUR');
    });
  });
});
