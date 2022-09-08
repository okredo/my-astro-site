describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays the resources text", () => {
    cy.get("Weather").contains("San Francisco, US");
  });
  // it("renders the image", () => {
  //   cy.get("img")
  //     .should("be.visible")
  //     .and(($img) => {
  //       expect($img[0].naturalWidth).to.be.greaterThan(0);
  //     });
  // });
});
