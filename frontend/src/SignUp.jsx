import React from 'react'
import './App.css';
//import { useState } from 'react';
import { HStack,Flex,Center,Input,FormControl,Button,Box,Radio,RadioGroup,FormLabel  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SignUp = () => {
/*    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        age: '',
        major: '',
        university: '',
        email: '',
        password: '',
    });

    const onSubmit = (data) => {
    console.log(data);
    }

    //const handleSubmit = (e) => {
    //e.preventDefault();
    //console.log('Formulario Enviado!');
    //}
*/
  return (   // onSubmit={handleSubmit()}>
        
    <Box h="100vh">
        <div className="button-container">
            <Link to="/">
                <Button colorScheme='teal'>VOLVER A INICIO</Button>
                </Link>
                <Link to="/login">
                <Button colorScheme='teal'>LOG IN</Button>
            </Link>
        </div>
      <Flex align="center" justify="center" h="calc(100vh - 150px)">
        <Center w="100%" maxW={840} bg="white" top={100} position="absolute" borderRadius={5} p="6" boxShadow="0 1px 2px #ccc">

          <FormControl display="flex" flexDir="column" gap="4" color="black">
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nombre">Nombres</FormLabel>
                <Input id="nombre" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="apellido">Apellidos</FormLabel>
                <Input id="apellido" type="text" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nasc">Fecha de Nacimiento</FormLabel>
                <Input id="nasc" type="date" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="carrera">Carrera</FormLabel>
                <Input id="carrera" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="uni">Universidad</FormLabel>
                <Input id="universidad" type="text" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="ciclo">Ciclo</FormLabel>
                <Input id="ciclo" type="number"/>
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="email">Correo</FormLabel>
                <Input id="correo" type="email"/>
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="contra">Contraseña</FormLabel>
                <Input id="password" type="password"/>
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel>Sexo</FormLabel>
                <RadioGroup defaultValue="Masculino">
                  <HStack spacing="24px">
                    <Radio value="Masculino">Masculino</Radio>
                    <Radio value="Femenino">Femenino</Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </HStack>
            <HStack justify="center">
              <Button w={240} p="6" type="submit" bg="teal.600" color="white" fontWeight="bold" fontSize="xl" mt="2" hover={{ bg: "teal.800" }}>Enviar</Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
}

export default SignUp;