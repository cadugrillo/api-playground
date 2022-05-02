package intraday

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"sync"
)

var (
	once         sync.Once
	headerKey1   string
	headerValue1 string
	headerKey2   string
	headerValue2 string
)

type Response struct {
	MetaData   ResponseHeader `json:"Meta Data"`
	TimeSeries []TimeStamp    `json:"Time Series (5min)"`
}

type ResponseHeader struct {
	Information    string `json:"1. Information"`
	Symbol         string `json:"2. Symbol"`
	LastRefreshed  string `json:"3. Last Refreshed"`
	SampleInterval string `json:"4. Interval"`
	OutputSize     string `json:"5. Output Size"`
	TimeZone       string `json:"6. Time Zone"`
}

type Data struct {
	Open   string `json:"1. open"`
	High   string `json:"2. high"`
	Low    string `json:"3. low"`
	Close  string `json:"4. close"`
	Volume string `json:"5. volume"`
}

type TimeStamp struct {
	Quote Data `json:"2022-04-29 20:00:00"`
}

func init() {
	once.Do(initialiseHeaders)
}

func initialiseHeaders() {

	headerKey1 = "X-RapidAPI-Host"
	headerValue1 = "alpha-vantage.p.rapidapi.com"

	headerKey2 = "X-RapidAPI-Key"
	headerValue2 = "764ab462cbmshaff14dc3297e656p1c769fjsnfc5cc00b176f"
}

func Get(ticker string) {

	url := "https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=" + ticker + "&datatype=json&output_size=compact"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add(headerKey1, headerValue1)
	req.Header.Add(headerKey2, headerValue2)

	res, err := http.DefaultClient.Do(req)
	if err != nil {
		fmt.Print(err.Error())
		os.Exit(1)
	}

	defer res.Body.Close()
	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(res)
	//fmt.Println(string(body))

	var responseObject Response
	json.Unmarshal(body, &responseObject)
	fmt.Println(responseObject.MetaData.Symbol)
	fmt.Println(responseObject.TimeSeries)

	//fmt.Println(len(responseObject.TimeSeries))
}
