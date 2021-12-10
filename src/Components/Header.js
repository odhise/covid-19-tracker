import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Cards from "./Cards"
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import CountrySelect from "./CountrySelect";



const Container=styled.div` 
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

@media(max-width:768px;){
    flex-wrap:wrap;
    width:100%;

}

`

const HeaderTitle=styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:1em;
font-size:5rem;
margin:1em 0;

@media(max-width:768px){
    font-size:2.5rem;
}


`

const Logo=styled.div`
color:red;`



const Title=styled.div`
font-family: 'Rubik Beastly', cursive;
font-weight:300px;

`
const SummaryContainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:3em;
text-align:center;

@media(max-width:768px){
gap:1rem;
}
`
 





const Header=()=>{



    const [Countries, setCountries] =useState([]);
    const [selectedCountry, SetSelectedCountry] = useState();

    useEffect(()=>{
        fetchCountries()



    

    },[])


    const fetchCountries=()=>{

const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://api.covid19api.com/countries", requestOptions)
            .then(response => response.json())
            .then(result =>setCountries(result))
            .catch(error => console.log('error', error));

        
    }
    return(
        <Container>
            <HeaderTitle>

            <Logo>< CoronavirusIcon  style={{fontSize:"5rem"}}/></Logo>
            <Title><span style={{color:"green"}}> Covid-19</span><span style={{color:"red"}}>  Tracker</span></Title>
            </HeaderTitle>
            <CountrySelect Countries={Countries} SetSelectedCountry={SetSelectedCountry}/>
            <SummaryContainer >
                <Cards  Title="500,000" Updates="Confirmed New Cases" Cases="30" color="red" type="New Cases"/>
                <Cards  Title="200,000" Updates="Recovered" Cases="23" color="green" type="Recovered"/>
                <Cards  Title="100,000" Updates="Deaths" Cases="7" color="grey" type="Deaths"/>

            </SummaryContainer>
        </Container>

    )
}




export default Header