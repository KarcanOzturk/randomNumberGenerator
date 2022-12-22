// const handleSubmit = (event) => {
//   event.preventDefault()
//   let minValue = Number(document.getElementById("minValue").value)
//   let maxValue = Number(document.getElementById("maxValue").value)

//   if (minValue >= maxValue) {
//     alert("Minimum deger maximum degerden yuksek olamaz")
//   } else {
//     let randomNumber =
//       Math.floor(Math.random() * (minValue - maxValue + 1)) + minValue
//     document.getElementById("result").innerHTML = randomNumber
//   }
// }

// const handleGetMinValue = () => {
//   let minValue = document.getElementById("minValue").value
//   document.getElementById("enteredMinValue").innerHTML = minValue
// }

// const handleGetMaxValue = () => {
//   let maxValue = document.getElementById("maxValue").value
//   document.getElementById("enteredMaxValue").innerHTML = maxValue
// }

const handleSubmit = (event) => {
  event.preventDefault()
  let minValue = document.getElementById("minValue")
  let maxValue = document.getElementById("maxValue")

  if (Number(minValue.value) >= Number(maxValue.value)) {
    alert("Minimum deger maximum degerden yuksek olamaz")
  } else {
    let randomNumber = Math.floor(
      Math.random() * (maxValue.value - minValue.value + 1) +
        Number(minValue.value)
    )
    document.getElementById("result").innerHTML = randomNumber
  }
}

const handleGetMinValue = () => {
  let minValue = document.getElementById("minValue").value
  document.getElementById("enteredMinValue").innerHTML = minValue
}

const handleGetMaxValue = () => {
  let maxValue = document.getElementById("maxValue").value
  document.getElementById("enteredMaxValue").innerHTML = maxValue
}
