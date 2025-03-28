import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2.5 rounded-xl shadow-md transition-all duration-200",
            footerActionLink: "text-yellow-500 hover:text-yellow-400",
            card: "shadow-none",
            headerTitle: "hidden",
            headerSubtitle: "text-gray-300",
            formFieldLabel: "text-gray-300",
            formFieldInput:
              "rounded-lg border-gray-700 bg-gray-800/50 text-white focus:border-yellow-500 focus:ring focus:ring-yellow-500/20 transition-all duration-200",
            dividerLine: "bg-gray-700",
            dividerText: "text-gray-400 text-xs",
            identityPreviewText: "text-gray-300",
            identityPreviewEditButton: "text-yellow-500 hover:text-yellow-400",
            socialButtonsBlockButton: "border-gray-700 bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-200",
            socialButtonsBlockButtonText: "text-gray-300 font-medium",
            alert: "bg-amber-900/30 border-amber-800 text-amber-200",
            alertText: "text-amber-200",
            formFieldWarningText: "text-amber-400",
            formFieldErrorText: "text-rose-400",
          },
          layout: {
            socialButtonsPlacement: "bottom",
            showOptionalFields: false,
          },
        }}
      />
    </div>
  )
}

