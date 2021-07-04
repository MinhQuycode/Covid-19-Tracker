import { Container, Typography,makeStyles } from "@material-ui/core";
import { sortBy } from "lodash";
import moment from "moment";
import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import 'moment/locale/vi'
import '@fontsource/roboto'

moment.locale('vi')

const useStyles  = makeStyles({
  solieu:{
    textAlign:"center",
    color:"red",
  }
})

function App() {
  const style = useStyles();
  const [countries, setCountries] = useState([])
  const [selectedCountryId, setSelectedCountryId] = useState('')
  const [report, setReport] = useState([])
  useEffect(()=>{
    getCountries()
    .then(res=>{
      const contries = sortBy(res.data,"Country")
      setCountries(contries)
      setSelectedCountryId("vn")
    })
  },[])

  const handleOnChange = (e) =>{
    setSelectedCountryId(e.target.value);
  }

  useEffect(() => {
    if(selectedCountryId){
    const {Slug} = countries.find((country) => country.ISO2.toLowerCase() === selectedCountryId)
    getReportByCountry(Slug)
    .then((res)=>{
      //Xóa đi item cuối cùng trong array res.data
      res.data.pop();
      setReport(res.data)
    })}
  }, [countries,selectedCountryId])
  return <Container>
      <Typography component="h2" variant="h4" className={style.solieu}>
          SỐ LIỆU COVID-19
      </Typography>
      <Typography>
          Ngày {moment().format('LLL')}
      </Typography>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountryId}/>
      <Highlight report={report}/>
      <Summary report={report} selectedCountryId={selectedCountryId}/>
    </Container>
}

export default App;
