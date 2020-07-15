import styled from 'styled-components'

export default styled.div`
  .buttonContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 300px;
    margin: 1em auto;
  }

  .backButton {
    border-color: #a24d0d;
    box-shadow: 0 2px 8px 0 rgb(162, 77, 13);
    font-family: SFProTextRegular, serif;
    font-size: 18px;
    border-radius: 18px;
    width: 100%;
    max-width: 200px;
    color: #a24d0d;
    cursor: pointer;
    align-items: center;
    background-color: white;
  }
`