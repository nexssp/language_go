//  Nexss PROGRAMMER 2.0.0 - Auto Hot Key
// Default template for JSON Data

package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"
	"runtime"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	var res map[string]interface{}

	for scanner.Scan() {

		if err := json.Unmarshal([]byte(scanner.Text()), &res); err != nil {
			panic(err)
		}

		res["HelloFromGo"] = runtime.Version()
		NexssStdout, _ := json.Marshal(res)
		fmt.Println(string(NexssStdout))
	}
}
