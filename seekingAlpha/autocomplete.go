package autocomplete

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"
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
	Symbols []Symbol `json:"symbols"`
}

type Symbol struct {
	Id      int    `json:"id"`
	Name    string `json:"name"`
	Slug    string `json:"slug"`
	Content string `json:"content"`
}

func init() {
	once.Do(initialiseHeaders)
}

func initialiseHeaders() {

	headerKey1 = "X-RapidAPI-Host"
	headerValue1 = "seeking-alpha.p.rapidapi.com"

	headerKey2 = "X-RapidAPI-Key"
	headerValue2 = "764ab462cbmshaff14dc3297e656p1c769fjsnfc5cc00b176f"
}

func Get(query string) Response {

	querymod := strings.Replace(query, " ", "%20", -1)

	url := "https://seeking-alpha.p.rapidapi.com/v2/auto-complete?query=" + querymod + "&type=symbols&size=5"

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

	//fmt.Println(res)
	//fmt.Println(string(body))

	var responseObject Response
	json.Unmarshal(body, &responseObject)
	data, _ := json.Marshal(&responseObject)
	fmt.Println(string(data))

	return responseObject

}
