import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading2", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { name: "HOME" });
    expect(heading).toBeInTheDocument();
  });
});
