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
            <a href={data.site.siteMetadata.spotify}>
                <img style={{width: 50}} alt="spotify" src={spotify}/></a>
            <a href={data.site.siteMetadata.apple}>
                <img style={{width: 50}} alt="apple" src={apple}/></a>
            <a href={data.site.siteMetadata.google}>
                <img style={{width: 50}} alt="google" src={google}/></a>
            <a href={data.site.siteMetadata.youtube}><img style={{width: 50}} alt="facebook" src={youtube}/></a>
            <a href={data.site.siteMetadata.facebook}><img style={{width: 50}} alt="facebook" src={facebook}/></a>
            <a href={data.site.siteMetadata.twitter}><img style={{width: 50}} alt="facebook" src={twitter}/></a>
        </div>
    )
}
