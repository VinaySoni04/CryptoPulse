/* eslint-disable react/prop-types */
import { Tag, Text } from "@chakra-ui/react"
import { CustomCard } from "../../ChakraUI/CustomCard"

const InfoCard = ({ imgUrl, text, tagText }) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize="cover" bgRepeat="no-repeat">
        <Tag bg="p_blue" color="black" borderRadius="full">{tagText}</Tag>
        <Text textStyle="h5" mt="12px" fontWeight="medium">{text}</Text>
    </CustomCard>
  )
}

export default InfoCard