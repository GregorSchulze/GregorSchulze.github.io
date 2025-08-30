import React from "react";

export function Testimonial() {
  return (
    <section id="testimonial" className="p-8 md:p-16">
      <div className="text-center text-black dark:text-white my-20 text-lg md:text-2xl max-w-xl mx-auto">
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          „Aufgrund seiner ausgezeichneten Auffassungsgabe ist er jederzeit in
          der Lage, auch schwierige Situationen sofort zutreffend zu erfassen
          und schnell exzellente Lösungen zu finden. Auch in Situationen mit
          größtem Arbeitsaufkommen erweist er sich dauerhaft als außergewöhnlich
          belastbar."
        </p>

        <h5
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="1000"
          className="text-xl font-bold pt-2"
        >
          Katrin Brandt
        </h5>

        <p
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="1000"
          className="text-xs text-gray-500"
        >
          SVP Weber Shandwick, aktuelle Chefin
        </p>
      </div>
    </section>
  );
}
