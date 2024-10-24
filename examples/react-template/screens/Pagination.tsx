import * as React from "react";
import {
  Section,
  Title,
  TitleLevels,
  Divider,
  Pagination,
} from "@trilogy-ds/react/components";

export const PaginationScreen = (): JSX.Element => {
  return (
    <>
      <Section>
        <Title level={TitleLevels.THREE}>Pagination</Title>
        <Divider />
        <Pagination
          onClick={(e) => console.log("event", e)}
          count={50}
          href={(page) => `?page=${page}`}
        />
      </Section>
      <Section>
        <Pagination
          onClick={(e) => console.log("event", e)}
          count={50}
          href={(page) => `?page=${page}`}
        />
        <Divider />
        <Pagination
          onClick={(e) => console.log("event", e)}
          count={50}
          defaultPage={2}
        />

        <Divider />
        <Pagination
          onClick={(e) => console.log("event", e)}
          count={20}
          pageSize={2}
          defaultPage={2}
        />
      </Section>
    </>
  );
};
