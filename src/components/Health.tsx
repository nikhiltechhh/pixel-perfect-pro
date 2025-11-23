import React from 'react';
import { Stethoscope, Activity, Users, Baby, User, AlertCircle, CheckCircle, FileText, Ear, Shield } from 'lucide-react';

export default function Health() {
  const whoNeedsTest = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Adults",
      description: "If you often need people to repeat themselves or have a family history of hearing loss, schedule an auditory test."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Senior Citizens (60+)",
      description: "Elders may experience inner ear health issues due to long-term noise exposure, diabetes, or high blood pressure."
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Newborns & Infants",
      description: "Every baby should undergo hearing tests before the first month, diagnostic evaluation before 3 months, and early intervention before 6 months."
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Children",
      description: "Testing needed if a child has delayed speech, frequent ear infections, or experiences difficulty in hearing."
    }
  ];

  const whyTakeTest = [
    {
      icon: <Activity className="w-5 h-5" />,
      title: "Early Diagnosis",
      description: "Identify changes in listening abilities before they become severe"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Better Treatment Planning",
      description: "Precise solutions tailored to your specific type and degree of hearing loss"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Improved Communication",
      description: "Avoid misunderstandings and stay connected with people"
    },
    {
      icon: <Ear className="w-5 h-5" />,
      title: "Hearing Aid Suitability",
      description: "Confirm which devices are suitable and how they should be adjusted"
    }
  ];

  const signs = [
    "You're not hearing well in certain environments or situations",
    "Someone else has noticed a change in your hearing",
    "You have pain, pressure or drainage in your ears",
    "You've noticed a ringing-like sound (tinnitus) in your ears",
    "You have a family history of hearing loss"
  ];

  const testTypes = [
    {
      title: "Pure-Tone Testing",
      description: "Finds the quietest volume you can hear at each pitch. Common for adults and children."
    },
    {
      title: "Bone Conduction Testing",
      description: "Shows if there are issues with the tiny hair cells in your cochlea, part of the inner ear."
    },
    {
      title: "Speech Testing",
      description: "Involves listening to and repeating certain words to assess speech understanding."
    },
    {
      title: "Auditory Brainstem Response (ABR)",
      description: "Checks connections between inner ear and brain. Used for children and those unable to complete pure-tone tests."
    },
    {
      title: "Otoacoustic Emissions (OAE)",
      description: "Checks inner ear function. Typically used for newborns and young children."
    },
    {
      title: "Tympanometry",
      description: "Checks eardrum movement. Used to detect ruptured eardrum, fluid in middle ear, or ear wax."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Sri Raga Pranitha Hospital</h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-6">Hearing Tests & Assessments</h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Hearing plays a crucial role in how people communicate with each other across the globe. A hearing test acts as a simple check that measures how clearly you hear and understand different tones and voices. Early testing allows you to identify gradual changes before they begin to affect communication in daily life.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether for reassurance or early detection, an auditory test is useful to stay aware of your hearing health and to take necessary steps if required.
            </p>
          </div>
        </section>

        {/* What Are Hearing Tests */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow p-8 border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Stethoscope className="w-7 h-7 text-blue-600" />
              What Are Hearing Tests?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A hearing test refers to a medical assessment that measures how well you can hear different variations of sounds, pitches and volumes. This hearing evaluation includes various assessments, such as pure tone testing and speech audiometry, to identify if you have any hearing loss.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The hearing check-up results help to determine the type and severity of hearing issues and guide you and audiologists to take further steps for treatment.
            </p>
          </div>
        </section>

        {/* Importance */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Shield className="w-7 h-7 text-blue-600" />
              Importance of Regular Hearing Tests
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Regular hearing screening plays a vital role in both prevention and diagnosis. Since the decline of auditory capabilities can be gradual and silent, staying on top of your hearing health acts as both a diagnostic and preventive measure.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Untreated hearing conditions can lead to isolation, reduce work or social performance and may decline your cognitive abilities. Thus, routine hearing tests help audiologists to identify the type, severity and cause of any hearing issues and guide you to take appropriate steps.
            </p>
          </div>
        </section>

        {/* Who Should Take Test */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Who Should Take a Hearing Test?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {whoNeedsTest.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Take Test */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Should You Take a Hearing Test?</h3>
          <div className="bg-white rounded-lg shadow p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              An ear hearing test brings the opportunity to understand how well you're listening to your surroundings. With an ear screening, you can identify changes, plan treatment more effectively and maintain your ability to communicate with people.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {whyTakeTest.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="text-blue-600 flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signs You Need Test */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow p-8 border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <AlertCircle className="w-7 h-7 text-blue-600" />
              Signs That You Need a Hearing Test
            </h3>
            <div className="space-y-4">
              {signs.map((sign, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{sign}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Tests */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Types of Hearing Tests</h3>
          <p className="text-gray-700 mb-6">
            Audiometry tests show the type of hearing loss you have and if that loss is mild, moderate or severe. There are several types of hearing tests, including tests for babies, children and adults:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {testTypes.map((test, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6 border-t-4 border-blue-600">
                <h4 className="text-lg font-bold text-gray-800 mb-2">{test.title}</h4>
                <p className="text-gray-600 text-sm">{test.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 rounded-lg p-5 mt-6">
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Note:</span> Hearing test costs often depend on the type of test performed and the quality of equipment used by the clinic.
            </p>
          </div>
        </section>

       
      </div>

     
    </div>
  );
}