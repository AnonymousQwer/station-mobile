import React from 'react'
import { Text } from 'react-native'
import { Variation as VariationProps } from '@terra-money/use-native-station'
import { gt, lt } from '@terra-money/use-native-station'
import Number from '../../components/Number'

interface Props {
  variation: VariationProps
  showPercent?: boolean
}

const Variation = ({ variation, showPercent }: Props) => {
  const { amount, value, percent } = variation
  const inc = gt(amount, 0)
  const dec = lt(amount, 0)

  const icon = inc ? '↑' : dec ? '↓' : undefined
  const color = inc ? '#ff5561' : dec ? '#5493f7' : '#9e9e9e'

  const tail = `${inc ? '+' : ''}${percent}`

  return showPercent ? (
    <Text style={{ color }}>
      {icon}
      <Number>{value}</Number>
      <Text>({tail})</Text>
    </Text>
  ) : (
    <Text style={{ color }}>
      {icon}
      {value}
    </Text>
  )
}

export default Variation
