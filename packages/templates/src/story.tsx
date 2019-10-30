import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Header,
  PricingCard,
  ListItem,
  ThemeProvider,
} from 'react-native-elements'
import { random } from 'faker'
import { MediaQueryStyleSheet } from 'react-native-responsive'
import { Layout } from './Layout'

const styles = MediaQueryStyleSheet.create(
  //Base styles:
  {
    container: {
      padding: 0,
    },
  },
  //Media Queries styles:
  {
    '@media (min-device-width: 800)': {
      container: {
        padding: 20,
      },
    },
  },
)

const list = [
  {
    title: random.word(),
    icon: 'av-timer',
  },
  {
    title: random.word(),
    icon: 'flight-takeoff',
  },
]

storiesOf('templates', module)
  .addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
  .add('Layout', () => (
    <Layout style={styles.container}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Layout
        style={{
          flexDirection: 'row',
        }}
      >
        <Layout style={{ flex: 0.5 }}>
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
        </Layout>
        <Layout style={{ flex: 0.5 }}>
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
        </Layout>
      </Layout>
      {list.map((item, i) => (
        <ListItem
          key={i}
          title={item.title}
          leftIcon={{ name: item.icon }}
          bottomDivider
          chevron
        />
      ))}
    </Layout>
  ))
