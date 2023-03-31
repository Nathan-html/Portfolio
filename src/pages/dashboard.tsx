import {useSession} from "next-auth/react";
import {Box} from "@chakra-ui/react";
import {css} from "@emotion/react";
import DashboardItem from "../components/dashboardItem";
import {useState} from "react";

export default function Dashboard () {
    const { data: session } = useSession();
    const [section, setSection] = useState('Home');

    if (!session?.user) {
        return <p>500</p>
    } else  {
        return <main css={css`
                margin: 0;
                padding-bottom: auto;
                display: flex;
                gap: 1rem;
            `}>
            <Box css={css`
                border-right: 1px solid black;
                color: black;
            `}>
                <DashboardItem section={section} setSection={setSection} name={'Home'} />
                <DashboardItem section={section} setSection={setSection} name={'User'} />
                <DashboardItem section={section} setSection={setSection} name={'Mail'} />
                <DashboardItem section={section} setSection={setSection} name={'Skill'} />
                <DashboardItem section={section} setSection={setSection} name={'Achievement'} />
                <DashboardItem section={section} setSection={setSection} name={'History'} />
            </Box>
            <Box>
                {
                    section === 'Home' ?
                        <p>home</p>
                    : section === 'User' ?
                        <p>user</p>
                    : section === 'Mail' ?
                        <p>mail</p>
                    : section === 'Skill' ?
                        <p>Skill</p>
                    : <p>not found</p>
                }
            </Box>
        </main>
    }
}