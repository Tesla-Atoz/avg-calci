import { Container, VStack, Flex } from "@chakra-ui/react";
import Detail from "./Detail";

const DetailForm = (props) => {
  return (
    <Container maxW="container.lg" p={0}>
      <Flex h={"auto"} py={20}>
        <Detail
          allValues={props.allValues}
          setAllValues={props.setAllValues}
          setCalDetails={props.setCalDetails}
          calDetails={props.calDetails}
          setToggle={props.setToggle}
        />
      </Flex>
    </Container>
  );
};
export default DetailForm;
