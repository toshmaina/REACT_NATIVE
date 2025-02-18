import { View, Text } from 'react-native'
import React, { Fragment } from 'react'
import { Stack } from 'expo-router'
import {StatusBar} from 'expo-status-bar';

const AuthLayout = () => {
  return (
    <Fragment>
    <Stack>
        <Stack.Screen name='transactions' />
         
    </Stack>
    <StatusBar style='light' backgroundColor='#161622'/>
    </Fragment>

  )
}

export default AuthLayout