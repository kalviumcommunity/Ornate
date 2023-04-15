import { render, screen, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import { UploadContextProvider } from "../context/UploadContext";
import { isDOMComponent, isElementOfType } from "react-dom/test-utils";

afterEach(() => {
  cleanup();
});

test("should render Home component", () => {
  render(
    <AuthContextProvider>
      <UploadContextProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </UploadContextProvider>
    </AuthContextProvider>
  );

  const home = screen.getByTestId("home");
  expect(home).toBeInTheDocument();
});

test('should match snapshot', () => {
    const tree = renderer.create(
        <AuthContextProvider>
            <UploadContextProvider>
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </UploadContextProvider>
        </AuthContextProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
})

test('should not be an integer', () => {
    render(
        <AuthContextProvider>
            <UploadContextProvider>
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </UploadContextProvider>
        </AuthContextProvider>
    );

    const home = screen.getByTestId("home");
    expect(isNaN(home)).toBe(true); 
})

test('should be a DOM elemnet', () => {
  render(
    <AuthContextProvider>
      <UploadContextProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </UploadContextProvider>
    </AuthContextProvider>
  );

  const home = screen.getByTestId("home");
  expect(isDOMComponent(home)).toBe(true); 
})


test('should not be class component', () => {
  render(
    <AuthContextProvider>
      <UploadContextProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </UploadContextProvider>
    </AuthContextProvider>
  );

  const home = screen.getByTestId("home");
  expect(isElementOfType(home)).toBe(false); 
})


