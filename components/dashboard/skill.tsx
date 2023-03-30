import {
    Box,
    Button,
    Td,
    Th,
    Tr,
} from "@chakra-ui/react"
import { getUsers } from "../../src/request/user";
import { useEffect, useState } from "react";
import { User } from "@prisma/client";
import Table from "../table/table";
import DialogDelete from "../dialog/DialogDelete";

function SkillSection (): JSX.Element {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [page, setPage] = useState(0);
    const [users, setUsers] = useState([])
    const [dialog, setDialog] = useState<{show: boolean, user: User | null}>({
        show: false,
        user: null
    });

    // change user when page is change
    useEffect(() => {
        getUsers(page)
            .then((users: User[]) => {
                setUsers(users);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
                setError(true);
            });
    }, [page]);

    return <Box css={{margin: '1rem'}}>
        <Box css={{
            margin: '1rem 0',
            gap: '16px',
        }}>
            <Button>Créer un utilisateur</Button>
            <Button>Créer un modérateur</Button>
        </Box>
        <Box style={{
            borderRadius: '1rem',
            border: 'solid grey 1px'
            }}>
            <Table<User>
                data={users}
                caption="Users in the data base"
                loading={loading}
                error={error}
                errorRender={() => (
                    <p>error</p>
                )}
                headRender={() => (
                    <Tr>
                        <Th>Email</Th>
                        <Th>Role</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                )}
                renderItem={(user: User, key: number) => (
                    <Tr key={key}>
                        <Td>{user.email}</Td>
                        <Td>{user.role}</Td>
                        <Td isNumeric>
                            <Button
                                bgColor={user === dialog.user ? 'red': null}
                                color={user === dialog.user ? 'white': null}
                                onClick={() => setDialog({user: user, show: true})}>Supprimer</Button>
                        </Td>
                    </Tr>
                )}/>
            <DialogDelete
                header={`Êtes-vous sûr de vouloir supprimer cet utilisateur`}
                body={`cette action ne pourra pas etre roll back dans le future le compte relier à l'email ${dialog.user?.email} ser definitivement suprimer, etes vous certain de vouloir supprimer son compte ?`}
                show={dialog.show}
                deleteLabel="Confirmer"
                deleteAction={() => setDialog({user: null, show: false})}
                cancelLabel="Annuler"
                cancelAction={() => setDialog({user: null, show: false})}
                />
        </Box>
    </Box>
}

export default SkillSection;
