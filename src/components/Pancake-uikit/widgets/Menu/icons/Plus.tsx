import { Svg } from '@phamphu19498/runtogether-uikit'
import React from 'react'
import styled from 'styled-components'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.8573 7.76281L11.9227 16.0773"
        stroke="#777E90"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
      <path
        d="M7.73279 11.8873L16.0473 11.9528"
        stroke="#777E90"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
