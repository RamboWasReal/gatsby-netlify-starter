import React from "react"
import spotify from "super-tiny-icons/images/svg/spotify.svg";
import apple from "super-tiny-icons/images/svg/itunes_podcasts.svg"
import google from "super-tiny-icons/images/svg/google_podcasts.svg"
import facebook from "super-tiny-icons/images/svg/facebook.svg"
import twitter from "super-tiny-icons/images/svg/twitter.svg"
import youtube from "super-tiny-icons/images/svg/youtube.svg"


export default (props) => (
    <div className="navigation">
        <a href="https://open.spotify.com/show/2cbhkhbIIXulqxICRew3sL?si=uKeaaAcTRPye9JUqD8Ea2A">
            <img style={{width: 50}} alt="spotify" src={spotify}/></a>
        <a href="https://podcasts.apple.com/us/podcast/parent-et-amis/id1493207704">
            <img style={{width: 50}} alt="apple" src={apple}/></a>
        <a href="https://podcasts.google.com/?feed=aHR0cHM6Ly9hcGkucG9kYm94eC5jb20vY2hhbm5lbHMvMTk4L3Jzcw">
            <img style={{width: 50}} alt="google" src={google}/></a>
        <a href="https://youtube.com"><img style={{width: 50}} alt="facebook" src={youtube}/></a>
        <a href="https://facebook.com/podboxxmedia"><img style={{width: 50}} alt="facebook" src={facebook}/></a>
        <a href="https://twitter.com"><img style={{width: 50}} alt="facebook" src={twitter}/></a>
    </div>

)
