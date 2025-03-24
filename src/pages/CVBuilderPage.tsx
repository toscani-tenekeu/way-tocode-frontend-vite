"use client"

import { useState } from "react"
import PageTitle from "../components/common/PageTitle"
import CVForm from "../components/cv-builder/CVForm"
import PaymentModal from "../components/cv-builder/PaymentModal"
import type { CVData } from "../types"

const CVBuilderPage = () => {
  const [cvData, setCVData] = useState<CVData | null>(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)

  const handleFormSubmit = (data: CVData) => {
    setCVData(data)
    setShowPaymentModal(true)
  }

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false)
    setPaymentComplete(true)
  }

  const handleDownloadPDF = () => {
    // In a real app, this would generate a PDF using a library like jsPDF or react-pdf
    console.log("Generating PDF with data:", cvData)
    alert("PDF downloaded successfully!")
  }

  return (
    <div className="p-4 md:p-6">
      <PageTitle title="CV Builder" description="Create a professional resume in minutes" />

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mb-2">
              1
            </div>
            <h3 className="font-medium mb-2">Fill the Form</h3>
            <p className="text-gray-600 text-sm">Enter your personal details, experience, education, and skills</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mb-2">
              2
            </div>
            <h3 className="font-medium mb-2">Make Payment</h3>
            <p className="text-gray-600 text-sm">Complete a one-time payment to unlock PDF generation</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mb-2">
              3
            </div>
            <h3 className="font-medium mb-2">Download PDF</h3>
            <p className="text-gray-600 text-sm">Get your professionally formatted CV as a downloadable PDF</p>
          </div>
        </div>
      </div>

      {paymentComplete ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">Your CV is ready to download as a PDF.</p>
            <button
              onClick={handleDownloadPDF}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
            >
              Download PDF
            </button>
          </div>
        </div>
      ) : (
        <CVForm onSubmit={handleFormSubmit} />
      )}

      {showPaymentModal && (
        <PaymentModal
          onClose={() => setShowPaymentModal(false)}
          onPaymentSuccess={handlePaymentSuccess}
          amount={9.99}
        />
      )}
    </div>
  )
}

export default CVBuilderPage

