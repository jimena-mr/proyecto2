import React from 'react'
import './App.css';
import { useState } from 'react';
import { VStack,Flex,Center,Input,FormControl,Button,Box,FormLabel  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username,setUsername]= useState("");
  const [password,setPassword]= useState("");

  //useEffect( () => { //sirve para validacion 
  //  async function hacerConsultaHTTP(params){
  //      await fetch("www.google.com")
  //  }
  //}

  //)

  function usernameHandler(event){
    console.log(event.target.value)
    setUsername(event.target.value) 
  }
  function passwordHandler(event){
    setPassword(event.target.value)
  }
  return (   
  
      <Box>
        <div className="button-container">
            <Link to="/">
                <Button colorScheme='teal' >VOLVER A INICIO</Button>
                </Link>
                <Link to="/signup">
                <Button colorScheme='teal'>SIGN UP</Button>
            </Link>
        </div>
      <Center top={250} h={150}  color="teal" fontWeight="bold" fontSize="4xl" pb="8">Hello Again!</Center>
      <Flex align="center" justify="center" h="calc(100vh - 80px)">
        <Center w="100%" maxW={340} bg="white" top={250} position="absolute" borderRadius={5} p="6" boxShadow="0 1px 2px #ccc">

            <VStack spacing="4" align='stretch' color="black">
              <Box w="100%">
                <FormLabel htmlFor="email" >Correo</FormLabel>
                <Input id="correo" type="email" onChange={usernameHandler}/> 
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="apellido" >Contraseña</FormLabel>
                <Input id="apellido" type="password" onChange={passwordHandler}/>
              </Box>
              <Box>
              <Button w={240} p="6" type="submit" bg="teal.600" color="white" fontWeight="bold" fontSize="xl" mt="2" hover={{ bg: "teal.800" }}>Log in</Button>
              </Box>
            </VStack>
        </Center>
      </Flex>
    </Box>
  );
}

export default Login;
