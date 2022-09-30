import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f7fa;
  padding: 15px;

  .emptyText {
    color: #0d7ffd;
  }
  h2 {
    color: #0d6afd;
    margin-top: 0;
    border-bottom: 1px solid #0d9ffd;
    font-style: italic;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul > li {
    color: #0d7ffd;
    font-style: italic;
    padding: 10px 0;
    font-size: 19px;
  }
  ul > li > .currency {
    font-weight: bold;
  }
  .loadingLogo {
    width: 80px;
    margin: 40px auto;
  }
  .error {
    text-align: center;
  }
  .error > p {
    color: red;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: bold;
  }
  .error > button {
    width: 150px;
    height: 35px;
    background-color: #0d6efd;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 15px;
  }
  .error > button:hover {
    cursor: pointer;
    background-color: #0d6afd;
  }

  @media (min-width: 768px) {
    width: 40%;
    padding-top: 95px;
    h2 {
      font-size: 20px;
      width: 85%;
    }
    ul > li {
      padding-top: 25px;
    }
  }
`;
