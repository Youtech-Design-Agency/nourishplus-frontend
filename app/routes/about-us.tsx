import FooterComponent from "~/components/landing-page/footer"
import HeaderComponent from "~/components/landing-page/header"

const AboutUsPage = () => {
  return (
    <div>
        <HeaderComponent/>
        <div className="p-5 lg:p-20 flex flex-col gap-5">
            <div className="flex flex-col-reverse gap-5 lg:flex-row justify-between">
                <div className="flex flex-col gap-5 text-text-primary-dark">
                    <h1 className="text-[24px] text-center lg:text-left font-semibold">Seamlessly Delivering Your <br className="hidden lg:block"/> Favourite Groceries to Your Door</h1>
                    <p>Our goal is to make food as affordable as possible at good prices through a <br className="hidden lg:block"/> monthly subscription service. With every box delivered to a subscriber, a <br className="hidden lg:block"/> food item gets donated to a person in need.</p>
                </div>
                <img src="/motto-logo.png" alt="Motto" className="w-40 lg:w-auto h-auto mx-auto lg:mx-0"/>
            </div>
            <img src="/black-girl-food-blog.png" alt="Black Girl With Food" className="w-full lg:mt-10 h-auto rounded-lg object-cover"/>
        </div>
        <div className="bg-[#E7F6EC] text-text-primary-dark flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 p-5 lg:p-20 mt-10">
            <div className="flex flex-col">
                <span className="text-center lg:text-left text-sm uppercase">Our mission</span>
                <h1 className="text-[24px] text-center lg:text-left font-semibold">To make food delivery <br className="hidden lg:block"/> fast, reliable, and <br className="hidden lg:block"/> enjoyable.</h1>
                <p className="mt-5">We&apos;re dedicated to constantly enhancing our <br className="hidden lg:block"/> platform and collaborating with your favourite local <br className="hidden lg:block"/> restaurants, ensuring that every order arrives fresh <br className="hidden lg:block"/> and on time, just the way you like it.</p>
            </div>
            <img src="/girl-with-grocery-bag.png" alt="Girl With Grocery Bag" className="w-full lg:w-auto h-auto rounded-lg object-cover"/>
        </div>
        <div className="flex flex-col mt-5 text-text-primary-dark gap-5 p-5">
            <h1 className="text-[24px] text-center font-semibold">Why Choose Us?</h1>

<section className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:mx-auto">
<div className="w-full lg:w-96 h-60 rounded-xl relative p-5 bg-[#E7F1F6]">
                <h2 className="font-semibold text-lg">Seamless Experience</h2>
                <p>Enjoy a smooth process, from browsing to smart payments and delivery.</p>
                <img src="/curve-1.png" alt="Curve Graphics" className="absolute bottom-0 right-0 rounded-br-xl w-40 h-auto"/>
            </div>
            <div className="w-full lg:w-96 h-60 rounded-xl p-5 relative bg-[#F3F6E7]">
                <h2 className="font-semibold text-lg">Exclusive Plan Offers</h2>
                <p>Access special subscription that enhance your experience.</p>
                <img src="/star.png" alt="Star Curve Graphics" className="absolute bottom-0 right-0 rounded-br-xl w-40 h-auto"/>
            </div>
            <div className="w-full lg:w-96 h-60 rounded-xl p-5 relative bg-[#F6EFFF]">
                <h2 className="font-semibold text-lg">Wide Variety of groceires</h2>
                <p>Explore a diverse variety of groceries that cater to your taste and preference.</p>
                <img src="/curve-2.png" alt="Curve 2 Graphics" className="absolute bottom-0 right-0 rounded-br-xl w-40 h-auto"/>
            </div>
            <div className="w-full lg:w-96 h-60 rounded-xl p-5 relative bg-[#E7F6EC]">
                <h2 className="font-semibold text-lg">Eco-Friendly Packaging</h2>
                <p>Promote sustainability with our eco-friendly packaging.</p>
                <img src="/curve-rectangle.png" alt="Curve Rectangle" className="absolute bottom-0 right-0 rounded-br-xl w-40 h-auto"/>
            </div>
</section>
        </div>
        <FooterComponent/>
    </div>
  )
}

export default AboutUsPage