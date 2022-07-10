import React from 'react';
import { Flex, Link, Box, Img, Icon } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import jomo from '../assets/jomo.jpeg';

class Presidents extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            presidents: [
                {
                    image: String,
                    name: String,
                    Text: String,
                    date: String,
                }
            ],
            loading: true,
        };
    }
    render() {
        return (
            <Flex
                minH={'3em'}
                m={'.5em'}
                bg={'#094085'}
                justifyContent="space-between"
                alignItems="center"
                borderStartRadius={'42px'}
                borderRightRadius={'6px'}
            >
                {/*List of Haitian presidents*/}
                <Box
                    display="flex"
                    alignSelf={'flex-start'}
                    justifyContent={'center'}
                    alignItems="center"
                    width='80px'
                    h='80px'
                    bg={'#FFFFFF'}
                    borderRadius={'50%'}
                >
                    <Box
                        display="flex"
                        justifyContent={'center'}
                        alignItems="center"
                        width='76px'
                        h='76px'
                        bg={'#C58E00'}
                        borderRadius={'50%'}
                    >
                        <Box
                            display="flex"
                            justifyContent={'center'}
                            alignItems="center"
                            width='70px'
                            h='70px'
                            bg={'#8E0028'}
                            borderRadius={'50%'}
                        >
                            <Img w={'100%'} h={'100%'} objectFit={'cover'} borderRadius={'100%'} src={jomo}/>
                        </Box>
                    </Box>
                </Box>
                <Box>

                </Box>
                <Link href="/Bio" color={'#D9D9D9'} >
                    <Icon fontSize={30} as={ChevronRightIcon} />
                </Link>
            </Flex>
        );
    }
}
export default Presidents;
