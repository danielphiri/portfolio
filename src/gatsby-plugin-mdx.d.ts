declare module "gatsby-plugin-mdx" {
    import * as React from "react"
  
    interface MDXRendererProps {
      children: React.ReactNode
    }
  
    export class MDXRenderer extends React.Component<MDXRendererProps> {}
  }
  