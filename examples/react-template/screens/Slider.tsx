import * as React from "react";
import {
  Title,
  TitleLevels,
  SliderItem,
  Card,
  CardContent,
  Container,
  Slider,
  IconSize,
  Spacer,
  SpacerSize,
} from "@trilogy-ds/react/components";
import { Divider } from "@trilogy-ds/react";

export const SliderScreen = (): JSX.Element => {
  return (
    <Container fluid>
      <Title level={TitleLevels.THREE}>Simple Slider</Title>

      <Slider arrowsOut doted invertedDoted>
        <SliderItem>
          <Card>
            <CardContent>
              <Title>Slider TS</Title>
            </CardContent>
          </Card>
        </SliderItem>
        <SliderItem>
          <Card>
            <CardContent>
              <Title>Slider TS</Title>
            </CardContent>
          </Card>
        </SliderItem>
        <SliderItem>
          <Card>
            <CardContent>
              <Title>Slider TS</Title>
            </CardContent>
          </Card>
        </SliderItem>
      </Slider>

      <Spacer size={SpacerSize.LARGE} />

      <Divider />

      <Title level={TitleLevels.THREE}>Multiple Cards Slider</Title>

      <Slider
        motionLess
        arrowSize={IconSize.MEDIUM}
        arrowsOut
        doted
        invertedDoted
      >
        <SliderItem size={4}>
          <Card>
            <CardContent>
              <Title>Card 1</Title>
            </CardContent>
          </Card>
        </SliderItem>
        <SliderItem size={4}>
          <Card>
            <CardContent>
              <Title>Card 2</Title>
            </CardContent>
          </Card>
        </SliderItem>
        <SliderItem size={4}>
          <Card>
            <CardContent>
              <Title>Card 3</Title>
            </CardContent>
          </Card>
        </SliderItem>
        <SliderItem size={4}>
          <Card>
            <CardContent>
              <Title>Card 4</Title>
            </CardContent>
          </Card>
        </SliderItem>
        <SliderItem size={4}>
          <Card>
            <CardContent>
              <Title>Card 5</Title>
            </CardContent>
          </Card>
        </SliderItem>
        <SliderItem size={4}>
          <Card>
            <CardContent>
              <Title>Card 6</Title>
            </CardContent>
          </Card>
        </SliderItem>
        <SliderItem size={4}>
          <Card>
            <CardContent>
              <Title>Card 7</Title>
            </CardContent>
          </Card>
        </SliderItem>
        <SliderItem size={4}>
          <Card>
            <CardContent>
              <Title>Card 8</Title>
            </CardContent>
          </Card>
        </SliderItem>
      </Slider>

      <Spacer size={SpacerSize.LARGE} />

      <Spacer size={SpacerSize.LARGE} />

      <Divider />

      <Title level={TitleLevels.THREE}>
        Multiple Cards Slider without dots
      </Title>

      <Slider arrowSize={IconSize.SMALL} arrowsOut doted invertedDoted>
        <SliderItem size={3}>
          <Card>
            <CardContent>
              <Title>Card 1</Title>
            </CardContent>
          </Card>
        </SliderItem>
        <SliderItem size={3}>
          <Card>
            <CardContent>
              <Title>Card 2</Title>
            </CardContent>
          </Card>
        </SliderItem>
        <SliderItem size={3}>
          <Card>
            <CardContent>
              <Title>Card 3</Title>
            </CardContent>
          </Card>
        </SliderItem>
        <SliderItem size={3}>
          <Card>
            <CardContent>
              <Title>Card 4</Title>
            </CardContent>
          </Card>
        </SliderItem>
        <SliderItem size={3}>
          <Card>
            <CardContent>
              <Title>Card 5</Title>
            </CardContent>
          </Card>
        </SliderItem>
        <SliderItem size={4}>
          <Card>
            <CardContent>
              <Title>Card 6</Title>
            </CardContent>
          </Card>
        </SliderItem>
        <SliderItem size={3}>
          <Card>
            <CardContent>
              <Title>Card 7</Title>
            </CardContent>
          </Card>
        </SliderItem>
        <SliderItem size={3}>
          <Card>
            <CardContent>
              <Title>Card 8</Title>
            </CardContent>
          </Card>
        </SliderItem>
      </Slider>
    </Container>
  );
};
