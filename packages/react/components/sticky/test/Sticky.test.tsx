// Dependencies
import * as React from "react";

// Testing methods
import { render, screen } from "@testing-library/react";
import Sticky from "../Sticky";

// Component to test

describe("Sticky", () => {
  test("should Sticky keep className with content", () => {
    render(
      <Sticky data-testid={"DEFAULT"} className={"testClassName"}>
        With Content
      </Sticky>
    );
    const sticky = screen.getByTestId("DEFAULT");
    expect(sticky).toHaveClass("testClassName");
  });

  test("should Sticky keep className without content", () => {
    render(<Sticky data-testid={"DEFAULT"} className={"testClassName"} />);
    const sticky = screen.getByTestId("DEFAULT");
    expect(sticky).toHaveClass("testClassName");
  });
});
