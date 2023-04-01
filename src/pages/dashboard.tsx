import { useSession } from 'next-auth/react'
import { Box } from '@chakra-ui/react'
import { css } from '@emotion/react'
import DashboardItem from '../components/dashboardItem'
import { useState } from 'react'
import UserSection from '../components/dashboard/userSection'
import Head from 'next/head'
import config from '../../config'
import HomeSection from '../components/dashboard/home'
import MailSection from '../components/dashboard/mail'
import SkillSection from '../components/dashboard/skill'
import HistorySection from '../components/dashboard/history'
import AchivementSection from '../components/dashboard/achivement'

export default function Dashboard() {
  const { data: session } = useSession()
  const [section, setSection] = useState('Home')

  if (!session?.user) {
    return <p>500</p>
  } else {
    return (
      <main
        css={css`
          margin: 0;
          padding-bottom: auto;
          display: flex;
          gap: 1rem;
        `}
      >
        {/* SEO */}
        <Head>
          <title>Administration {config.seoMainSeparator} Nathan Flacher</title>
          <meta
            name="description"
            content="Administration de mon site personel"
          />
        </Head>
        <Box
          css={css`
            border-right: 1px solid black;
            color: black;
          `}
        >
          <DashboardItem
            section={section}
            setSection={setSection}
            name={'Home'}
          />
          <DashboardItem
            section={section}
            setSection={setSection}
            name={'User'}
          />
          <DashboardItem
            section={section}
            setSection={setSection}
            name={'Mail'}
          />
          <DashboardItem
            section={section}
            setSection={setSection}
            name={'Skill'}
          />
          <DashboardItem
            section={section}
            setSection={setSection}
            name={'Achievement'}
          />
          <DashboardItem
            section={section}
            setSection={setSection}
            name={'History'}
          />
        </Box>
        <Box
          css={css`
            width: 100%;
          `}
        >
          {section === 'Home' ? (
            <HomeSection />
          ) : section === 'User' ? (
            <UserSection />
          ) : section === 'Mail' ? (
            <MailSection />
          ) : section === 'Skill' ? (
            <SkillSection />
          ) : section === 'Achievement' ? (
            <AchivementSection />
          ) : section === 'History' ? (
            <HistorySection />
          ) : (
            <p>not found</p>
          )}
        </Box>
      </main>
    )
  }
}
