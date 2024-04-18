import React from "react";
import {
  Divider,
  IconName,
  Modal,
  ModalFooter,
  ModalMarkup,
  ModalTitle,
  Section,
  Text,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMarker,
  Title,
  TitleLevels,
} from "@trilogy-ds/react/components";

export const ModalScreen = (): JSX.Element => {
  return (
    <>
      <Section>
        <Title level={TitleLevels.THREE}>Modal</Title>
        <Divider />

        <Modal
          panel
          triggerMarkup={ModalMarkup.A}
          title={"Modal panel Title"}
          triggerContent={"Open modal"}
          ctaContent={"Action"}
          ctaOnClick={() => alert("Click on cta")}
          closeIcon
          ctaCancelOnClick={() => alert("cancel action")}
        >
          <Timeline>
            <TimelineItem done>
              <TimelineMarker iconName={IconName.CHECK} />
              <TimelineContent heading="08 July" content="Step 1" />
            </TimelineItem>
            <TimelineItem active>
              <TimelineMarker iconName={IconName.CHECK} />
              <TimelineContent
                heading="09 July"
                content="Step 2"
                link="link"
                contentLink="Go to link"
              />
            </TimelineItem>
            <TimelineItem undone>
              <TimelineMarker iconName={IconName.CHECK} />
              <TimelineContent
                heading="10 July"
                content="Step 3"
                link="link"
                contentLink="Go to your profile"
              />
            </TimelineItem>
          </Timeline>
          <Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
            amet.. , comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et
            Malorum by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature from 45
            BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classical
            literature, discovered the undo
          </Text>
        </Modal>

        <Modal
          content={
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
            "\n" +
            'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
            "\n" +
            'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
            "\n" +
            'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
          }
          triggerMarkup={ModalMarkup.A}
          title="title modal"
          triggerContent="Open modal"
          ctaContent="Action"
          // eslint-disable-next-line no-alert
          ctaOnClick={() => alert("Click on cta")}
          onOpen={() => alert("open modal")}
          onClose={() => alert("close modal")}
          iconName={IconName.BELL}
          closeIcon
          // ctaCancelOnClick={() => alert('toto')}
        />
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Modal custom </Title>
        <Divider />

        <Modal
          triggerMarkup={ModalMarkup.A}
          triggerContent="Open modal"
          onOpen={() => alert("open modal")}
          onClose={() => alert("close modal")}
          closeIcon
        >
          <ModalTitle>Custom title</ModalTitle>
          <Text
            htmlContent={
              'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
              "\n" +
              'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
              "\n" +
              'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
              "\n" +
              'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
            }
          />
          <ModalFooter>Custom Footer</ModalFooter>
        </Modal>
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Modal click outside </Title>
        <Divider />

        <Modal
          triggerMarkup={ModalMarkup.A}
          triggerContent="Open modal"
          iconName="tri-check-circle"
          iconColor="SUCCESS"
          closeIcon
        >
          <ModalTitle>Titre 2</ModalTitle>
          <Text>icon modal content</Text>
        </Modal>
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>
          Modal with disable click outside{" "}
        </Title>
        <Divider />

        <Modal
          triggerMarkup={ModalMarkup.A}
          triggerContent="Open modal"
          iconName="tri-check-circle"
          iconColor="SUCCESS"
          disableHandlingClickOutside
          closeIcon
        >
          <ModalTitle>Titre 2</ModalTitle>
          <Text>icon modal content</Text>
        </Modal>
      </Section>
    </>
  );
};
