jest.useFakeTimers();

import { fireEvent, render } from "@testing-library/react-native";
import * as React from "react";
import { Platform, PlatformOSType } from "react-native";
import {
  AlertState,
  getAlertStyle,
  getColorStyle,
  TrilogyColor,
} from "../../../objects";
import Input from "../Input.native";
import {
  InputAutoCapitalize,
  InputKeyboardType,
  InputStatus,
  InputType,
} from "../InputEnum";
import { IconName } from "../../icon/";

describe("Input component", () => {
  const types = [
    InputKeyboardType.DEFAULT,
    InputKeyboardType.EMAIL_ADDRESS,
    InputKeyboardType.NUMERIC,
    InputKeyboardType.PHONE_PAD,
    InputKeyboardType.NUMBER_PAD,
    InputKeyboardType.DECIMAL_PAD,
    InputKeyboardType.VISIBLE_PASSWORD,
    InputKeyboardType.ASCII_CAPABLE,
    InputKeyboardType.NUMBERS_AND_PUNCTUATION,
    InputKeyboardType.URL,
    InputKeyboardType.NAME_PHONE_PAD,
    InputKeyboardType.TWITTER,
    InputKeyboardType.WEB_SEARCH,
  ];

  const capitalizes = [
    InputAutoCapitalize.CHARACTERS,
    InputAutoCapitalize.NONE,
    InputAutoCapitalize.SENTENCES,
    InputAutoCapitalize.WORDS,
  ];

  const status = [
    InputStatus.DEFAULT,
    InputStatus.ERROR,
    InputStatus.SUCCESS,
    InputStatus.WARNING,
  ];

  // eslint-disable-next-line jest/expect-expect
  test("Should render component withiyt props", () => {
    render(<Input />);
  });

  test("Should render component with props", () => {
    const { getByTestId } = render(
      <Input placeholder="Test" maxLength={5} minLength={5} autoCorrect />
    );
    const input = getByTestId("input-id");
    expect(input.props.placeholder).toEqual("Test");
    expect(input.props.maxLength).toEqual(5);
    expect(input.props.minLength).toEqual(5);
    expect(input.props.autoCorrect).toBeTruthy();
  });

  types.forEach((type) => {
    test(`Should render ${type} keyboard type`, async () => {
      const { getByTestId } = render(
        <Input placeholder="Test" keyboardType={type} />
      );
      expect(getByTestId("input-id").props.keyboardType).toEqual(type);
    });
  });

  capitalizes.forEach((type) => {
    test(`Should render ${type} autoCapitalize type`, async () => {
      const { getByTestId } = render(<Input autoCapitalize={type} />);
      expect(getByTestId("input-id").props.autoCapitalize).toEqual(type);
    });
  });

  status.forEach((state) => {
    test(`Should render ${state} color wrapper`, async () => {
      const { getByTestId } = render(<Input status={state} />);
      expect(getByTestId("input-wrapper-id").props.style).toEqual({
        justifyContent: "center",
        alignSelf: "stretch",
        backgroundColor: getColorStyle(TrilogyColor.BACKGROUND),
        borderWidth: 1,
        borderRadius: 3,
        borderColor:
          (state === "success" && getAlertStyle(AlertState.SUCCESS)) ||
          (state === "warning" && getAlertStyle(AlertState.WARNING)) ||
          (state === "error" && getAlertStyle(AlertState.ERROR)) ||
          (state === "default" && getColorStyle(TrilogyColor.MAIN)) ||
          getColorStyle(TrilogyColor.MAIN),
        height: 46,
        position: "relative",
        width: "100%",
      });
    });
  });

  test("Should change value", () => {
    const { getByTestId } = render(<Input placeholder="Test" />);
    fireEvent.changeText(getByTestId("input-id"), "value");
    expect(getByTestId("input-id").props.value).toEqual("value");
  });

  test("Should have password icon", () => {
    const { getByTestId } = render(
      <Input placeholder="Test" hasIcon type={InputType.PASSWORD} />
    );
    expect(getByTestId("password-id")).toBeTruthy();
  });

  test("Should have search icon", () => {
    const { getByTestId } = render(
      <Input placeholder="Test" type={InputType.SEARCH} value="bonjour" />
    );
    fireEvent.press(getByTestId("search-id"));
    expect(getByTestId("search-id")).toBeTruthy();
  });

  test("Should have help text", () => {
    const { getByTestId } = render(<Input placeholder="Test" help="Help" />);
    expect(getByTestId("help-id").props.children).toBe("Help");
  });

  test("Should have custom icon or status", () => {
    const { getByTestId } = render(
      <Input
        hasIcon
        status={InputStatus.SUCCESS}
        customIcon={IconName.INFOS_CIRCLE}
      />
    );
    expect(getByTestId("icon-status-id").props.children).toBeTruthy();
  });

  test("Should have correct style", async () => {
    const paddingTopByPlatform = (
      os: PlatformOSType,
      dynamicPlaceholder: boolean
    ): number => {
      if (dynamicPlaceholder && os === "ios") return 10;
      if (dynamicPlaceholder && os === "android") return 15;
      return 0;
    };
    const { getByTestId } = render(<Input />);
    expect(getByTestId("input-id").props.style).toEqual({
      paddingLeft: 10,
      paddingRight: 0,
      marginTop: paddingTopByPlatform(Platform.OS, false),
      width: "95%",
      height: 46,
      color: getColorStyle(TrilogyColor.MAIN),
    });
  });
});
