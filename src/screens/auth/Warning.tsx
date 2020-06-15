import React from 'react'
import { Text, CheckBoxProps } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { Trans, SignUpWarning } from '@terra-money/use-native-station'
import Icon from '../../components/Icon'

interface Props extends SignUpWarning {
  attrs: CheckBoxProps
}

const Warning = ({ tooltip, i18nKey, attrs }: Props) => (
  <>
    <Icon name="error" />
    <Text>{tooltip[0]}</Text>
    <Text>{tooltip[1]}</Text>

    <CheckBox {...attrs} />

    <Text>
      <Trans i18nKey={i18nKey}>
        <strong />
      </Trans>
    </Text>
  </>
)

export default Warning
