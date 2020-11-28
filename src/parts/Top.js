import React, { Component, useState } from "react";
import { Apps, Games, Images } from "../database.js";
import Search from "./Search.js";
import "./Top.scss";
// const iconUser = "http://eduardoallegrini.com/static/media/logo.9ba6744a.svg";
import iconUser from "../assets/icon-user.png";

const classNames = require("classnames");
const GamesAll = Object.values(Games);

const topLeftMenu = [
  {
    label: "Games",
    url: "#games",
    content: [
      {
        app: Games.astro,
        lists: [
          {
            type: "gallery",
            title: "Media",
            items: [Images.astro1, Images.astro2, Images.astro3],
          },
          {
            type: "games",
            title: "More like this",
            items: [Games.spider, Games.astro, Games.astro],
          },
        ],
      },
      {
        app: Games.destruction,
        lists: [
          {
            type: "gallery",
            title: "Media",
            items: [Images.astro1, Images.astro2, Images.astro3],
          },
        ],
      },
      {
        app: Apps.explore,
        lists: [
          {
            type: "games",
            title: "All the games",
            items: GamesAll,
          },
        ],
      },
      { app: Games.sackboy },
    ],
  },
  {
    label: "Media",
    url: "#media",
    content: [{ app: Apps.store }, { app: Apps.explore }],
  },
];

