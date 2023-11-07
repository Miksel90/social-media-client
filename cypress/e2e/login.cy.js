describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("will login", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(1500);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("bulba@noroff.no");
    cy.get("input[type='password']:visible").should("exist").type("goldsilver");
    cy.get(".btn-success:visible").click();
    cy.window({ log: false }).then((win) => {
      cy.wrap(null, { timeout: 3000 }).should(() => {
        const profile = win.localStorage.getItem("profile");
        const token = win.localStorage.getItem("token");
        expect(profile).to.not.be.null;
        expect(token).to.not.be.null;
      });
    });

    cy.url().should("include", "profile");
  });
});
