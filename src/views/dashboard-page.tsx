'use client'

type Props = {}

export default function DashboardPage({}: Props) {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Welcome to your Dashboard
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            This is your personal dashboard where you can manage your account and view your data.
          </p>
        </div>
      </div>
    </div>
  )
}
