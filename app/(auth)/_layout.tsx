import { View, Text } from 'react-native'
import React, { Fragment } from 'react'
import { Stack } from 'expo-router'
import {StatusBar} from 'expo-status-bar';
import Toast from 'react-native-toast-message';
import { AlertNotificationRoot, AlertNotificationToast,AlertNotificationDialog } from 'react-native-alert-notification';

const AuthLayout = () => {
  return (
    <Fragment>
    <Stack>
        <Stack.Screen name='signIn' options={
            {
                headerShown: false
            }
        }/>
         <Stack.Screen name='signUp' options={
            {
                headerShown: false
            }
        }/>
    </Stack>
    <StatusBar style='light' backgroundColor='#161622'/>
   <AlertNotificationDialog isDark/>
    </Fragment>

  )
}

export default AuthLayout