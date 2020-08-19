import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  margin-top: 1em;
  margin-right: 0.5em;
  margin-left: 0.5em;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08);
  height: 10em;
  width: 20em;

  & .image {
    margin-left: 0.5em;
    margin-right: 0.5em;
    height: 80%;
    width: 100%;
    max-width: 100px;
    background: #ffffff no-repeat right;
    background-size: contain;
  }

  & .main_panel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #ffffff;
    width: 100%;
  }

  & .text_title {
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
    text-align: left;
    font-family: SFProText-Bold, serif;
    font-size: 20px;
    color: #212121;
  }

  & .price {
    margin-left: 0.5em;
    font-family: SFProTextRegular, sans-serif;
    font-size: 18px;
    color: #212121;
    clear: right;
  }

  & button {
    margin-top: 0.5em;
    font-family: SFProTextRegular, serif;
    font-size: 16px;
    border-radius: 10px;
    width: 100%;
    max-width: 100px;
    cursor: pointer;
    box-shadow: 0 2px 8px 0 rgb(73, 162, 91);
    color: white;
    background-color: #49a25b;
  }
`