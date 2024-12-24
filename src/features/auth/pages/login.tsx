"use client"

import { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AuthForm } from "../components/auth-form"
import { AuthLayout } from "@/components/authentication/auth-layout"
import { useAuth } from "@/shared/context/auth-context"

export function LoginPage() {
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user, navigate])

  return (
    <AuthLayout
      title="Welcome back"
      subtitle={
        <>
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-[#3ECF8E] hover:text-[#3ECF8E]/80 transition-colors"
          >
            Sign up
          </Link>
        </>
      }
    >
      <AuthForm type="login" />
    </AuthLayout>
  )
}