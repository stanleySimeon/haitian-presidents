import * as React from 'react';
import { Img, Flex, Box, Link, Text } from '@chakra-ui/react';
import flag from '././../../assets/haitianCard.png';

const Nav: React.FC = () => {
    return (
        <Flex
            as="nav"
            w={'100%'}
            position={'fixed'}
            top={0}
            minWidth='max-content'
            alignItems='center'
            justify="center"
            gap={'1em'}
            wrap="wrap"
            padding="1rem"
            bgColor={'#073063'}
            color="white"
            zIndex={99999}
        >
            <Link href="/" color={'white'} textDecor={'none'} fontSize={'1.2rem'}>
                <Img src={flag} alt="Haitian Flag" w={30} />
            </Link>
            <Box w={'2px'} h={'20px'} bg={'#f5f5f5'}></Box>
            <Text>
                Haitian Presidents
            </Text>
        </Flex>
    );
}
export default Nav;
// Language: typescript