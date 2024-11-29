import HolidayUniIcon from 'components/Logo/HolidayUniIcon'
import { SVGProps } from 'components/Logo/UniIcon'
import styled from 'lib/styled-components'

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 88 86"
      fill="none"
      onClick={onClick}
      cursor="pointer"
    >
      <path
        d="M72.2731 23.8504L44.0044 35.1389V53.2444L56.5373 48.2416V42.2492L72.2731 35.9635V41.956V55.6267L44.0044 66.9152V85.0207L87.9997 67.4466V49.3411V35.6703V17.5648L72.2731 23.8504Z"
        fill="#BF8400"
      />
      <path
        d="M0.000488281 17.5741L15.7456 23.8689L35.4641 15.9889L59.5087 6.38641V6.19399L44.005 0L0.000488281 17.5741Z"
        fill="#FFBC00"
      />
      <path
        d="M28.2876 28.8076L44.0884 35.1115L63.8719 27.2133L88.0001 17.5741V17.3817L72.45 11.1694L28.2876 28.8076Z"
        fill="#FFBC00"
      />
      <path
        d="M15.7358 23.8504L0 17.5648V49.3411V67.4466L44.0045 85.0207V66.9152L15.7358 55.6267V23.8504Z"
        fill="#FFD966"
      />
      <path d="M28.2876 28.8075V46.913L44.0048 53.1895V35.084L28.2876 28.8075Z" fill="#FFD966" />
    </svg>
  )
}

const Container = styled.div<{ clickable?: boolean }>`
  position: relative;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
  display: flex;
  justify-content: center;
  align-items: center;
`

type NavIconProps = SVGProps & {
  clickable?: boolean
  onClick?: () => void
}

export const NavIcon = ({ clickable, onClick, ...props }: NavIconProps) => (
  <Container clickable={clickable}>
    {HolidayUniIcon(props) !== null ? <HolidayUniIcon {...props} /> : <Logo onClick={onClick} />}
  </Container>
)
