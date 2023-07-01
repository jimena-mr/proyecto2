import React, {useState,useEffect} from 'react';
import './App.css';
import { Box,Text, Heading,Card,CardBody,CardHeader,StackDivider,Stack, Table,Thead,Tbody,Tr,Th,
    Td,TableCaption,TableContainer, Avatar,AvatarGroup, Flex,   Editable, EditableInput, EditablePreview, Grid,GridItem } from '@chakra-ui/react';



const UserProfile = ({user}) => {     
  /*
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function usernameHandler(event) {
    console.log(event.target.value);
    setUsername(event.target.value);
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  */

  /*
  const [nombreA, setNombreA] = useState('');
  const [codigoA, setCodigoA] = useState('');

  function nombreAHandler (event) {
    console.log(event.target.value);
    setNombreA(event.target.value);
  } 

  useEffect(() => {
    async function getCursosA() {
      const response = await fetch('http://127.0.0.1:5000/cursos_a', {
        method: 'GET',
      });
      const json = await response.json();
      setPlayers(json);
    }
    return () => {
      getCursosA();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCursosA((prevCursosA) => [...prevCursosA, newCursoA]);
    setNewPlayer({ codigo: '', nombre: ''});
  };

  */



    return (
        // Perfil de Usuario 
  <Grid   h='600px' templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)' gap={4}>
    
    <GridItem rowSpan={2} colSpan={1}>
    <Card>
    <CardHeader>
      <Heading size='md'>Perfil de Usuario</Heading>
    </CardHeader>
  
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
      <Flex justify="center" p={4}>
        <Box>
          <AvatarGroup spacing='1rem'>
            <Avatar bg='teal.500' size="xl"/>
          </AvatarGroup>
        </Box>
      </Flex>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Nombres
          </Heading>
          <Text pt='2' fontSize='sm'>
            Nombre del estudiante
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Apellidos
          </Heading>
          <Text pt='2' fontSize='sm'>
            Apellidos del estudiante
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Fecha de Nacimiento
          </Heading>
          <Text pt='2' fontSize='sm'>
            Fecha de Nacimiento del estudiante
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
           Carrera
          </Heading>
          <Text pt='2' fontSize='sm'>
            Carrera del estudiante
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Universidad
          </Heading>
          <Text pt='2' fontSize='sm'>
            Universidad del estudiante
          </Text>
        </Box>  
      </Stack>
    </CardBody>
  </Card>
  </GridItem>

  <GridItem rowSpan={2} colSpan={1}>
  <Card>
  <CardHeader>
      <Heading size='md'> Perfil de Usuario </Heading>
    </CardHeader>
    <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Ciclo
          </Heading>
          <Text pt='2' fontSize='sm'>
            Ciclo universitario
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Correo
          </Heading>
          <Text pt='2' fontSize='sm'>
            Correo institucional
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Contraseña
          </Heading>
          <Text pt='2' fontSize='sm'>
            Password: 123832
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Sexo
          </Heading>
          <Text pt='2' fontSize='sm'>
            Masculino\Femenino
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Créditos llevados
          </Heading>
          <Text pt='2' fontSize='sm'>
          <Editable defaultValue='Editar créditos'>
            <EditablePreview />
            <EditableInput />
          </Editable>
          </Text>
        </Box>
        </Stack>
    </CardBody>
    </Card>
  </GridItem>

  <GridItem rowSpan={2} colSpan={2}>
    <TableContainer>
  <Table variant='simple' color="black" bg="white">
    <TableCaption>Cursos disponibles</TableCaption>
    <Thead>
      <Tr>
        <Th>Cursos a enseñar</Th>
        <Th>Cursos a aprender</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
        <label>
        Nombre:
        <input type="text"  />
        </label>
        </Td>
        <Td>
        <label>
        Nombre:
        <input type="text" />
        </label>
        </Td>
      </Tr>
      
    </Tbody>
  </Table>
</TableContainer>
</GridItem>



  </Grid>



    );
}

export default UserProfile;