const User = () => {
  return (
    <div className="ps5-modal-dialog">
      <h2>Follow me</h2>
      <div>
        <a
          href="https://twitter.com/edalgrin"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
        >
          <svg
            width="101"
            height="100"
            viewBox="0 0 101 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M71.1559 38.4722L71.5843 38.1557C72.7192 37.3175 73.7715 36.3624 74.7222 35.3104C73.6692 35.5998 72.5865 35.8143 71.4796 35.9498L70.8356 34.1046C72.0885 33.3368 73.1638 32.294 73.9785 31.0569C72.5338 31.6873 71.0124 32.171 69.4324 32.4895L68.8799 32.6009L68.4985 32.1859C66.6934 30.2217 64.1305 29 61.2972 29C55.8647 29 51.4227 33.5066 51.4227 39.1061C51.4227 39.9049 51.5103 40.6775 51.6794 41.4156L51.9751 42.7056L50.6534 42.6376C41.8691 42.1861 34.0261 38.1177 28.5221 31.8659C28.0691 33.0254 27.8185 34.2907 27.8185 35.6167C27.8185 39.1325 29.5691 42.2288 32.2205 44.0362L35.0567 45.9696L31.6259 45.862C30.2956 45.8202 29.0204 45.5526 27.8366 45.0986C28.4445 49.3292 31.6128 52.6975 35.6557 53.5244L35.723 55.4677C34.7236 55.7453 33.6719 55.8948 32.5878 55.8948C32.4235 55.8948 32.2602 55.8913 32.0978 55.8844C33.7079 59.1194 36.9663 61.3388 40.721 61.4098L43.4856 61.4621L41.3271 63.1903C37.7803 66.0299 33.3899 67.8254 28.6025 68.1211C32.4501 69.9657 36.7401 71 41.2706 71C60.5859 71 71.2092 54.6645 71.2092 40.3957C71.2092 39.9284 71.1998 39.4645 71.1794 39.0043L71.1559 38.4722ZM26.492 68.1538C25.8481 67.7949 25.2179 67.4134 24.6025 67.0105C25.3139 67.0962 26.0359 67.1462 26.7655 67.1603C26.9089 67.163 27.0525 67.1644 27.1965 67.1644C31.7465 67.1644 35.9719 65.7491 39.4744 63.3244C39.8943 63.0337 40.3037 62.7286 40.7021 62.4096C40.1995 62.4001 39.7052 62.3558 39.2214 62.2789C35.5078 61.6888 32.4146 59.1806 30.946 55.777C30.7942 55.4253 30.6599 55.0641 30.5439 54.6945C30.9081 54.7661 31.2781 54.8195 31.6537 54.8531C31.9614 54.8806 32.2728 54.8948 32.5878 54.8948C32.8052 54.8948 33.0211 54.8883 33.2354 54.8753C33.9989 54.8293 34.7416 54.7024 35.4553 54.5042C34.7428 54.3584 34.0555 54.1415 33.4007 53.8609C29.7735 52.3066 27.146 48.7995 26.7759 44.6303C26.7462 44.296 26.731 43.9574 26.731 43.6152C26.731 43.5656 26.731 43.5202 26.7326 43.4735C26.8177 43.5219 26.9035 43.5691 26.99 43.6152C27.2338 43.7452 27.483 43.866 27.7372 43.9772C28.3812 44.259 29.0574 44.4794 29.7586 44.6305C30.3739 44.763 31.0084 44.8421 31.6573 44.8625C31.1516 44.5178 30.676 44.1307 30.2351 43.7062C28.1308 41.6802 26.8185 38.8025 26.8185 35.6167C26.8185 33.9742 27.1695 32.415 27.7958 31.0116C27.9454 30.6763 28.1107 30.35 28.2907 30.0336C28.5148 30.3145 28.7436 30.5914 28.9769 30.8642C34.1102 36.8662 41.429 40.863 49.6664 41.5679C50.0109 41.5974 50.357 41.6211 50.7047 41.639C50.6287 41.3073 50.5677 40.9698 50.5223 40.6273C50.4562 40.1302 50.4227 39.6225 50.4227 39.1061C50.4227 32.9743 55.2926 28 61.2972 28C64.4252 28 67.2506 29.3502 69.2348 31.5092C71.1928 31.1145 73.0571 30.4542 74.7901 29.5663C75.2493 29.331 75.6994 29.0797 76.1395 28.8132C75.9793 29.3242 75.7837 29.8189 75.5558 30.2946C74.9438 31.5715 74.0984 32.7105 73.0772 33.6548C72.5486 34.1437 71.9729 34.5805 71.3581 34.9572C72.1015 34.8662 72.8333 34.738 73.5516 34.5739C74.3502 34.3915 75.132 34.1648 75.8948 33.8956C76.4755 33.6907 77.0451 33.4613 77.6025 33.2081C77.2592 33.7333 76.8941 34.2436 76.5089 34.7372C75.2608 36.3367 73.8007 37.7619 72.1784 38.9601C72.1995 39.4362 72.2092 39.915 72.2092 40.3957C72.2092 55.0733 61.2716 72 41.2706 72C35.9145 72 30.8834 70.6016 26.492 68.1538Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

class Top extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "--:--",
    };
  }

  componentDidMount() {
    this.handleClick(0);
    this.tick();
    this.clock = setInterval(() => this.tick(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  tick() {
    const today = new Date();
    let minutes = today.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    this.setState({
      time: today.getHours() + ":" + minutes,
    });
  }

  handleClick(current) {
    const content = topLeftMenu[current].content;

    if (content) {
      let apps = [];
      let lists = [];

      content.map((item, i) => {
        let app = item.app;
        let list = item.lists;
        if (app) {
          apps.push(item.app);
        }
        if (list) {
          lists.push(item.lists);
        }
      });

      if (!apps.length) {
        apps = false;
      }

      if (!lists.length) {
        lists = false;
      }

      this.props.onClickMenu({
        apps: apps,
        lists: lists,
        top: current,
      });
    }
  }

  render() {
    const topRightMenu = [
      {
        label: "search",
        url: "#search",
        content: <i className="material-icons">search</i>,
        modalContent: <Search onClickMenu={(e) => this.props.onClickMenu(e)} />,
      },
      {
        label: "settings",
        url: "#settings",
        content: <i className="material-icons">settings</i>,
        modalContent: (
          <div className="ps5-modal-dialog">
            <h2>Settings</h2>
          </div>
        ),
      },
      {
        label: "user",
        url: "#user",
        content: <img src={iconUser} alt="" />,
        modalContent: <User />,
      },
      {
        label: "clock",
        url: "#clock",
        content: "clock",
      },
    ];

    return (
      <div className="ps5-top">
        <ul>
          {topLeftMenu.map((item, i) => {
            return (
              <li key={i}>
                <a
                  href={item.url}
                  className={classNames("ps5-top-btn", {
                    active: this.props.top === i,
                  })}
                  onClick={() => this.handleClick(i)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <ul>
          {topRightMenu.map((item, i) => {
            let clock = item.content === "clock";

            return (
              <li key={i}>
                <a
                  href={item.url}
                  title={item.label}
                  className={
                    clock ? "ps5-top-btn active" : "ps5-btn ps5-btn-mono"
                  }
                  onClick={() => {
                    this.props.onClickModal(item.modalContent);
                  }}
                >
                  {clock ? this.state.time : item.content}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Top;
