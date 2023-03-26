/** @jsx jsx */
import { jsx, Link, useThemeUI, get } from "theme-ui"
import { readableColor } from "polished"
import useSiteMetadata from "@lekoarts/gatsby-theme-jodie/src/hooks/use-site-metadata"
import { Facebook, Twitter, Linkedin, Pocket, Mail } from 'react-feather';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PocketShareButton,
  EmailShareButton,
} from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faDev, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ bg }: { bg: string }) => {
  const { siteTitle } = useSiteMetadata()
  const {
    theme: { rawColors },
  } = useThemeUI()

  const text = readableColor(
    bg,
    rawColors!.textMuted as string | undefined,
    rawColors!.textMutedLight as string | undefined
  )

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `fixed`],
        width: (t) => [`100%`, `100%`, `100%`, get(t, `sidebar.normal`), get(t, `sidebar.wide`)],
        bottom: 0,
        color: text,
        fontSize: 0,
        p: [3, 3, 4],
        background: "#0B0512",
        a: {
          color: readableColor(bg),
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        variant: `footer`,
      }}
    >
      <div>

      <div>
      &nbsp;&nbsp;
        <a href={`https://www.linkedin.com/in/danielphiri`} style={{fontSize: `1.5em`,padding: `0em 0.5em`, color: `#2D64BC`}} >
          
          <FontAwesomeIcon icon={faLinkedin} strokeWidth={1.25} />
        </a>
        <a href={`https://github.com/danielphiri`} style={{fontSize: `1.5em`,padding: `0em 0.5em`}}>
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href={`https://twitter.com/phirisworld`} style={{fontSize: `1.5em`,padding: `0em 0.5em`, color: `#4A99E9`}} >
          <FontAwesomeIcon icon={faTwitter}/>
        </a>
      </div>
      </div>
      <div>
        &copy; {new Date().getFullYear()}, {"Daniel Phiri"}.
      </div>
    </footer>
  )
}

export default Footer
