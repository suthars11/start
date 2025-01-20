import Image from "next/image";
import React from "react";

const Terms = () => {
  return (
    <div className="">
      {/* Header with Image */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/images/terms.png"
          alt="Terms Header"
          className="rounded-md"
          width={1200} // Specify the width
          height={1200} // Specify the height
          layout="responsive" // Ensures the image is responsive
        />
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-[#166088] text-center underline">
          Terms And Conditions
        </h1>

        {/* Terms Content */}
        <div className="mt-8 text-gray-800 px-6 ">
          {/* Introduction */}
          <section className="mb-8 mx-auto ">
            <h2 className="text-xl font-semibold text-[#166088] mb-4 text-left underline">
              Introduction
            </h2>
            <p className="text-sm leading-relaxed mx-auto">
              Welcome to [Your Company Name]! We are dedicated to providing
              exceptional service, expert advice, and a range of properties
              tailored to meet your needs. Our goal is, dolor sit amet
              consectetur adipisicing e, architecto. to make your property
              journey seamless and
            </p>
          </section>

          {/* Definitions */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#166088] mb-4 text-left underline">
              Definitions
            </h2>
            <p className="text-sm leading-relaxed mx-auto">
              In these terms, Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Laudantium, tempora! [Your Company Name], while
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
              nobis. refer to the user or client utilizing our
            </p>
          </section>

          {/* Submission and Administration */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#166088] mb-4 text-left underline">
              Submission And Administration Of lorem8 Listings/Advertisements
            </h2>
            <p className="text-sm leading-relaxed mx-auto">
              Users can submit their property listings Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quam, ut? through our platform.
              All submissions must comply with our content guidelines and local
              laws. We reserve the right to reject any listing that violates
              these st
            </p>
          </section>

          {/* Refund Policy */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#166088] text-left underline  mb-4">
              Refund In Failed Transaction
            </h2>
            <p className="text-sm leading-relaxed">
              Refunds for failed transactions sit amet consectetur adipisicing
              elit. Lorem ipsum dolor sit amet. Autem, magnam non. Incidunt in
              nisi laboriosam! will be processed within 7-10 business days,
              subject to verification of the issue. For further assistance,
              contact
            </p>
          </section>

          {/* Payment Terms */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#166088] text-left underline  mb-4">
              Payment Terms
            </h2>
            <p className="text-sm leading-relaxed">
              Payments for premium services Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Ut vero, officiis eos praesentium
              numquam nesciunt. must be made in advance. Payment methods include
              credit cards, bank transfers, and digital wallets. All
              transactions are se
            </p>
          </section>

          {/* CPL Marketing */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#166088] mb-4 text-left  underline ">
              CPL Marketing Campaigns With Developers And Agents/Brokers
            </h2>
            <p className="text-sm leading-relaxed">
              Our marketing campaigns involve collaborations Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Assumenda corporis
              possimus, aperiam voluptatem doloribus soluta. with developers and
              agents to sh are designed to provide maximum visibility to your
              listings.
            </p>
          </section>

          {/* Video Community Guidelines */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#166088] mb-4  text-left underline">
              Video Community Guidelines
            </h2>
            <p className="text-sm leading-relaxed">
              Video content shared on our platform must adhere to our community
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus saepe cum, excepturi eos quibusdam ullam. guidelines,
              which prohibit offensive or inappropriate material. Non-compliant
              videos will be
            </p>
          </section>

          {/* Use of Information */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#166088] mb-4 text-left underline ">
              Use of Information
            </h2>
            <p className="text-sm leading-relaxed">
              Information provided by users will be used solely Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Necessitatibus
              aliquid odio possimus dicta omnis in doloremque. Earum. for
              property-related services. We ensure data privacy and protection
              in compliance with
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#166088] mb-4 text-left underline ">
              Intellectual Property Rights
            </h2>
            <p className="text-sm leading-relaxed">
              All content on our platform, including text, images, and code,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              quibusdam non veniam quidem eveniet rerum? is protected by
              copyright and intellectual property laws. Unauthorized use is
              prohibited.
            </p>
          </section>

          {/* Restrictions */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#166088] mb-4 text-left underline">
              Restrictions/Prohibitions
            </h2>
            <p className="text-sm leading-relaxed">
              Users are prohibited from posting fraudulent, Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quos explicabo commodi
              ipsa. Cupiditate, porro debitis. offensive, or illegal content on
              our platform. Violation of these terms may result in account
              suspension.
            </p>
          </section>

          {/* Disclaimer */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#166088] mb-4 text-left underline ">
              Disclaimer And Warranties
            </h2>
            <p className="text-sm leading-relaxed">
              We do not guarantee the accuracy of property listings. Users are
              advised to verify details independently before proceeding with
              transactions.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#166088] mb-4 text-left underline ">
              Limitation Of Liability
            </h2>
            <p className="text-sm leading-relaxed">
              We shall not be held liable Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Esse, velit. Veritatis velit quos
              asperiores molestiae aliquid. for any loss or damage resulting
              from the use of our services, except where mandated by law.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#166088] mb-4 text-left  underline ">
              Termination
            </h2>
            <p className="text-sm leading-relaxed">
              We reserve the right to terminate access to our platform for users
              who violate these terms or engage in fraudulent activities.
            </p>
          </section>

          {/* Indemnification */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#166088] mb-4 text-left underline ">
              Indemnification
            </h2>
            <p className="text-sm leading-relaxed">
              Users agree to indemnify and hold harmless [Your Company Name]
              from any claims or liabilities arising from their use of our
              services.
            </p>
          </section>

          {/* Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#166088] mb-4 text-left underline">
              Privacy Policy
            </h2>
            <p className="text-sm leading-relaxed">
              Our privacy policy outlines how we collect, use, Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Est animi nemo sunt
              reiciendis, illo atque? and protect user data. By using our
              platform, users agree to the terms outlined in the policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
