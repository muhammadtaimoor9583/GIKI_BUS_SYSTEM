import React from 'react'

export default function ResetPasswordSent() {
  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-600">
    <div class="relative">
        <div class="flex flex-col w-full sm:w-96 rounded-lg border border-gray-400 bg-white shadow-lg px-4 py-6">
            <h3 class="text-2xl font-semibold mb-4">Reset Password Sent</h3>
            <p class="mb-4">We have emailed you instructions for setting your password. If an account exists with the email you entered, you will receive them shortly.</p>
            <p class="mb-4">If you don't receive an email, please make sure you have entered the address you registered with and check your spam folder again.</p>
        </div>
    </div>
</div>
  )
}
