"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-20"
    >
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8">Contact</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-8">
              I'm interested in collaborations related to sustainability, wildlife conservation, and design research.
              Feel free to reach out to discuss potential projects.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-widest mb-2">Email</h3>
                <p className="text-sm">tejnagesh@gmail.com</p>
              </div>

              <div>
                <h3 className="text-sm font-medium uppercase tracking-widest mb-2">Location</h3>
                <p className="text-sm">Amsterdam, Netherlands</p>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" className="bg-neutral-800 border-neutral-700" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" className="bg-neutral-800 border-neutral-700" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="bg-neutral-800 border-neutral-700"
                />
              </div>

              <Button type="submit" className="bg-green-600 text-black hover:bg-green-500">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
