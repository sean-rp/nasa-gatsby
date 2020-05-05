import React from "react"
import { StaticQuery, graphql } from "gatsby"

const SpaceFacts = () => (
  <StaticQuery
    query={graphql`
      query SpaceFactsItemsQuery {
        allSpaceFactsItemsJson {
          edges {
            node {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <h1>Space Facts</h1>
        {/* TODO carouselize */}
        <ul>{buildList(data)}</ul>
      </>
    )}
  />
);

// TODO make utils and move this
const buildList = (data) => {
  const spaceFactsArray = [];
  data.allSpaceFactsItemsJson.edges.forEach((item, index) => {
    spaceFactsArray
      .push(
        <li key={index}>
          <div>{item.node.title}</div>
          <div>{item.node.description}</div>
        </li>
      );
  });
  return spaceFactsArray;
}

// TODO add typing

export default SpaceFacts
