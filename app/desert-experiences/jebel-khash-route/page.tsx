import Image from "next/image"
import type { Metadata } from "next"
import { BookingForm } from "@/components/booking-form"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs" // Fixed the import name (lowercase 'q')
import { TourCard } from "@/components/tour-card"
import { ImageLightbox } from "@/components/image-lightbox"

export const metadata: Metadata = {
  title: "Jebel Khash Route | Wadi Rum Desert Tours & Experiences",
  description:
    "Explore the magnificent Jebel Khash Route in Wadi Rum with our expert Bedouin guides. Experience breathtaking views, ancient inscriptions, and unique rock formations on this unforgettable desert adventure.",
}

export default function JebelKhashRoutePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/wadi-rum-landscape.jpg"
          alt="Jebel Khash Route in Wadi Rum desert"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Jebel Khash Route</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Discover the hidden treasures and breathtaking landscapes of Wadi Rum's Jebel Khash
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Details */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-amber-600">Tour Overview</h2>
            <p className="mb-6 text-gray-700">
              The Jebel Khash Route offers one of the most spectacular hiking experiences in Wadi Rum. This lesser-known
              trail takes you through diverse landscapes, from narrow canyons to expansive valleys, with breathtaking
              views of the surrounding desert. The route is named after Jebel Khash, a distinctive mountain formation
              that serves as a landmark for Bedouin travelers.
            </p>

            <div className="mb-8">
              <ImageLightbox
                src="/images/wadi-rum-landscape.jpg"
                alt="Panoramic view of Jebel Khash in Wadi Rum"
                width={800}
                height={500}
                className="rounded-lg w-full h-auto object-cover mb-6"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">What to Expect</h3>
            <p className="mb-6 text-gray-700">
              Our experienced Bedouin guides will lead you through this remarkable journey, sharing their knowledge of
              the area's geology, history, and cultural significance. You'll discover ancient rock inscriptions, hidden
              springs, and unique rock formations that tell the story of this ancient land.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ImageLightbox
                src="/images/hiking-trekking.jpg"
                alt="Hiking through the canyons of Jebel Khash"
                width={400}
                height={300}
                className="rounded-lg w-full h-64 object-cover"
              />
              <ImageLightbox
                src="/images/rock-climbing.jpg"
                alt="Rock formations along the Jebel Khash Route"
                width={400}
                height={300}
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">Highlights</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Trek through diverse desert landscapes with stunning panoramic views</li>
              <li>Discover ancient Nabataean and Thamudic inscriptions</li>
              <li>Explore narrow canyons and hidden water sources</li>
              <li>Learn about Bedouin navigation techniques and desert survival</li>
              <li>Enjoy a traditional Bedouin tea break in a scenic location</li>
              <li>Photograph unique rock formations and natural arches</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 text-amber-600">Itinerary</h3>
            <div className="mb-8">
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">Morning Departure</h4>
                <p className="text-gray-700">
                  We'll start from Rum Village and drive to the starting point of our trek. After a brief orientation,
                  we'll begin our journey through the desert landscape.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">Canyon Exploration</h4>
                <p className="text-gray-700">
                  Our route takes us through narrow canyons with towering sandstone walls, where you'll see ancient
                  inscriptions and unique geological formations.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">Lunch Break</h4>
                <p className="text-gray-700">
                  Enjoy a delicious lunch in the shade of a natural rock shelter, with panoramic views of the
                  surrounding mountains.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-bold mb-2">Afternoon Trek</h4>
                <p className="text-gray-700">
                  Continue through varied terrain, reaching viewpoints that offer spectacular vistas of Wadi Rum's
                  landscape before returning to our starting point.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">What to Bring</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Comfortable hiking shoes with good grip</li>
              <li>Sun protection (hat, sunglasses, sunscreen)</li>
              <li>Light, breathable clothing (plus a layer for cooler seasons)</li>
              <li>Water bottle (we provide additional water)</li>
              <li>Camera for capturing the spectacular views</li>
              <li>Small backpack for personal items</li>
            </ul>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-amber-600">Tour Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-1">Duration:</p>
                  <p className="text-gray-700 mb-4">6-7 hours</p>

                  <p className="font-semibold mb-1">Difficulty:</p>
                  <p className="text-gray-700 mb-4">Moderate (requires reasonable fitness)</p>

                  <p className="font-semibold mb-1">Group Size:</p>
                  <p className="text-gray-700 mb-4">2-8 people</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Price:</p>
                  <p className="text-gray-700 mb-4">
                    140 JOD for 1 person
                    <br />
                    90 JOD per person for 2-3 persons
                    <br />
                    80 JOD per person for 4+ persons
                  </p>

                  <p className="font-semibold mb-1">Includes:</p>
                  <p className="text-gray-700 mb-4">Guide, transportation, lunch, water, tea</p>

                  <p className="font-semibold mb-1">Languages:</p>
                  <p className="text-gray-700">English, Arabic</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-center">Book This Tour</h3>
              <BookingForm tourName="Jebel Khash Route" />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <FAQSection faqs={desertExperienceFaqs.slice(0, 6)} />
        </div>

        {/* Related Tours */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TourCard
              title="Half-Day Jeep Tour"
              slug="half-day-jeep-tour"
              description="Explore the highlights of Wadi Rum in a 4x4 jeep tour with our experienced Bedouin guides."
              price={35}
              duration="4 hours"
              image="/images/half-day-jeep.jpg"
            />
            <TourCard
              title="Jebel Burdah Climbing"
              slug="jebel-burdah-climbing"
              description="Challenge yourself with a climb to the famous rock bridge of Jebel Burdah."
              price={85}
              duration="Full day"
              image="/images/rock-climbing.jpg"
            />
            <TourCard
              title="Trekking Adventure"
              slug="trekking"
              description="Discover Wadi Rum on foot with our guided trekking tours through the desert landscape."
              price={65}
              duration="6-8 hours"
              image="/images/hiking-trekking.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
