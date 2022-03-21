import { ADD_NEW_BOARD } from "../types";

const initialState = {
  "CDN Links": {
    Bootstrap: {
      CSS: [
        `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous\n">`,
      ],
      Bundle: [
        '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>\n',
      ],
      Seperat: [
        `<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>\n`,
        `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>`,
      ],
    },
    "Material UI": {
      Emotion: [`npm install @mui/material @emotion/react @emotion/styled`],
      "Styled-components": [
        "npm install @mui/material @mui/styled-engine-sc styled-components",
      ],
      Icons: [`npm install @mui/icons-material`],
    },
  },
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_BOARD: {
      return {
        ...state,
        [action.payload.category]: {
          ...state[action.payload.category],
          ...action.payload.boardData,
        },
      };
    }
    default:
      return state;
  }
};

export default boardReducer;
