'use client';

import Link from "next/link"
import { JSX, SVGProps, useEffect, useState } from "react"

export function Quotes() {
  const [quoteList, setQuoteList] = useState<{name: string, url: string}[]>([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_QUOTES_BASE_URL}/api/quotes`, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => setQuoteList(data.files))

  }, []);

  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="mb-8 text-3xl font-bold">Generated Quotes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          quoteList.map((quote, index) => (
            <Link
              className="group block rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow dark:border-gray-700 dark:border-gray-800"
              download
              href={quote?.url}
              key={index}
            >
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <span className="text-sm font-medium">{quote?.name}</span>
                </div>
                <DownloadIcon className="h-5 w-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
              </div>
            </Link>
          )
        )}
      </div>
    </main>
  )
}

function DownloadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function FileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}
