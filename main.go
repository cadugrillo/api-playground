package main

import (
	autocomplete "api-playground/seekingAlpha"
	"fmt"
)

var (
	res autocomplete.Response
)

func main() {

	res = autocomplete.Get("hp")
	fmt.Println(res)
}
