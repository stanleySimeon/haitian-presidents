import React, { FC } from 'react';
import { Flex, Link } from '@chakra-ui/react';

const Footer: FC = () => {
    return (
        <Flex
            as="footer"
            position={'relative'}
            minWidth='max-content'
            alignItems='center'
            justify="center"
            wrap="wrap"
            padding="1rem"
            bgColor={'#073063'}
            color="white"
        >
            <Link href="https://mstanley.netlify.app"
            fontSize={'.7rem'}
            textDecor={'none'}
            textColor={'#FFFFFF'}
            margin={'auto'}
            >
                    &copy; {new Date().getFullYear()}
                    {' '}
                    |
                    Made with ❤️ by  <strong>[ mstanley ]</strong>
            </Link>
        </Flex>
    );
}
export default Footer;
