import React from "react"
// import Img from "gatsby-image"
// TODO use gatsby-image

const Hero = ({ image }) => {
  const {
    explanation,
    url,
    title,
  } = image;
  return (
    <>
      <h1>Pic of the Day</h1>
      <figure>
        <span>{title}</span>
        <img src={url} alt={title} />
        <figcaption>{explanation}</figcaption>
      </figure>
    </>
  )
}

// TODO add typing

export default Hero