import React, {useState,useEffect} from 'react';
import './App.css';
import { Box,Text, Heading,Card,CardBody,CardHeader,StackDivider,Stack, Table,Thead,Tbody,Tr,Th,
    Td,TableCaption,TableContainer, Avatar,AvatarGroup, Flex,   Editable, EditableInput, EditablePreview, Grid,GridItem } from '@chakra-ui/react';



const UserProfile = ({user}) => {
    //const {   nombres,apellidos,fechaNacimiento, carrera,universidad,ciclo,correo,sexo,} = user;   
      
  /*const [codigoA,setcodigoA]= useState("");
    const [nombreA,setnombreA]= useState("");
  function codigoHandler(event){
    console.log(event.target.value)
    setcodigo(event.target.value) 
  }
  function nombreHandler(event){
    setnombre(event.target.value)
  }*/

  const [data, setdata] = useState({
    codigo: "",
    nombre: "",
  });

// Using useEffect for single rendering
useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch("/cursos_a").then((res) =>
    res.json().then((data) => {
      // Setting a data from api
      setdata({
        codigo: data.codigo,
        nombre: data.nombre,
        // Aquí puedes agregar más propiedades si las necesitas
      });
    })
  );
}, []);




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
        <Text pt='2' fontSize='lg'>
          <Editable defaultValue='Curso1'>
            <EditablePreview />
            <EditableInput />
          </Editable>
          </Text>
        </Td>
        <Td>
        <Text pt='2' fontSize='lg'>
          <Editable defaultValue='CCurso1'>
            <EditablePreview />
            <EditableInput />
          </Editable>
          </Text>
        </Td>
      </Tr>
      <Tr>
        <Td>
        <Text pt='2' fontSize='lg'>
          <Editable defaultValue='Curso2'>
            <EditablePreview />
            <EditableInput />
          </Editable>
          </Text>
        </Td>
        <Td>
        <Text pt='2' fontSize='lg'>
          <Editable defaultValue='CCurso2'>
            <EditablePreview />
            <EditableInput />
          </Editable>
          </Text>
        </Td>
      </Tr>
      <Tr>
        <Td>
        <Text pt='2' fontSize='lg'>
          <Editable defaultValue='Curso3'>
            <EditablePreview />
            <EditableInput />
          </Editable>
          </Text>
        </Td>
        <Td>
        <Text pt='2' fontSize='lg'>
          <Editable defaultValue='CCurso3'>
            <EditablePreview />
            <EditableInput />
          </Editable>
          </Text>
        </Td>
      </Tr>
      <Tr>
        <Td>
        <Text pt='2' fontSize='lg'>
          <Editable defaultValue='Curso4'>
            <EditablePreview />
            <EditableInput />
          </Editable>
          </Text>
        </Td>
        <Td>
        <Text pt='2' fontSize='lg'>
          <Editable defaultValue='CCurso4'>
            <EditablePreview />
            <EditableInput />
          </Editable>
          </Text>
        </Td>
      </Tr>
      <Tr>
        <Td>
        <Text pt='2' fontSize='lg'>
          <Editable defaultValue='Curso5'>
            <EditablePreview />
            <EditableInput />
          </Editable>
          </Text>   
        </Td>
        <Td>
        <Text pt='2' fontSize='lg'>
          <Editable defaultValue='CCurso5'>
            <EditablePreview />
            <EditableInput />
          </Editable>
          </Text>
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