package main

import (
	"encoding/json"
	"log"
	"net/http"
)

func main() {
	m := map[string]string{
		"from":           "server Go",
		"Authentication": "200",
	}

	helloHandler := func(w http.ResponseWriter, req *http.Request) {

		resJson, _ := json.Marshal(m)

		w.Header().Add("Content-Type", "application/json; charset=UTF-8")
		w.Header().Add("Access-Control-Allow-Origin", "*")
		w.Header().Add("Access-Control-Allow-Credentials", "true")

		w.Write(resJson)
		w.WriteHeader(200)
	}

	http.HandleFunc("/", helloHandler)

	log.Fatal(http.ListenAndServe(":4000", nil))
}
