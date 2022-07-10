import React, { FC } from "react";
import { Flex, Container } from "@chakra-ui/react";
import Presidents from "../presidents";

const Home: FC = () => {
    return (
        <Flex
            maxW="xl"
            minH={'100vh'}
            pt={90}
            flexDirection={'column'}
            justifyContent="center"
        >
            <Container textAlign={'center'}>
                <Presidents />
                <Presidents />
                <Presidents />
                <Presidents />
                <Presidents />
                <Presidents />
                <Presidents />
                <Presidents />
                <Presidents />
                <Presidents />
                <Presidents />
                <Presidents />
            </Container>
        </Flex>
    )
}
export default Home;
