describe('FitPeo Automation Test', () => {

  beforeEach('should navigate through the FitPeo application and perform actions', () => {
  // Step 1: Navigate to FitPeo Homepage

  // Step 2: Navigate to the Revenue Calculator Page in different orientations
    cy.visit('https://www.fitpeo.com');
    cy.get('.MuiToolbar-root > :nth-child(2) > .MuiButtonBase-root').click();
    cy.get('[href="/revenue-calculator"] > .MuiListItemText-root > .MuiTypography-root').click();
  });

  // Step 3: Scroll to the Slider Section
  it('should scroll down to the Slider Section', () => {
    cy.xpath("(//div[@class='MuiBox-root css-j7qwjs'])[1]").scrollIntoView();
  });

  // Step 4: Adjust the Slider to 820
  it('should adjust the Slider to 820', () => {
    cy.get('.MuiSlider-rail').invoke('val', 820).trigger('change').click();
  });

  // Step 5: Update the Text Field to 560 and Validate Slider Value
  // Step 7: Select CPT Codes
  // Step 8: Validate Total Recurring Reimbursement
  it('should update the Text Field to 560', () => {
    cy.get("input[id=':R57alklff9da:']").clear().type('560');

    const cptCodes = ['99091', '99453', '99454', '99474'];
    cptCodes.forEach(code => {
      cy.contains(code).xpath("//p[normalize-space()='CPT-"+code+"']/..//input[@type='checkbox']").click();
    });

    cy.get('.css-m1khva > .MuiTypography-body1').should('have.text', '$110700');
  });
});