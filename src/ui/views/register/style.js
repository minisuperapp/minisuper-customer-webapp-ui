import styled from 'styled-components'

export default styled.div`
  display: flex;
  align-self: center;
  border: 1px solid black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 0 20px 20px 20px;
  font-family: Arial, Helvetica, sans-serif;

  .header {
    background-color: #6f8f72;
    padding: 0.5em 1em;
    width: 95%;
    text-align: center;
    color: whitesmoke;
    font-weight: bold;
  }

  & .body {
    display: table;

    .name {
      display: table-row;
    }

    .email {
      display: table-row;
    }

    .password {
      display: table-row;
    }

    label {
      display: table-cell;
      padding-top: 20px;
      padding-right: 10px;
    }

    input {
      display: table-cell;
      width: auto;
      padding: 5px;
    }
  }
  & .buttons {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;

    .ok {
      cursor: pointer;
      font-size: 16px;
      background-color: #6f8f72;
      color: whitesmoke;
      font-weight: bold;
      padding: 10px;
    }

    .cancel {
      cursor: pointer;
      font-size: 14px;
    }
  }
`