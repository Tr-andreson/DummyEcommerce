import HomePage from "@/pages/HomePage"
import { render, screen } from "@testing-library/react"


describe("Home Page testing", () => {
  test("Home Page is Present", () => {
    render(<HomePage />)

    const heading = screen.getByRole("heading")
    // const heading = screen.getByRole("")
    expect(heading).toBeInTheDocument();
  })
})
