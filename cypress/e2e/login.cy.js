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
    cy.wait(3000);
    cy.then(
      () => expect(window.localStorage.getItem("profile")).to.not.be.null
    );
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.url().should("include", "profile");
  });
});
