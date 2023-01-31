// Nexss PROGRAMMER 2.x - GoLang
// Default template for JSON Data

package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	var res map[string]interface{}

	for scanner.Scan() {

		if err := json.Unmarshal([]byte(scanner.Text()), &res); err != nil {
			panic(err)
		}

		res["test"] = "test"
		NexssStdout, _ := json.Marshal(res)
		fmt.Println(string(NexssStdout))
	}
}
