import React from "react"
import spotify from "super-tiny-icons/images/svg/spotify.svg";
import apple from "super-tiny-icons/images/svg/itunes_podcasts.svg"
import google from "super-tiny-icons/images/svg/google_podcasts.svg"
import facebook from "super-tiny-icons/images/svg/facebook.svg"
import twitter from "super-tiny-icons/images/svg/twitter.svg"
import youtube from "super-tiny-icons/images/svg/youtube.svg"
import {graphql, useStaticQuery} from "gatsby";

export default (props) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        twitter
                        apple
                        google
                        spotify
                        facebook
                        youtube
                    }
                }
            }
        `
    )
    return (
        <div className="navigation">
            {data.site.siteMetadata.spotify !== "null" ?  <a href={data.site.siteMetadata.spotify} rel="noreferrer" target="_blank">
                <img style={{width: 50}} alt="spotify" src={spotify}/></a> : ""}
            {data.site.siteMetadata.apple !== "null" ? <a href={data.site.siteMetadata.apple} rel="noreferrer" target="_blank">
                <img style={{width: 50}} alt="apple" src={apple}/></a> : ""}
            {data.site.siteMetadata.google !== "null" ? <a href={data.site.siteMetadata.google} rel="noreferrer" target="_blank">
                <img style={{width: 50}} alt="google" src={google}/></a> : ""}
            {data.site.siteMetadata.youtube !== "null" ? <a href={data.site.siteMetadata.youtube} rel="noreferrer" target="_blank"><img style={{width: 50}} alt="facebook" src={youtube}/></a> : ""}
            {data.site.siteMetadata.facebook !== "null" ? <a href={data.site.siteMetadata.facebook} rel="noreferrer" target="_blank"><img style={{width: 50}} alt="facebook" src={facebook}/></a> : ""}
            {data.site.siteMetadata.twitter !== "null" ? <a href={data.site.siteMetadata.twitter} rel="noreferrer" target="_blank"><img style={{width: 50}} alt="facebook" src={twitter}/></a> : ""}
        </div>
    )
}
