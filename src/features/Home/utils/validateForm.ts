import {FormError, FormFields, isFormErrorField, SignUpFormData} from '../Home'

export type ValidateFormResult =
  | {valid: true}
  | {
      valid: false
      error: FormError
    }

export function validateForm(data: SignUpFormData): ValidateFormResult {
  let hasError = false
  const newError: FormError = {}

  /**
   * Start - Validate required fields
   */
  const requiredFields: FormFields[] = [
    'firstName',
    'lastName',
    'email',
    'euResident',
  ]

  requiredFields.forEach(key => {
    if (data[key]) {
      return
    }

    if (!isFormErrorField(key)) {
      // Make typescript happy 😁
      throw new Error('Invalid key for FormErrorFields object')
    }

    hasError = true

    newError[key] = 'Required'
  })
  /**
   * End - Validate required fields
   */

  /**
   * Start - Validate email format
   */
  if (data.email) {
    /**
     * @see https://stackoverflow.com/a/46181
     */
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!re.test(data.email.toLowerCase())) {
      newError.email = 'Invalid email'
      hasError = true
    }
  }
  /**
   * End - Validate email format
   */

  /**
   * Start - Validate required one of the checkboxes
   */
  const requiredOneOfFields: FormFields[] = ['advances', 'alerts', 'other']

  const oneOf = requiredOneOfFields.findIndex(key => !!data[key])

  if (oneOf === -1) {
    newError.oneOf =
      'You need to check at least one of the options: "ADVANCES", "ALERTS", "OTHER COMMUNICATIONS"'
    hasError = true
  }
  /**
   * End - Validate required one of the checkboxes
   */

  if (hasError) {
    return {
      valid: false,
      error: newError,
    }
  }

  return {valid: true}
}
