import { motion } from "framer-motion";
import { Target, Shield, Globe2, DollarSign } from "lucide-react";
import { CheckCircle, ShoppingBag, Handshake } from "lucide-react";
import Step1 from "../../assets/step1.png";
import Step2 from "../../assets/step2.png";
import Step3 from "../../assets/step3.png";


export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
      title: "Post Your Equipment",
      description:
        "You’ve successfully completed this step by posting your equipment!",
      image: Step1,
    },
    {
      id: 2,
      icon: <ShoppingBag className="w-8 h-8 text-yellow-500" />,
      title: "Buy the ERI Assist Plan",
      description:
        "This is your next step! Buy the ERI Assist Plan to get verified leads directly.",
      image: Step2,
      highlight: true,
    },
    {
      id: 3,
      icon: <Handshake className="w-8 h-8 text-yellow-500" />,
      title: "Negotiate Directly",
      description:
        "This step unlocks after you connect with our verified leads.",
      image: Step3,
    },
  ];
  const points = [
    {
      icon: <Target className="w-6 h-6 text-pink-500" />,
      title: "Get 2 Qualified Leads – Guaranteed:",
      text: "Our experts assess your machine and share verified buyers/hirers with you.",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Best Way to Ensure a Sale or Rental:",
      text: "Let our team accelerate your transaction with hands-on support.",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-sky-500" />,
      title: "India’s Largest Construction Equipment Marketplace:",
      text: "ERI connects thousands of daily users across the country.",
    },
  ];


  return (
    <>
    <section className="bg-gray-50 py-16 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
      >
        🛠️ How It Works
      </motion.h2>
      <p className="text-gray-600 mb-10">
        You are just 3 steps away from selling or renting out your equipment.
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-6xl mx-auto">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: step.id * 0.1 }}
            className={`rounded-2xl shadow-md bg-white border-2 ${
              step.highlight
                ? "border-yellow-400"
                : "border-transparent hover:border-yellow-300"
            } w-full md:w-1/3 p-6 flex flex-col items-center transition-all duration-300`}
          >
            <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
              <img
                src={step.image}
                alt={step.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl font-semibold text-gray-800">
                {step.id}.
              </span>
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all">
          Buy ERI Assist Plan Today
        </button>
      </div>

      <div className="mt-6 bg-yellow-100 text-yellow-800 px-6 py-3 inline-block rounded-lg shadow-sm">
        💡 <strong>Pro Tip:</strong> The clearer your equipment details and
        images, the faster you connect with serious buyers or renters!
      </div>
    </section>
    <section className="py-16 bg-white px-6 text-center md:text-left">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10"
      >
        💡 Why Choose the <span className="text-yellow-500">ERI Assist Plan?</span>
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-3"
          >
            <div className="flex-shrink-0">{point.icon}</div>
            <p className="text-gray-700 text-base leading-relaxed">
              <span className="font-semibold text-gray-800">{point.title}</span>{" "}
              {point.text}
            </p>
          </motion.div>
        ))}
      </div>

      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 bg-yellow-100 border border-yellow-300 rounded-xl px-6 py-5 text-gray-800 shadow-sm max-w-3xl mx-auto"
      >
        <div className="flex items-center justify-center md:justify-start gap-2 font-medium">
          <DollarSign className="w-5 h-5 text-yellow-600" />
          <span>
            <strong>Money-Back Guarantee:</strong> If ERI fails to deliver 2 qualified
            leads within 15 days, we’ll refund your ₹7,000 — no questions asked.
          </span>
        </div>
      </motion.div>

      
      <div className="mt-10 text-center">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all">
          Buy ERI Assist Plan Now
        </button>
      </div>
    </section>
    </>
  );
}
