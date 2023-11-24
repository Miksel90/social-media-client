const correctEmail = "bulba@noroff.no";
const correctPassword = "goldsilver";

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
    cy.get("#loginEmail").type(correctEmail);
    cy.get("#loginPassword").type(correctPassword);
    cy.get("button[type=submit]").contains("Login").click();

    cy.then(() => expect(window.localStorage.getItem("token")).not.to.be.null);
  });
});
