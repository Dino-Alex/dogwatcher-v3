import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@phamphu19498/runtogether-uikit'
import { useTranslation } from 'contexts/Localization'

const Header = () => {
  const { t } = useTranslation()
  return (
    <CustomFlex width="100%" flexDirection="column">
        <SmallTitle>{t("run together")}</SmallTitle>
        <Heading mt="10px">{t("Inventory")}</Heading>
    </CustomFlex>
  )
}

export default Header

const CustomFlex = styled(Flex)`
  @media screen and (min-width: 768px) and (max-width: 1080px) {
       padding-left:0rem;
  }
  @media screen and (max-width: 600px) {
       padding-left:15px;
  }
`
const SmallTitle = styled(Text)`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
`
const Heading = styled(Text)`
  letter-spacing: -0.02em;
  font-weight: 700;
  font-size: 76px;
  @media screen and (max-width: 600px) {
    font-size: 56px;
  }
`