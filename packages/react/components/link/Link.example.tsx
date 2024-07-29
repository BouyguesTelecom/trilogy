import React from 'react'
import { Link } from './index'
import { Divider } from '@/components/divider'
import { Text } from '@/components/text'

const LinkExample: React.ReactNode =
  <>
    <Link>
      {' '}Mot de passe oublié ?
    </Link>
    <Divider />
    <Text>
      Je suis dans un paragraphe et ceci est un{' '}
      <Link inline>
        lien standard
      </Link>
    </Text>
  </>

export default LinkExample;
