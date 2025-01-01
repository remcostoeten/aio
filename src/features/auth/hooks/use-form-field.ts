import { useState } from 'react'

interface FormFieldState<T> {
  value: T
  error: string | null
  touched: boolean
}

export function useFormField<T>(
  initialValue: T,
  validate: (value: T) => string | null
) {
  const [state, setState] = useState<FormFieldState<T>>({
    value: initialValue,
    error: null,
    touched: false,
  })

  const onChange = (value: T) => {
    setState((prev) => ({
      ...prev,
      value,
      error: prev.touched ? validate(value) : null,
    }))
  }

  const onBlur = () => {
    setState((prev) => ({
      ...prev,
      touched: true,
      error: validate(prev.value),
    }))
  }

  return {
    value: state.value,
    error: state.error,
    touched: state.touched,
    onChange,
    onBlur,
  }
}