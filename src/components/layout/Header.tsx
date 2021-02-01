import {
  NavigationProp,
  useNavigation,
} from '@react-navigation/native'
import React, { ReactElement } from 'react'
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native'
import { Icon } from 'components'

import color from 'styles/color'
import {
  StackHeaderLeftButtonProps,
  StackHeaderTitleProps,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { RootStackParams } from 'types'

type HeaderTheme = 'white' | 'sky' | 'sapphire'

export type HeaderProps = {
  theme?: HeaderTheme
  goBackIconType?: 'arrow' | 'close'
  headerStyle?: StyleProp<ViewStyle>
  headerLeft?: (props: StackHeaderLeftButtonProps) => React.ReactNode
  headerTitle?:
    | string
    | ((props: StackHeaderTitleProps) => React.ReactNode)
  headerRight?: (props: {
    tintColor?: string | undefined
  }) => React.ReactNode
}

const HeaderLeft = ({
  theme,
  goBackIconType,
}: {
  theme?: HeaderTheme
  goBackIconType?: 'arrow' | 'close'
}): ReactElement => {
  const { goBack, canGoBack, navigate } = useNavigation<
    NavigationProp<RootStackParams>
  >()

  const onPressGoBack = (): void => {
    if (canGoBack()) {
      goBack()
    }
    navigate('Tabs')
  }

  return (
    <TouchableOpacity
      onPress={onPressGoBack}
      style={{ paddingLeft: 20 }}
    >
      <Icon
        name={
          goBackIconType === 'close' ? 'clear' : 'keyboard-arrow-left'
        }
        color={theme === 'sapphire' ? color.white : color.sapphire}
        size={32}
      />
    </TouchableOpacity>
  )
}

export const navigationHeaderOptions = (
  props: HeaderProps
): StackNavigationOptions => {
  const {
    theme,
    goBackIconType,
    headerLeft,
    headerTitle,
    headerRight,
    headerStyle,
  } = props
  const containerStyle: StyleProp<ViewStyle> = {}
  switch (theme) {
    case 'sapphire':
      containerStyle.backgroundColor = color.sapphire
      break
    case 'sky':
      containerStyle.backgroundColor = color.sky
      break
    case 'white':
    default:
      containerStyle.backgroundColor = color.white
      break
  }
  return {
    headerStyle: [
      {
        ...styles.container,
        ...containerStyle,
      },
      headerStyle,
    ],
    headerLeft:
      headerLeft ||
      ((): ReactElement => (
        <HeaderLeft {...{ theme, goBackIconType }} />
      )),
    headerTitle: headerTitle || '',
    headerRight,
  }
}

export const styles = StyleSheet.create({
  container: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
})
