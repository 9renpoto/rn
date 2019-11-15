import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Header,
  PricingCard,
  ListItem,
  ThemeProvider,
  Input as ElementsInput,
  Button as ElementsButton,
} from 'react-native-elements'
import { Alert, Button, Text, TextInput, View } from 'react-native'
import { random } from 'faker'
import { string, object } from 'yup'
import { Formik, FormikProps } from 'formik'
import { Layout } from './Layout'

const validationSchema = object().shape({
  email: string().email(),
})

interface FormValues {
  email: string
}

const MyReactNativeForm = (_: FormikProps<FormValues>) => {
  const initialValues: FormValues = {
    email: '',
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        Alert.alert(JSON.stringify(values))
        console.log(values)
      }}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
        isSubmitting,
        touched,
      }) => (
        <View>
          <TextInput
            placeholder="Input email address"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <Button
            onPress={handleSubmit}
            title="Submit"
            disabled={!values.email || !isValid || isSubmitting}
          />
          {touched.email && <Text>{errors.email}</Text>}
        </View>
      )}
    </Formik>
  )
}

const ElementsFormik = (_: FormikProps<FormValues>) => {
  const initialValues: FormValues = {
    email: '',
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, helpers) => {
        Alert.alert(JSON.stringify(values))
        console.log(values)
        helpers.resetForm({ values: { email: '' } })
      }}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
        isSubmitting,
        touched,
      }) => (
        <View>
          <ElementsInput
            label="email"
            placeholder="Input email address"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            errorMessage={
              touched.email && errors.email ? errors.email : undefined
            }
          />
          <ElementsButton
            onPress={handleSubmit}
            title="Submit"
            disabled={!values.email || !isValid || isSubmitting}
          />
        </View>
      )}
    </Formik>
  )
}

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
    <Layout>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View style={{ flex: 0.5 }}>
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
        </View>
        <View style={{ flex: 0.5 }}>
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
        </View>
      </View>
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
  .add('MyReactNativeForm', () => <MyReactNativeForm />)
  .add('ElementsFormik', () => <ElementsFormik />)
