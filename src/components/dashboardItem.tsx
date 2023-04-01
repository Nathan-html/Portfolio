import { css } from '@emotion/react'

interface Props {
  name: string
  setSection: Function
  section: string
}

export default function DashboardItem({ name, setSection, section }: Props) {
  return (
    <p
      css={css({
        padding: '20px 64px 20px 20px',
        fontSize: '20px',
        transition: 'all .4s ease',
        '&:hover': {
          background: 'rgba(0, 0, 0, 0.075)',
        },
        '&.active': {
          background: 'rgba(0, 0, 0, 0.1)',
        },
      })}
      className={section === name ? 'active' : ''}
      onClick={() => setSection(name)}
    >
      {name}
    </p>
  )
}
