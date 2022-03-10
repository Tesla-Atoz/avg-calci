import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
const Card = ({ data }) => {
  return (
    <Box bg="gray.200" w="100%" p={4} color="black" textAlign={"center"}>
      <Flex justifyContent="center">
        <Heading>New Average Buy Price :</Heading>
        <Heading>
          <span>&nbsp;</span> {parseFloat(data.newAvgBuyPrice.toFixed(2))}
        </Heading>
      </Flex>

      {/* Can optimise here... leaving for future ... */}
      {data.percentProfitOrLoss > 0 ? (
        <Flex justifyContent="center">
          <Heading>Percentage :</Heading>
          <Heading color="green.500">
            <span>&nbsp;</span>
            {parseFloat(data.percentProfitOrLoss.toFixed(2))}
            {<ArrowUpIcon color={"green.500"} />}
          </Heading>
        </Flex>
      ) : (
        <Flex justifyContent="center">
          <Heading>Percentage :</Heading>
          <Heading color="red.500">
            {parseFloat(data.percentProfitOrLoss.toFixed(2))}
            {<ArrowDownIcon color={"red.500"} />}
          </Heading>
        </Flex>
      )}
    </Box>
  );
};
export default Card;
