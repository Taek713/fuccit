/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
var page = 1;

function scrollDown() {

    document.getElementsByClassName("cont" + page)[0].className = "cont up cont" + page;

    page++;
    document.getElementsByClassName("cont" + page)[0].className = "cont currentPage cont" + page;

}

function scrollUp() {

    document.getElementsByClassName("cont" + page)[0].className = "cont down cont" + page;

    page--;
    document.getElementsByClassName("cont" + page)[0].className = "cont currentPage cont" + page;

}

// const text = document.querySelector(".text");
// text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
// const animation = anime.timeline({
//     targets: ".text span",
//     easing: "easeInOutExpo",
//     loop: true
// });

// setTimeout(function() {
//     animation
//         .add({
//             rotate: function() {
//                 return anime.random(-360, 360);
//             },
//             translateX: function() {
//                 return anime.random(-500, 500);
//             },
//             translateY: function() {
//                 return anime.random(-500, 500);
//             },
//             duration: 5000,
//             delay: anime.stagger(20)
//         })

//     .add({
//         rotate: 0,
//         translateX: 0,
//         translateY: 0,
//         duration: 5000,
//         delay: anime.stagger(20)
//     });
// }, 5500);
export default SEO
