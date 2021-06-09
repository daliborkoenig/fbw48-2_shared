// Your code goes here!

import {fixRoundingErrors , calculateAspectRatio} from "./aspect-ratio.js"
import {modulo , percentage , percentageOf , difference}from "./percentage.js"

const input = document.querySelectorAll("input")
let originalWidth = 0
let originalHeight = 0
let newValue = 0
let valueType
input.forEach((element, i) => {
  element.addEventListener("input",(e)=>{
    // modulo
    if(input[i].id == "modulo_1" && input[i+1].value > 0){
      input[i+2].value = modulo(input[i].value, input[i+1].value);
    }
    if(input[i].id == "modulo_2" && input[i-1].value > 0){
      input[i+1].value = modulo(input[i-1].value, input[i].value);
    }
    // percentage
    if(input[i].id == "percentage_1"){
      input[i+2].value = percentage(input[i].value, input[i+1].value);
    }
    if(input[i].id == "percentage_2"){
      input[i+1].value = percentage(input[i-1].value, input[i].value);
    }
    // percentage of
    if(input[i].id == "percentageOf_1" && input[i-1].value > 0){
      input[i+2].value = percentageOf(input[i].value, input[i+1].value);
    }
    if(input[i].id == "percentageOf_2"){
      input[i+1].value = percentageOf(input[i-1].value, input[i].value);
    }
    // difference
    if(input[i].id == "difference_1"){
      input[i+2].value = difference(input[i].value, input[i+1].value);
    }
    if(input[i].id == "difference_2"){
      input[i+1].value = difference(input[i-1].value, input[i].value);
    }
    // aspect ratio
    if(input[i].id == "ratio_1"){
      input[i+2].value = 0
      input[i+3].value = 0
      originalWidth = input[i].value
      originalHeight = input[i+1].value
    }
    if(input[i].id == "ratio_2"){
      input[i+1].value = 0
      input[i+2].value = 0
      originalHeight = input[i].value
      originalWidth = input[i-1].value
    }
    if(input[i].id == "ratio_result-width"){
      originalHeight = input[i-1].value
      originalWidth = input[i-2].value
      newValue = input[i].value
      valueType = "w"
      input[i+1].value = calculateAspectRatio(originalWidth, originalHeight, newValue, valueType);
    }
    if(input[i].id == "ratio_result-height"){
      originalHeight = input[i-2].value
      originalWidth = input[i-3].value
      newValue = input[i].value
      valueType = "h"
      input[i-1].value = calculateAspectRatio(originalWidth, originalHeight, newValue, valueType);
    }
  })

});


