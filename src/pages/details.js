import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"


const Details = ({ data }) => (
  <Layout>
    <Hero image={data.allNasaData.edges[0].node} />
  </Layout>
)

export const query = graphql`
  query {
    allNasaData(filter: {type: {eq: "apod"}}) {
      edges {
        node {
          explanation
          title
          url
        }
      }
    }
  }
`

export default Details
