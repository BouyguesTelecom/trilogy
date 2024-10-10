import React from 'react'
import { Box, BoxContent, BoxFooter } from './index'
import { Title } from '@/components/title'
import { Text } from '@/components/text'
import { Columns, ColumnsItem } from '../columns'
import { Link } from '../link'


const BoxExample: React.ReactNode =
  <>
    <Columns multiline>
      <ColumnsItem size={4}>
        <Box>
          <BoxContent>
            <Title level="ONE">
              Box Title
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            </Text>
          </BoxContent>
        </Box>
      </ColumnsItem>
      <ColumnsItem size={4}>
        <Box flat>
          <BoxContent>
            <Title level="ONE">
              Box Title
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            </Text>
          </BoxContent>
        </Box>
      </ColumnsItem>
      <ColumnsItem size={4}>
        <Box
          leftBorder="WARNING"
        >
          <BoxContent>
            <Title level="ONE">
              Box Title
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            </Text>
          </BoxContent>
        </Box>
      </ColumnsItem>
      <ColumnsItem size={12}>
        <Box>
          <BoxContent>
            <Title level="ONE">
              Box Title
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            </Text>
          </BoxContent>
          <BoxFooter>
            <Link>
              Link
            </Link>
          </BoxFooter>
        </Box>
      </ColumnsItem>
    </Columns>
  </>

export default BoxExample
