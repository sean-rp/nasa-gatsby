import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SpaceFacts from "../components/spaceFacts"
import SpaceStation from "../components/spaceStation"

const IndexPage = ({ data }) => (
  <Layout>
    <Link to="/details">
      {/* TODO use media_type value to provide fallback when not an image */}
      <Hero image={data.allNasaData.edges[0].node} />
    </Link>
    <SpaceFacts />
    <SpaceStation />
  </Layout>
)

// TODO figure out how to fetch unstructured data
export const query = graphql`
  query {
    allNasaData(filter: {type: {eq: "apod"}}) {
      edges {
        node {
          explanation
          media_type
          title
          url
        }
      }
    }
  }
`

export default IndexPage
