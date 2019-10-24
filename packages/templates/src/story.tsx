import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button, ThemeProvider } from 'react-native-elements'
import { random } from 'faker'
import { Layout } from './Layout'

storiesOf('templates', module)
  .addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
  .add('Layout', () => (
    <Layout>
      <Button title={random.word()} />
    </Layout>
  ))
