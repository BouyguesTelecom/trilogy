import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ToasterContext from "../context";
import { ToasterPosition } from "../ToasterProps";
import { IconName } from "../../icon";
import { StatusState } from "../../../objects";
import { Section } from "../../section";
import { Container } from "../../container";
import { Button } from "../../button";
import ToasterProvider from "../Toaster";

const ToasterViewComp: React.FC = () => {
  const [offset] = React.useState(50);
  const [duration] = React.useState(10000000);
  const [title, setTitle] = React.useState("title");
  const [testId] = React.useState("toasterId");
  const [description] = React.useState("content");

  const [btnName, setBtnName] = React.useState("Open toaster");

  const { show } = React.useContext(ToasterContext);

  const onClickToaster = () => {
    show({
      testId,
      position: ToasterPosition.TOP,
      duration,
      offset,
      title,
      description,
      iconName: IconName.INFOS_CIRCLE,
      alert: StatusState.WARNING,
      onClick: () => setBtnName("click toast"),
      closable: () => setTitle("close toast"),
      onHide: () => console.log("onHide"),
    });
  };
  return (
    <Section>
      <Container>
        <Button variant={"PRIMARY"} onClick={onClickToaster}>
          {btnName}
        </Button>
      </Container>
    </Section>
  );
};

describe("Toaster", () => {
  it("should render correctly", async () => {
    render(
      <ToasterProvider>
        <ToasterViewComp />
      </ToasterProvider>
    );
    const btnToaster = screen.getByRole("button");
    fireEvent.click(btnToaster);
    const toaster = await screen.findByTestId("toasterId");
    expect(toaster).toBeInTheDocument();
  });

  it("should have right classes", async () => {
    render(
      <ToasterProvider>
        <ToasterViewComp />
      </ToasterProvider>
    );
    const btnToaster = screen.getByRole("button");
    fireEvent.click(btnToaster);
    const toaster = await screen.findByTestId("toasterId");
    expect(toaster).toHaveClass("toaster");
    expect(toaster).toHaveClass("is-warning");
  });

  it("should execute onClick toaster", async () => {
    render(
      <ToasterProvider>
        <ToasterViewComp />
      </ToasterProvider>
    );
    const btnToaster = screen.getByRole("button");
    fireEvent.click(btnToaster);
    const toaster = await screen.findByTestId("toasterId");
    fireEvent.click(toaster);
    expect(btnToaster).toHaveTextContent("click toast");
  });

  it("should have right left icon", async () => {
    render(
      <ToasterProvider>
        <ToasterViewComp />
      </ToasterProvider>
    );
    const btnToaster = screen.getByRole("button");
    fireEvent.click(btnToaster);
    const toaster = await screen.findByTestId("toasterId");
    fireEvent.click(toaster);
    expect(toaster.firstChild?.firstChild).toHaveClass(IconName.INFOS_CIRCLE);
  });

  it("should have right title and content", async () => {
    render(
      <ToasterProvider>
        <ToasterViewComp />
      </ToasterProvider>
    );
    const btnToaster = screen.getByRole("button");
    fireEvent.click(btnToaster);
    const toaster = await screen.findByTestId("toasterId");
    fireEvent.click(toaster);
    expect(toaster.childNodes[1].firstChild).toHaveTextContent("title");
    expect(toaster.childNodes[1].lastChild).toHaveTextContent("content");
  });

  it("should have closable icon", async () => {
    render(
      <ToasterProvider>
        <ToasterViewComp />
      </ToasterProvider>
    );
    const btnToaster = screen.getByRole("button");
    fireEvent.click(btnToaster);
    const toaster = await screen.findByTestId("toasterId");
    fireEvent.click(toaster);
    expect(toaster.childNodes[2]).toHaveClass("toaster-close");
    expect(toaster.childNodes[2].firstChild).toHaveClass("tri-times");
  });
});
