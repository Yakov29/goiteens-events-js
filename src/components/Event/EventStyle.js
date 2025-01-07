import styled from "styled-components";

export const EventStyle = styled.ul`
width: 90%;
margin-left: auto;
background-color: rgb(217, 230, 233);
margin-right: auto;
outline: 3px solid black;
display: flex;
list-style: none;
flex-wrap: wrap;
gap: 100px;
text-align: center;
justify-content: center;
padding-top: 20px;
padding-bottom: 20px;


& li {
//    outline: 5px solid black;
//    padding: 10px;
background-color: rgb(247, 230, 218);
border: 2px solid rgb(216, 189, 168);
padding: 20px;
width: 22%;
margin:0;
}
`