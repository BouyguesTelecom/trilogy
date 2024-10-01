import { render } from "@testing-library/react-native";

import * as React from "react";
import {
  StatusState,
  getColorStyle,
  TrilogyColor,
  getStatusStyle,
} from "../../../objects";
import Switch from "../Switch.native";

describe("Switch component", () => {
  const colors = [
    StatusState.ERROR,
    StatusState.INFO,
    StatusState.SUCCESS,
    StatusState.WARNING,
  ];

  test("Should return component", async () => {
    const { getByTestId } = render(<Switch />);
    expect(getByTestId("switch-id").props.value).toBeFalsy();
    expect(getByTestId("switch-id").props.disabled).toBe(undefined);
  });

  test("Should return component checked", async () => {
    const { getByTestId } = render(<Switch checked />);
    expect(getByTestId("switch-id").props.value).toBeTruthy();
    expect(getByTestId("switch-id").props.disabled).toBe(undefined);
  });

  test("Should be disabled", async () => {
    const { getByTestId } = render(<Switch disabled />);
    expect(getByTestId("switch-id").props.disabled).toBeTruthy();
  });

  test("trackColor", async () => {
    const { getByTestId } = render(<Switch />);
    expect(getByTestId("switch-id").props.tintColor).toBe(getColorStyle(TrilogyColor.MAIN_FADE));
    expect(getByTestId("switch-id").props.onTintColor).toBe(
      getColorStyle(TrilogyColor.MAIN)
    );
  });

  colors.forEach((color) => {
    test(`true trackColor should have ${getStatusStyle(
      color
    ).color} color`, async () => {
      const { getByTestId } = render(<Switch status={color} />);
      expect(getByTestId("switch-id").props.onTintColor).toBe(
        getStatusStyle(color).color
      );
    });
  });
});
