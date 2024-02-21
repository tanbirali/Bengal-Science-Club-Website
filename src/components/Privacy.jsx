import React from "react";

const Privacy = () => {
  return (
    <div className="p-6 lg:p-20">
      <div
        className="flex flex-col m-auto items-center p-8 border
        bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-800
       lg:w-11/12 lg:h-6/12 rounded-md "
      >
        <h1 className="text-xl font-bold text-white">
          Privacy Policies of Bengal Science Club
        </h1>
        <div className="text-white flex flex-col space-y-3">
          <span className="font-bold">1. Introduction</span>
          <p>
            Welcome to Bengal Science Club's Privacy Policy. This policy
            outlines how we collect, use, disclose, and protect your personal
            information when you use our website and services.
          </p>{" "}
          <span className="font-bold">2. Information We Collect</span>
          <span className="font-bold">
            2.1 Personal Information: We may collect personal information such
            as names, email addresses, and other contact details when
            voluntarily provided by users.
          </span>
          <span className="font-bold">
            2.2 Usage Data: We gather information on how you interact with our
            website, including pages visited, time spent on pages, and other
            analytics data. 3. How We Use Your Information
          </span>
          <span className="font-bold">
            3.1 To Provide and Maintain Our Services: We use your information to
            deliver, improve, and personalize the services offered by Bengal
            Science Club.
          </span>
          <span className="font-bold">
            3.2 Communication: We may use your contact information to send you
            updates, newsletters, and other relevant communications. 4.
            Disclosure of Information
          </span>
          <span className="font-bold">
            4.1 Third-Party Service Providers: We may share your information
            with third-party service providers for the purpose of operating our
            website and providing services.
          </span>
          <span className="font-bold">
            4.2 Legal Requirements: We may disclose your information if required
            to do so by law or in response to valid legal requests. 5. Your
            Choices
          </span>
          <span className="font-bold">
            5.1 Opt-Out: You have the right to opt-out of receiving promotional
            communications from Bengal Science Club.
          </span>
          <span className="font-bold">
            5.2 Access and Update: You can access and update your personal
            information by contacting us at [contact email].
          </span>
          <span className="font-bold">
            6. Security We take reasonable measures to protect your information
            from unauthorized access or disclosure.
          </span>
          <span className="font-bold">
            7. Children's Privacy Our services are not intended for individuals
            under the age of 13. We do not knowingly collect personal
            information from children.
          </span>
          <span className="font-bold">
            8. Changes to This Privacy Policy We may update this privacy policy
            periodically. The latest version will be posted on this page.
          </span>
          <span className="font-bold">
            9. Contact Us If you have any questions or concerns regarding this
            Privacy Policy, please contact us at [contact email].
          </span>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
