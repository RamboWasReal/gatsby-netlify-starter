import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import ThemeChanger from "../components/themeChanger"


export default ({children}) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        imageHeader
                    }
                }
            }
        `
    )
    return (
        <div className="site-wrapper">
            <Link to="/">
                <img alt="header"
                     src={data.site.siteMetadata.imageHeader}/>
            </Link>
            <header className="site-header">
                <Navigation/>
                <ThemeChanger/>
            </header>
            {children}
            <footer className="site-footer">
                <p>&copy; {new Date().getFullYear()} <a
                    className="-primary">{data.site.siteMetadata.title}</a> &bull; Powered by &nbsp;
                    <a target="_blank" rel="noreferrer" href="https://www.podboxx.com">PodBoxx</a></p>
            </footer>
        </div>
    )
}
