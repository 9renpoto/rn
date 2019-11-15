import { View } from 'react-native'
import cssta from 'cssta/native.macro'

export const Layout = cssta(View)`
  padding: 0px;

  @media (min-width: 600px) {
    padding: 20px;
  }
`
