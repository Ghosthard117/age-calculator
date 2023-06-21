export class validateBirthday {
  state = {
    day: {
      value: null,
      validator: null,
      valid: false,
    },
    month: {
      value: null,
      validator: null,
      valid: false,
    },
    year: {
      value: null,
      validator: null,
      valid: false,
    },
  }

  dateValidator = null
  timeDifferenceCalculator = null

  constructor(
    dayValidator,
    monthValidator,
    yearValidator,
    dateValidator,
    timeDifferenceCalculator
  ) {
    if (
      !dayValidator ||
      !monthValidator ||
      !yearValidator ||
      !dateValidator ||
      !timeDifferenceCalculator
    ) {
      throw new Error('You must supply all validators / functions')
    }
    const { day, month, year } = this.state
    day.validator = dayValidator
    month.validator = monthValidator
    year.validator = yearValidator
    this.dateValidator = dateValidator
    this.timeDifferenceCalculator = timeDifferenceCalculator
  }

  setDatePart(part, value) {
    const datePart = this.state[part]
    datePart.value = value
    datePart.valid = !!datePart.validator(datePart.value)
  }

  getDatePart(part) {
    return this.state[part].value
  }

  isValidPart(part) {
    return this.state[part].valid
  }

  get allPartsAreValid() {
    const { day, month, year } = this.state
    return day.valid && month.valid && year.valid
  }

  get isValidDate() {
    const { day, month, year } = this.state
    return this.dateValidator({
      day: day.value,
      month: month.value,
      year: year.value
    })
  }

  get timeDifference() {
    const { day, month, year } = this.state
    return this.timeDifferenceCalculator({
      day: day.value,
      month: month.value,
      year: year.value
    })
  }
}