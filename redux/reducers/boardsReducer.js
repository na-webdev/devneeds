import { ADD_NEW_BOARD, ADD_NEW_SET, DELETE_BOARD, DELETE_SET } from "../types";

let initialState = {
  "CDN Links": {
    Bootstrap: {
      Bundle: [
        '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>',
      ],
      CSS: [
        `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">`,
      ],
      Seperat: [
        `<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>`,
        `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>`,
      ],
    },
    "Icon and images": {
      Fontawesome: [
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />',
      ],
      "Random images": [`<img src="https://picsum.photos/800/800?random=1">`],
      "Lottie files": [
        `<lottie-player src="<URL HERE>" background="transparent"  speed="1"  style="width: 300px; height: 300px;" loop controls autoplay></lottie-player>`,
        ` <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>`,
      ],
    },
    API: {
      Axios: [
        `<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>`,
      ],
      JSON: [`'https://jsonplaceholder.typicode.com/`],
    },
  },
  "NPM installs": {
    "Material UI": {
      Emotion: [`npm install @mui/material @emotion/react @emotion/styled`],
      "Styled-components": [
        "npm install @mui/material @mui/styled-engine-sc styled-components",
      ],
      Icons: [`npm install @mui/icons-material`],
    },
    Fontawesome: {
      install: [`npm i --save @fortawesome/fontawesome-svg-core`],
      solid: [`npm i --save @fortawesome/free-solid-svg-icons`],
      regular: ["npm i --save @fortawesome/free-regular-svg-icons"],
    },

    Redux: {
      redux: [`npm i redux`],
      tools: [`npm install @reduxjs/toolkit`],
      "react-redux": [`npm install react-redux`],
    },
    tailwindcss: {
      install: [
        `npm install -D tailwindcss postcss autoprefixer`,
        `npx tailwindcss init -p`,
      ],
      config: [
        `module.exports = {content: ["./src/**/*.{js,jsx,ts,tsx}",],theme: {extend: {},},plugins: [],}`,
      ],
      css: [`@tailwind base;\n @tailwind components;\n @tailwind utilities;`],
    },
    "Three.js": {
      three: ["npm i three"],
      fiber: ["npm i @react-three/fiber"],
      drei: ["npm i @react-three/drei"],
    },
    Extra: {
      "hook form": ["npm install react-hook-form"],
      axios: ["npm i axios"],
      lodash: ["npm i lodash"],
    },
  },
};

try {
  if (localStorage && localStorage.getItem("dev-needs")) {
    initialState = JSON.parse(localStorage.getItem("dev-needs"));
  } else if (localStorage) {
    localStorage.setItem("dev-needs", JSON.stringify(initialState));
  }
} catch (error) {}

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_BOARD: {
      let newState = {
        ...state,
        [action.payload.category]: {
          ...state[action.payload.category],
          ...action.payload.boardData,
        },
      };
      localStorage.setItem("dev-needs", JSON.stringify(newState));
      return newState;
    }
    case DELETE_BOARD: {
      let newState = { ...state };
      delete newState[action.payload.category][action.payload.boardName];
      localStorage.setItem("dev-needs", JSON.stringify(newState));
      return {
        ...newState,
      };
    }
    case DELETE_SET: {
      let newState = { ...state };
      delete newState[action.payload.category];
      localStorage.setItem("dev-needs", JSON.stringify(newState));
      return {
        ...newState,
      };
    }
    case ADD_NEW_SET: {
      let newState = {
        ...state,
        [action.payload.category]: {},
      };
      localStorage.setItem("dev-needs", JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};

export default boardReducer;
