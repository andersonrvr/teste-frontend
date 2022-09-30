import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
  padding: 15px;
  h1 {
    color: #495057;
  }
  form {
    display: flex;
    flex-direction: column;
    /* width: 90%; */
    margin: 0 auto;
  }
  form > label {
    color: #6c757d;
    margin-top: 20px;
  }
  form > span {
    font-size: 12px;
    color: #ced4da;
    margin-top: 3px;
    font-weight: 600;
  }
  form > input {
    height: 35px;
    border-radius: 3px;
    border: 1px solid #dee2e6;

    margin-top: 5px;
  }
  form > input:focus {
    outline: none;
    border-color: #0d6efd;
  }
  form > input::-webkit-outer-spin-button,
  form > input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  form > p {
    color: #6c757d;
  }
  form > button {
    width: 150px;
    height: 35px;
    background-color: #0d6efd;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 15px;
  }
  form > button:hover {
    cursor: pointer;
    background-color: #0d7ffd;
  }
  .dontBreakDiv {
    height: 35px;
    margin-top: 15px;
  }
  .error {
    color: red;
  }

  /* the follow code has been gotten from w3schools*/
  /* Customize the label (the container) */
  .daysAnticipation {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: #6c757d;
  }
  .containerLabel {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 15px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .containerLabel input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .containerLabel:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .containerLabel input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .containerLabel input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .containerLabel .checkmark:after {
    left: 7px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  @media (min-width: 768px) {
    width: 70%;

    form {
      width: 60%;
    }
  }
`;
