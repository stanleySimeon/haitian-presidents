import { Flex, Container, Text } from "@chakra-ui/react";
import React, { FC } from "react";

const Bio: FC = () => {
    return (
        <>
            <Flex
                maxW="xl"
                minH={'100vh'}
                pt={80}
                flexDirection={'column'}
                justifyContent={'center'}
            >
                <Container
                    w={'96%'}
                    m={'0 auto'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text
                        textColor={'#1F53FC'}
                        fontSize={'1.5rem'}
                        textAlign={'center'}
                    >
                        Bio <br />
                        Under Construction
                    </Text>
                </Container>
            </Flex>
        </>
    )
}
export default Bio;
