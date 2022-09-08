describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays the resources text", () => {
    cy.get("h2").contains("San Francisco");
  });
});
