import React from 'react'

function ResetPasswordCompletePage() {
  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-600">
    <div class="relative">
        <div class="flex flex-col w-full sm:w-96 rounded-lg border border-gray-400 bg-white shadow-lg px-4 py-6">
            <h3 class="text-2xl font-semibold mb-4">Reset Password Complete</h3>
            <p class="mb-4">Your Password has been Set, Go log In Now</p>
            <div class="mb-4">
                <button
                  class="grid w-full cursor-pointer select-none rounded-md border border-light_blue-900 bg-light_blue-900 py-2 px-5 text-center align-middle text-sm text-white-A700 shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                >
                  <a href="/login/">Log in</a>
                </button>
              </div>
        </div>
    </div>
</div>
  )
}

export default ResetPasswordCompletePage
