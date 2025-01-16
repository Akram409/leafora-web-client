import {
  MdTranslate,
  MdOutlineSupportAgent,
  MdSecurity,
  MdOutlineDesignServices,
} from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import SectionTitle from "../../Components/SectionTitle";
import { IoSpeedometerOutline } from "react-icons/io5";

const WhyChooseUs = () => {
  return (
    <div>
      <section className="">
        <div className="container mx-auto px-4">
          <SectionTitle text="Why Choose Us" />
          <ul className="timeline timeline-vertical">
            {/* AI-Powered */}
            <li>
              <div className="timeline-start timeline-box border-2 border-green-500">
                <div className="p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2 font-serif text-green-500">
                    AI-Powered
                  </h3>
                  <p>Accurate plant diagnosis using advanced AI technology</p>
                </div>
              </div>
              <div className="timeline-middle">
                <div className="border-2 p-2 rounded-full border-green-600">
                  <GiBrain size="1.7em" color="green" />
                </div>
              </div>
              <hr className="bg-green-600" />
            </li>

            {/* 24/7 Support */}
            <li>
              <hr className="bg-green-600" />
              <div className="timeline-middle">
                <div className="border-2 p-2 rounded-full border-green-600">
                  <MdOutlineSupportAgent size="1.7em" color="green" />
                </div>
              </div>
              <div className="timeline-end timeline-box border-2 border-green-500">
                <div className="p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2 font-serif text-green-500">
                    24/7 Support
                  </h3>
                  <p>Expert assistance whenever you need it</p>
                </div>
              </div>
              <hr className="bg-green-600" />
            </li>

            {/* Multilingual */}
            <li>
              <hr className="bg-green-600" />
              <div className="timeline-start timeline-box border-2 border-green-500">
                <div className="p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2 font-serif text-green-500">
                    Multilingual
                  </h3>
                  <p>Access in your preferred language</p>
                </div>
              </div>
              <div className="timeline-middle">
                <div className="border-2 p-2 rounded-full border-green-600">
                  <MdTranslate size="1.7em" color="green" />
                </div>
              </div>
              <hr className="bg-green-600" />
            </li>

            {/* UI */}
            <li>
              <hr className="bg-green-600" />
              <div className="timeline-middle">
                <div className="border-2 p-2 rounded-full border-green-600">
                  <MdOutlineDesignServices size="1.7em" color="green" />
                </div>
              </div>
              <div className="timeline-end timeline-box border-2 border-green-500">
                <div className="p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2 font-serif text-green-500">
                    UI
                  </h3>
                  <p>User-friendly interface for easy navigation.</p>
                </div>
              </div>
              <hr className="bg-green-600" />
            </li>

            {/* Secure */}
            <li>
              <hr className="bg-green-600" />
              <div className="timeline-start timeline-box border-2 border-green-500">
                <div className="p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2 font-serif text-green-500">
                    Secure
                  </h3>
                  <p>Robust security to keep your data safe</p>
                </div>
              </div>
              <div className="timeline-middle">
                <div className="border-2 p-2 rounded-full border-green-600">
                  <MdSecurity size="1.7em" color="green" />
                </div>
              </div>
              <hr className="bg-green-600" />
            </li>

            {/* Fast Response */}
            <li>
              <hr className="bg-green-600" />
              <div className="timeline-middle">
                <div className="border-2 p-2 rounded-full border-green-600">
                  <IoSpeedometerOutline size="1.7em" color="green" />
                </div>
              </div>
              <div className="timeline-end timeline-box border-2 border-green-500">
                <div className="p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2 font-serif text-green-500">
                    Fast Response
                  </h3>
                  <p>Receive quick responses to your queries</p>
                </div>
              </div>
     
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
