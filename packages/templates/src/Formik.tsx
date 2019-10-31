import React from 'react'
import { Alert, Button, Text, TextInput, View } from 'react-native'
import {
  Input as ElementsInput,
  Button as ElementsButton,
} from 'react-native-elements'
import { Formik } from 'formik'
import { object, string } from 'yup'

const validationSchema = object().shape({
  email: string().email(),
})

export const MyReactNativeForm = () => (
  <Formik
    initialValues={{ email: '' }}
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

export const ElementsFormik = () => (
  <Formik
    initialValues={{ email: '' }}
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
