import { Box, Button, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"

function UserSection (): JSX.Element {
    return <Box css={{margin: '1rem 0'}}>
        <Box css={{
            margin: '1rem 0',
        }}>
            <Button>Créer un modérateur</Button>
        </Box>
        <Box style={{
            borderRadius: '1rem',
            border: 'solid grey 1px'
            }}>
            <TableContainer>
                <Table variant='users'>
                    <TableCaption>Users in the data base</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Email</Th>
                            <Th>Role</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>nathan.flacher.pro@gmail.com</Td>
                            <Td>administrateur</Td>
                            <Td isNumeric>
                                <Button>Supprimer</Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer> 
        </Box>
    </Box>
}

export default UserSection 