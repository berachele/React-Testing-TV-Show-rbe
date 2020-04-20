import React from "react"
import {render} from "@testing-library/react"
import Episodes from "./Episodes"

/*What to test

Props:
    Episodes:
    - empty array (starting state before API call)
    - array of episodes
*/

test("Episodes render without errors", () => {
    render(<Episodes episodes={[]}/>)
})