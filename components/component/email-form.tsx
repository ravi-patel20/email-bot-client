'use client';

import { CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FormEvent } from "react"

export function EmailForm() {
  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget);
    const requestObject = {};
    formData.forEach((value, key) => requestObject[key] = value);
    const response = await fetch(`${process.env.NEXT_PUBLIC_QUOTES_BASE_URL}/api/request_quote`, {
      method: 'POST',
      body: JSON.stringify(requestObject),
    })
 
    const data = await response.json();

    console.log(data);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Compose Email</CardTitle>
          <CardDescription>Fill out the form below to send an email.</CardDescription>
        </CardHeader>
        <form className="space-y-4 px-4 py-6" onSubmit={submitForm}>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="Enter your email" required type="email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="Enter the subject" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea className="min-h-[150px]" id="message" name="message" placeholder="Enter your message" required />
          </div>
          <Button type="submit">Send</Button>
        </form>
      </Card>
    </div>
  )
}
