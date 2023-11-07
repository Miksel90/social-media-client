describe("Logout", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("should allow a user to logout", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type("bulba@noroff.no");
    cy.get("#loginPassword").type("goldsilver");
    cy.get("button[type=submit]").contains("Login").click();

    cy.get("button[data-auth='logout']").click();
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});
