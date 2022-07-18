package main

import (
	"io"
	"log"
	"net/http"
)

func main() {
	helloHandler := func(w http.ResponseWriter, req *http.Request) {
		io.WriteString(w, "kousuke futamura\n")
	}

	http.HandleFunc("/", helloHandler)

	log.Fatal(http.ListenAndServe(":4000", nil))
}
