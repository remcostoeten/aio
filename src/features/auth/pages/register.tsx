"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthForm } from "../components/auth-form"
import { AuthLayout } from "@/components/authentication/auth-layout"
import { useAuth } from "@/shared/context/auth-context"
import { Link } from "react-router-dom"

export function RegisterPage() {
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user, navigate])

  return (
    <AuthLayout
      title="Create an account"
      subtitle={
        <>
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-[#3ECF8E] hover:text-[#3ECF8E]/80 transition-colors"
          >
            Sign in
          </Link>
        </>
      }
    >
      <AuthForm type="register" />
    </AuthLayout>
  )
}