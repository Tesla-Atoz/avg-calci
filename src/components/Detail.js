import {
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Button,
  Switch,
  useColorMode,
  Box,
} from "@chakra-ui/react";

import Card from "./Card";
import { calAvgBuyPrice, calQuantity, calPercent } from "../Utils/Cal";
import { useState } from "react";

const Detail = ({
  allValues,
  setAllValues,
  calDetails,
  setCalDetails,
  setToggle,
}) => {
  const changeHandler = (e) => {
    setAllValues((allValues) => {
      return { ...allValues, [e.target.name]: Number(e.target.value) };
    });
  };

  const { toggleColorMode } = useColorMode();

  // check here the data :

  const onButtonClickHandler = (e) => {
    e.preventDefault();
    const currInvestQuantity = calQuantity(
      allValues.toInvestAmount,
      allValues.ltpOfAsset
    );

    const newAverageBuyPrice = calAvgBuyPrice(
      allValues.initialInvestedAmount,
      allValues.toInvestAmount,
      allValues.initialQuantity,
      currInvestQuantity
    );

    const percentageProfitOrLoss = calPercent(
      newAverageBuyPrice,
      allValues.ltpOfAsset
    );

    setCalDetails((prevState) => {
      return {
        ...prevState,
        currentInvestQuantity: currInvestQuantity,
        newAvgBuyPrice: newAverageBuyPrice,
        percentProfitOrLoss: percentageProfitOrLoss,
      };
    });

    setToggle(true);
  };

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      //   You can use this but I dont need.
      //   bg={bgColor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size={"xl"}>Average Price Calculator</Heading>
        <Text fontSize="xs">
          After entering details, click "Calculate" button and scroll down.
        </Text>

        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="darkMode" mb="0">
            Change mode
          </FormLabel>
          <Switch id="darkMode" onChange={toggleColorMode} />
        </FormControl>
        <Box>Only numbers must be entered. No Form Validation is written.</Box>
      </VStack>

      {/* Real form Contents starts here.. */}
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Initial Avg Buy Price </FormLabel>
            <Input
              placeholder="100.25"
              name="initialAvgBuyPrice"
              onChange={changeHandler}
              autoComplete="off"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Initial Quantity</FormLabel>
            <Input
              placeholder="25"
              name="initialQuantity"
              onChange={changeHandler}
              autoComplete="off"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Initial Invested Amount</FormLabel>
            <Input
              placeholder="650"
              name="initialInvestedAmount"
              onChange={changeHandler}
              autoComplete="off"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>LTP Of Asset</FormLabel>
            <Input
              placeholder="320"
              name="ltpOfAsset"
              onChange={changeHandler}
              autoComplete="off"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Amount To Invest</FormLabel>
            <Input
              placeholder="320"
              name="toInvestAmount"
              onChange={changeHandler}
              autoComplete="off"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <Button size={"md"} w="full" onClick={onButtonClickHandler}>
            Calculate
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Detail;
