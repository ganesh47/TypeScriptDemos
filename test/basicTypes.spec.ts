import {extracted} from "../examples/basic-types/scripts/basicTypes"
import "mocha"
import "chai"

import jsdom from "mocha-jsdom"

describe("test basic types",()=>
{

  it(" should pass",()=>{
    extracted()
  })
})
