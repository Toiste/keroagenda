import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import robot from "@/assets/robotwpp.png"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full">
      <header className="px-4 lg:px-6 h-14 flex items-center w-full">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <PhoneIcon className="h-6 w-6 text-green-500" />
          <span className="sr-only">Kero Agenda</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Testimonials
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Schedule WhatsApp Meetings with Kero Agenda
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Easily schedule meetings and appointments with your clients and colleagues through WhatsApp. Kero
                    Agenda makes it simple and efficient.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/auth/login"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Start Scheduling
                  </Link>
                </div>
              </div>
              <Image
                src={robot}
                width={550}
                height={550}
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Kero Agenda offers a range of features to make scheduling meetings and appointments a breeze.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Automated Scheduling</h3>
                      <p className="text-muted-foreground">
                        Easily schedule meetings and appointments through WhatsApp, with automated confirmation and
                        reminders.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Availability Tracking</h3>
                      <p className="text-muted-foreground">
                        Keep track of your availability and share it with clients and colleagues to avoid scheduling
                        conflicts.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Customizable Templates</h3>
                      <p className="text-muted-foreground">
                        Create custom meeting templates to streamline your scheduling process and ensure consistency.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src={robot}
                width={550}
                height={310}
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about their experience with Kero Agenda.
                </p>
              </div>
              <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <Card className="p-6 shadow-md">
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">John Doe</p>
                          <p className="text-sm text-muted-foreground">Marketing Manager</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        "Kero Agenda has been a game-changer for our team.\n The automated scheduling and availability
                        tracking\n features have saved us so much time and hassle."
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="p-6 shadow-md">
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Jane Smith</p>
                          <p className="text-sm text-muted-foreground">Sales Representative</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        "I love how easy it is to schedule meetings with\n clients using Kero Agenda. The customizable
                        templates\n make the process so efficient."
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="p-6 shadow-md">
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Michael Johnson</p>
                          <p className="text-sm text-muted-foreground">Business Owner</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        "Kero Agenda has streamlined our scheduling process\n and helped us provide a better experience
                        for our\n clients. Highly recommended!"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have any questions or need more information? Fill out the form below and we'll get back to you as soon
                  as possible.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                  <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                  <Textarea placeholder="Message" className="max-w-lg flex-1" />
                  <Button type="submit">Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Kero Agenda. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}