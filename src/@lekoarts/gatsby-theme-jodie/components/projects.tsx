/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { IGatsbyImageData, GatsbyImage, getSrc } from "gatsby-plugin-image"
import Layout from "./layout"
import Seo from "@lekoarts/gatsby-theme-jodie/src/components/seo"
import GridItem from "@lekoarts/gatsby-theme-jodie/src/components/grid-item"
import locales from "@lekoarts/gatsby-theme-jodie/src/locales"
import { visuallyHidden } from "@lekoarts/gatsby-theme-jodie/src/styles/utils"
import { motion } from "framer-motion"
import Image from "next/image"

export type JodieProjectsProps = {
  projects: {
    nodes: {
      shortTitle: string
      slug: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }[]
  }
}

const Projects: React.FC<PageProps<JodieProjectsProps>> = ({ data: { projects } }) => (
  <Layout>
    <h1 sx={visuallyHidden} data-testid="page-title">
      {locales.projects}
    </h1>
    <div
      sx={{
        display: `grid`,
        gridTemplateColumns: [`fr`],
        gridAutoRows: [`90vw`, `80vw`,`70vw`, `50vw`, `50vw`, `50vw`, `50vw`, `50vw`],
      }}
    >
      {projects.nodes.length > 0 ? (
        projects.nodes.map((project) => (
          <GridItem to={project.slug} key={project.slug} data-testid={project.shortTitle}>
            <span>{project.shortTitle}</span>
            <GatsbyImage
              image={project.cover.childImageSharp.gatsbyImageData}
              alt=""
              layout="fixed"
              placeholder="blurred"
            />
          </GridItem>
        ))
      ) : (
        <div sx={{ padding: 3 }}>No projects found at the location defined for "projectsPath"</div>
      )}
    </div>
  </Layout>
)

export default Projects

export const Head: HeadFC<JodieProjectsProps> = ({ location }) => <Seo title="Projects" pathname={location.pathname} />
