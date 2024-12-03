import Image from 'next/image'

const testimonials = [
    {
        quote: "This platform has completely transformed how we work. It's incredible!",
        author: "Sarah Johnson",
        role: "CEO at TechCorp",
        avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
    },
    {
        quote: "The best investment we've made for our business processes.",
        author: "Michael Chen",
        role: "Product Manager",
        avatar: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg"
    },
    {
        quote: "Exceptional support and fantastic features. Highly recommended!",
        author: "Emily Rodriguez",
        role: "Senior Developer",
        avatar: "https://api.uifaces.co/our-content/donated/1H6anRIh.jpg"
    }
]

export default function Testimonials() {
    return (
        <section className="bg-muted/50 py-20">
            <div className="container px-4">
                <h2 className="mb-12 text-center text-3xl font-bold">What Our Users Say</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="rounded-lg bg-background p-6 shadow-sm">
                            <p className="mb-4 text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold">{testimonial.author}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 
