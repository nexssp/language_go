package main

import (
	"fmt"
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello")
}

func main() {
	http.HandleFunc("/", handler)
	fmt.Println("server started..")

	log.Fatal(http.ListenAndServe(":8090", nil))
}
