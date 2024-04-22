import React from "react";
import { ReactComponent as IconTwitter } from "../assets/icon-twitter.svg";




const Social = () => {
  return (
    <div className="ps5-modal-dialog">
      <h2>Hi!</h2>
      <p>
        My name is Eduardo Allegrini, I'm a Frontend Developer and this website
        is a side project I made as a study of PlayStation 5 UX
      </p>
      <p>
        I would really appreciate it if you could share this page through your
        social channels
      </p>
      <div className="ps5-btn-group">
        <a
          target="_blank"
          rel="noreferrer"
          title="Twitter"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
          href="https://twitter.com/intent/retweet?tweet_id=1334921677340372998"
          // href="https://twitter.com/intent/follow?screen_name=edalgrin&tw_p=followbutton"
        >
          <IconTwitter />
        </a>
      </div>
      <h2>Thank you! 💙</h2>
      {/* <div className="ps5-btn-group"> */}
      {/* <a
          href="https://twitter.com/intent/follow?screen_name=edalgrin&tw_p=followbutton"
          target="_blank"
          //   rel="noopener"
          title="Twitter"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
        >
          <IconTwitter />
        </a> */}

      {/* <a
          href="https://codepen.io/edalgrin"
          target="_blank"
        //   rel="noopener"
          title="Codepen"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
        >
          <IconCodepen />
        </a>

        <a
          href="https://github.com/edalgrin"
          target="_blank"
        //   rel="noopener"
          title="Github"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
        >
          <IconGithub />
        </a>

        <a
          href="https://linkedin.com/in/edalgrin/"
          target="_blank"
        //   rel="noopener"
          title="Linkedin"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
        >
          <IconLinkedin />
        </a>

        <a
          href="https://youtube.com/channel/UCkz8V_-rSVY19BcXk-gQRuA/featured"
          target="_blank"
        //   rel="noopener"
          title="Youtube"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
        >
          <IconYoutube />
        </a>

        <a
          href="https://medium.com/@edalgrin"
          target="_blank"
        //   rel="noopener"
          title="Medium"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
        >
          <IconMedium />
        </a> */}
      {/* </div> */}
    </div>
  );
};

export default Social;
