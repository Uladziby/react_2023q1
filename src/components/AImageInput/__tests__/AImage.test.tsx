/** @format */
import { AImageInput } from "../AImageInput";
import { render, screen, fireEvent } from "@testing-library/react";

describe("AImageInput", () => {
  const onChangeMock = jest.fn();

  afterEach(() => {
    onChangeMock.mockReset();
  });

  it("renders the component with the correct title", () => {
    render(<AImageInput name="test" value="test" onChange={onChangeMock} />);

    expect(screen.getByText("Choose a profile picture:")).toBeInTheDocument();
  });

  it("displays the selected image", () => {
    render(<AImageInput name="test" value="test" onChange={onChangeMock} />);

    const file = new File(["test image file"], "test.png", {
      type: "image/png",
    });
    fireEvent.change(screen.getByText("Choose a profile picture:"), {
      target: { files: [file] },
    });

    expect(screen.getByAltText("test")).toBeInTheDocument();
  });
});
