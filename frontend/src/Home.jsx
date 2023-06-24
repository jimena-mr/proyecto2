import React from 'react';
import './Home.css';
import { Button, Container,Tooltip, Input, HStack } from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
    
const Home = () => {
    return (
        <div>
            <div className="button-container">
            <Link to="/signup">
                <Button variant="outline">SIGN UP</Button>
                </Link>
                <Link to="/login">
                <Button variant="outline">LOG IN</Button>
            </Link>
            </div>

            <div>
                <h1 className='title'>StudyConnect</h1>

                <Container color="black" >Rompe barreras, comparte conocimientos: únete a nuestra plataforma universitaria</Container> <br/>

                <div className="search" color="Black">
                    <HStack>
                    <Tooltip hasArrow label='Search places' bg='gray.300' color='black'>
                        <SearchIcon  color="black"/>
                    </Tooltip>
                    <Input placeholder='Search something...' size='lg' color="black"/>
                    </HStack>
                </div>
            </div>
        </div>
    );
}

export default Home;