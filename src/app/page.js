import SectionHeader from "@/component/header/Section_header";
import Hero from "@/component/layout/Hero";
import HomeMenu from "@/component/layout/HomeMenu";


export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader
          subheader='Our Story'
          mainheader='About Us'
        />
        <div className="mx-w-2xl mx-auto mt-3 flex flex-col gap-6">
          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Ut feugiat augue non elit gravida, sed ornare risus vestibulum.
            Aliquam bibendum vel nulla id interdum. Donec a molestie </p>
          <p>eros, ac tincidunt enim. In varius, purus ac auctor pellentesque,
            lorem urna molestie nibh, eu vulputate turpis ante quis orci. Sed
            laoreet est vitae justo dapibus vulputate. Mauris interdum ante vel
            nisi interdum,vel porttitor elit fermentum. Sed magna augue, consectetur quis placerat sed,</p>
        </div>
      </section>
      <section className="text-center my-16">
        <SectionHeader
          subheader={"Don\'t Hesitate"}
          mainheader='Contact Us'
        />
        <div className="mx-w-2xl mx-auto mt-3 flex flex-col gap-6">
         <a href="tel:+912344355344" className="text-6xl"> 
          +91 234 435 5344
         </a>
        </div>
      </section>
    </>
  )
}
