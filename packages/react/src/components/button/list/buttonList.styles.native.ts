import { StyleSheet, type ViewStyle } from "react-native"

type ButtonListStyles = Record<string, ViewStyle>

export const buttonListStyles: ButtonListStyles = StyleSheet.create({
  ["aligncenter"]: {
    alignItems: "center",
  },
  ["alignflex-start"]: {
    alignItems: "flex-start",
  },
  ["alignflex-end"]: {
    alignItems: "flex-end",
  },
  ["alignstretch"]: {
    alignItems: "stretch",
  },
  ["justifycenter"]: {
    justifyContent: "center",
  },
  ["justifyflex-start"]: {
    justifyContent: "flex-start",
  },
  ["justifyflex-end"]: {
    justifyContent: "flex-end",
  },
  ["justifyspace-between"]: {
    justifyContent: "space-between",
  },
  ["justifyspace-around"]: {
    justifyContent: "space-around",
  },
  ["directionrow"]: {
    flexDirection: "row",
  },
  ["directioncolumn"]: {
    flexDirection: "column",
  },
  ["wrapwrap"]: {
    flexWrap: "wrap",
  },
  ["wrapnowrap"]: {
    flexWrap: "nowrap",
  },
})
