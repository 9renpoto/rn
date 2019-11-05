import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Header,
  PricingCard,
  ListItem,
  ThemeProvider,
} from 'react-native-elements'
import { random } from 'faker'
import { View as Layout } from 'react-native'
import cssta from 'cssta/native.macro'
import { CalendarStartEnd, CalendarStartPeriod, Calendario } from './Calenders'
import { ElementsFormik, MyReactNativeForm } from './Formik'

const StyledLayout = cssta(Layout)`
  padding: 0px;

  @media (min-width: 600px) {
    padding: 20px;
  }
`

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
    <StyledLayout>
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
    </StyledLayout>
  ))
  .add('CalendarStartEnd', () => <CalendarStartEnd />)
  .add('CalendarStartPeriod', () => <CalendarStartPeriod />)
  .add('Calendario', () => <Calendario />)
  .add('MyReactNativeForm', () => <MyReactNativeForm />)
  .add('ElementsFormik', () => <ElementsFormik />)
