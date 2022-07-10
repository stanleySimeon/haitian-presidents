import React, { FC } from "react";
import { Flex, Container } from "@chakra-ui/react";
import Presidents from "../presidents";

const Home: FC = () => {
    return (
        <Flex
            maxW="xl"
            minH={'100vh'}
            padding={'.1rem'}
            flexDirection={'column'}
        >
            <Container textAlign={'center'} mt={80} mb={50}>
                <Presidents />
            </Container>
        </Flex>
    )
}
export default Home;
