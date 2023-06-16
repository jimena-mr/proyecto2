import React from 'react';
import './App.css';
import { Box,Text, Heading,Card,CardBody,CardHeader,StackDivider,Stack,HStack,  Table,Thead,Tbody,Tr,Th,
    Td,TableCaption,TableContainer, Avatar,AvatarGroup, Flex,   Editable, EditableInput, EditableTextarea, 
    EditablePreview, } from '@chakra-ui/react';


const UserProfile = ({user}) => {
    /*const {   
        nombres,
        apellidos,
        fechaNacimiento,
        carrera,
        universidad,
        ciclo,
        correo,
        sexo,
      } = user;
      */
     
    return (
        // Perfil de Usuario 
    <HStack>
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
        <Td>Curso 1</Td>
        <Td>CCurso1</Td>
      </Tr>
      <Tr>
        <Td>Curso2</Td>
        <Td>CCurso2</Td>
      </Tr>
      <Tr>
        <Td>Curso3</Td>
        <Td>CCurso3</Td>
      </Tr>
      <Tr>
        <Td>Curso4</Td>
        <Td>CCurso4</Td>
      </Tr>
      <Tr>
        <Td>Curso5</Td>
        <Td>CCurso5</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>




  </HStack>



    );
}

export default UserProfile;