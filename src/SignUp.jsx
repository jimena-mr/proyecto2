import React, { useState, useEffect } from 'react'
import './App.css';
import { HStack,Flex,Center,Input,FormControl,Button,Box,Radio,RadioGroup,FormLabel  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SignUp = () => {

const [alumnos, setAlumnos] = useState([]);
const [newAlumno, setNewAlumno] = useState({
    nombres: '',
    apellidos: '',
    fnacimiento: '',
    carrera: '',
    universidad: '',
    ciclo: 0,
    correo: '',
    password: '',
    sexo: '',
});

  useEffect(() => {
    async function getAlumnos() {
      const response = await fetch('http://127.0.0.1:5000/alumnos', {
        method: 'GET',
      });
      const json = await response.json();
      setAlumnos(json);
    }
    return () => {
      getAlumnos();
    };
  }, []);

  const handleInputChange = (event) => {
    setNewAlumno((prevAlumno) => ({
      ...prevAlumno,
      [event.target.name]: event.target.value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setAlumnos((prevAlumnos) => [...prevAlumnos, newAlumno]);
    setNewAlumno({ nombres: '', apellidos: '', fnacimiento: '', carrera: '', universidad: '', ciclo: 0, correo: '', password: '', sexo: ''});
  };

  return (   // onSubmit={handleSubmit()}>
        
    <Box h="100vh"  onSubmit={handleSubmit}>
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
                <Input id="nombre" value={newAlumno.nombres} onChange={handleInputChange} />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="apellido">Apellidos</FormLabel>
                <Input id="apellido" type="text" value={newAlumno.apellidos} onChange={handleInputChange} />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nasc">Fecha de Nacimiento</FormLabel>
                <Input id="nasc" type="date" value={newAlumno.fnacimiento} onChange={handleInputChange} />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="carrera">Carrera</FormLabel>
                <Input id="carrera" value={newAlumno.carrera} onChange={handleInputChange}  />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="uni">Universidad</FormLabel>
                <Input id="universidad" type="text" value={newAlumno.universidad} onChange={handleInputChange}  />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="ciclo">Ciclo</FormLabel>
                <Input id="ciclo" type="number" value={newAlumno.ciclo} onChange={handleInputChange} />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="email">Correo</FormLabel>
                <Input id="correo" type="email" value={newAlumno.correo} onChange={handleInputChange} />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="contra">Contraseña</FormLabel>
                <Input id="password" type="password" value={newAlumno.password} onChange={handleInputChange} />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel>Sexo</FormLabel>
                <RadioGroup value={newAlumno.sexo} onChange={handleInputChange}>
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