/** @jsx jsx */
import { jsx, get } from "theme-ui"
import * as React from "react"
import { Global } from "@emotion/react"
import Wrapper from "@lekoarts/gatsby-theme-jodie/src/components/layout-wrapper"
import Sidebar from "./sidebar"
import Footer from "./footer"
import { SkipNavTarget, SkipNavTrigger } from "@lekoarts/gatsby-theme-jodie/src/components/skip-nav"

type LayoutProps = { children: React.ReactNode; color?: string }

const Layout = ({ children, color = `#ffffff` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(t) => ({
        "*,*:after,*:before": {
          boxSizing: `border-box`,
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          background: get(t, `colors.primary`),
          color: get(t, `#715696`),
        },
        "ul > li > code, ol > li > code, p > code": {
          color: `#715696`,
          background: `#ffffff`,
          padding: 2,
        },
        "@media(max-width: 600px)": {
          html: {
            fontSize: `16px`,
          },
        },
      })}
    />
    <SkipNavTrigger />
    <Wrapper>
      <Sidebar bg={color} />
      <main sx={{ gridColumnStart: [1, 1, 1, 2] }}>
        <SkipNavTarget />
        {children}
      </main>
      <Footer bg={color} />
    </Wrapper>
  </React.Fragment>
)

export default Layout
