import styled from 'styled-components'

export default styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid grey;
  background: white;
  z-index: 3;

  & .links {
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 0.2em 2em;

    & a {
      text-decoration: none;
      color: black;
    }

    & .products_link {
      border: 1px solid black;
      border-right: none;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      padding: 0.5em;
    }

    & .orders_link {
      border: 1px solid black;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      padding: 0.5em;
    }

    & .account_link {
      border: 1px solid black;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      padding: 0.5em;
    }

    & .active {
      background-color: #fcbf49;
      color: white;
    }
  }
`
