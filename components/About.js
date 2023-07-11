import React from "react";

const About = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Towing and Recovery</h3>
            <p className="text-gray-600">
              We have a fleet of modern tow trucks and skilled operators ready to transport your vehicle to a trusted
              repair facility.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Flat Tire Assistance</h3>
            <p className="text-gray-600">
              Don&apos;t worry about changing your tire in a dangerous or unfamiliar location. Our technicians will
              arrive promptly to replace your flat tire with your spare or provide a professional patch or replacement
              if needed.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Battery Jump-Start</h3>
            <p className="text-gray-600">
              If your vehicle&apos;s battery has died, we&apos;ll quickly jump-start it, allowing you to get back on the
              road without delay.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Fuel Delivery</h3>
            <p className="text-gray-600">
              Running out of fuel can be a frustrating experience, but we&apos;ll come to your rescue with a sufficient
              supply of gas or diesel to get you moving again.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Lockout Service</h3>
            <p className="text-gray-600">
              Accidentally locking your keys inside your vehicle can be a frustrating situation. Our trained
              professionals will arrive promptly and help you gain access to your vehicle without causing any damage.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Winch and Recovery</h3>
            <p className="text-gray-600">
              Whether your vehicle is stuck in mud, snow, or a difficult terrain, our experienced team is equipped with
              winches and recovery equipment to safely extricate your vehicle and get you back on the road.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
