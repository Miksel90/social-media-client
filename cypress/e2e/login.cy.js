describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("should allow a valid user to log in", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type("bulba@noroff.no");
    cy.get("#loginPassword").type("goldsilver");
    cy.get("button[type=submit]").contains("Login").click();
  });
});

