import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { Formik } from 'formik'
import { object, string } from 'yup'

const validationSchema = object().shape({
  email: string().email('email dayo'),
})

export const MyReactNativeForm = () => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={values => console.log(values)}
    validationSchema={validationSchema}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
      <View>
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        <Button
          onPress={handleSubmit}
          title="Submit"
          disabled={!!errors.email || !values.email}
        />
        <Text>{errors.email}</Text>
      </View>
    )}
  </Formik>
)
