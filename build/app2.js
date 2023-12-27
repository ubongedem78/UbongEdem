"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const md = require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true,
});
const githubUsername = "Ubongedem78";
const ProjectRepos = ["UbongEdem", "ShuttleQ", "helpmeoutAPI", "TPSS_2023"];
const websiteUrl = "https://wr78.me";
const twitterUrl = "https://twitter.com/usernameissnull";
const linkedinUrl = "https://linkedin.com/in/ubongedem78/";
function generateMarkdown() {
    return __awaiter(this, void 0, void 0, function* () {
        const websiteBadge = `[![Website Badge](https://img.shields.io/badge/-Website-3B7EBF?style=for-the-badge&logo=amp&logoColor=white)](${websiteUrl})`;
        const linkedinBadge = `[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-3B7EBF?style=for-the-badge&logo=Linkedin&logoColor=white)](${linkedinUrl})`;
        const twitterBadge = `[![Twitter Badge](https://img.shields.io/badge/-@usernameissnull-3B7EBF?style=for-the-badge&logo=x&logoColor=white)](${twitterUrl})`;
        const profileCountBadge = `![Profile Views Count Badge](https://komarev.com/ghpvc/?username=${githubUsername}&style=for-the-badge)`;
        const githubStatsCardDark = `[![GitHub-Stats-Card-Dark](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=FFF&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-dark-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-dark-mode-only)`;
        const githubStatsCardLight = `[![GitHub-Stats-Card-Light](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=474A4E&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-light-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-light-mode-only)`;
        const technologiesUsed = `
  <h3 align="left">Languages and Technologies Used:</h3>
  <a href="https://nodejs.org" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
      alt="nodejs"
      width="40"
      height="40"
    /> </a
  ><a href="https://expressjs.com" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
      alt="express"
      width="40"
      height="40"
    /> </a
  ><a
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
      alt="javascript"
      width="40"
      height="40"
  /></a>
  <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
    <img
      src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
      alt="git"
      width="40"
      height="40"
    /> </a
  ><a href="https://graphql.org" target="_blank" rel="noreferrer">
    <img
      src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
      alt="graphql"
      width="40"
      height="40"
  /></a>
  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
      alt="html5"
      width="40"
      height="40"
    /> </a
  ><a href="https://jestjs.io" target="_blank" rel="noreferrer">
    <img
      src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
      alt="jest"
      width="40"
      height="40"
    /> </a
  ><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
      alt="mongodb"
      width="40"
      height="40"
  /></a>
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
      alt="typescript"
      width="40"
      height="40"
    /> </a
  ><a href="https://www.arduino.cc/" target="_blank" rel="noreferrer"
    ><img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-original-wordmark.svg"
      alt="arduino"
      width="40"
      height="40"
    /> </a
  ><a href="https://aws.amazon.com/" target="_blank" rel="noreferrer"
    ><img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg"
      alt="aws"
      width="40"
      height="40"
    /> </a
  ><a href="https://www.docker.com/" target="_blank" rel="noreferrer"
    ><img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
      alt="docker"
      width="40"
      height="40" /></a
  ><a href="https://www.rabbitmq.com/" target="_blank" rel="noreferrer"
    ><img
      src="https://www.rabbitmq.com/img/logo-rabbitmq.svg"
      alt="rabbitmq"
      width="80"
      height="40"
  /></a>
  <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
      alt="postgresql"
      width="40"
      height="40"
    />
  </a>
  <a
    href="https://github.com/features/actions"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
      alt="github-actions"
      width="40"
      height="40"
    />
  </a>
  <a href="https://typeorm.io/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png"
      alt="typeorm"
      width="80"
      height="40"
    />
  </a>
  <a href="https://golang.org/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"
      alt="golang"
      width="40"
      height="40"
    />
  </a>
  `;
        const projectDetails = `
  <h3 align="left">Projects</h3>
  <div align="left">
    Here are some of my projects that may or may not be pinned:
    <ul>
      <li>
        <a
          href="https://github.com/ubongedem78/UbongEdem"
          target="_blank"
          rel="noopener noreferrer"
          >ubongedem78/UbongEdem</a
        >: My automated GitHub Profile README built using TypeScript and
        GitHub Actions.
      </li>
      <li>
        <a
          href="https://github.com/ubongedem78/ShuttleQ"
          target="_blank"
          rel="noopener noreferrer"
          >ubongedem78/ShuttleQ</a
        >: A Management Application for Badminton Lovers
      </li>
      <li>
        <a
          href="https://github.com/ubongedem78/helpmeoutAPI"
          target="_blank"
          rel="noopener noreferrer"
          >ubongedem78/helpmeoutAPI</a
        >: Backend for HelpMeOut- A Chrome Extension
      </li>
      <li>
        <a
          href="https://github.com/ubongedem78/TPSS_2023"
          target="_blank"
          rel="noopener noreferrer"
          >ubongedem78/TPSS_2023</a
        >: A Transaction Payment Splitting Service
      </li>
      <li>More coming soon :).</li>
    </ul>
  </div>
  `;
        const quickTips = `
    <h3 align="left">Quick Tips</h3>
    <p align="left">
      💬 How to reach me: DM
      <a href="https://twitter.com/usernameissnull">@usernameissnull</a> on X
      (Twitter).
    </p>
    <p align="left">
      📬 Where to find me: Send a game request on
      <a href="https://lichess.org/@/wrapid78">LICHESS</a>.
    </p>
    <p align="left">
      📖 Book recommendations:
      <a href="https://www.amazon.com/Good-They-Cant-Ignore-You/dp/1455509124"
        >So Good They Can't Ignore You by Cal Newport</a
      >
      and <a href="https://bit.ly/45r1kBH">Atomic Habits by James Clear</a>.
    </p>
  `;
        const markdownText = `<div align="center">\n

    # Hi 👋🏾, I'm Ubong Edem</h1>\n
    <p align="left">I have a fervor for conceptualizing and bringing to fruition, cutting-edge products designed to streamline processes, automate tasks, and elevate overall quality of life. I am focused on transforming ideas into impactful, user-centric experiences.</p>\n
    <hr>\n
    ${technologiesUsed}\n
    <hr>\n
    ${githubStatsCardDark}\n
    ${githubStatsCardLight}\n
    </div>\n
    <hr>\n
    ${projectDetails}\n
    <hr>\n
    ${quickTips}\n
    <hr>\n
    <p>${websiteBadge} ${linkedinBadge} ${twitterBadge} ${profileCountBadge}</p>\n
    <p ><img src="https://github-readme-streak-stats.herokuapp.com/?user=ubongedem78&" alt="Ubongedem78" /></p>\n
  </div>\n`;
        const result = md.render(markdownText);
        fs.writeFile("README.md", result, (error) => {
            if (error)
                throw new Error(`Something went wrong: ${error}.`);
            console.log(`✅ README.md file was succesfully generated.`);
        });
    });
}
generateMarkdown();
