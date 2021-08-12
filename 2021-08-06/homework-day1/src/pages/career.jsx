import * as React from "react";
import { CareerItem } from "../components/career-item";
import { useState, useReducer } from "react";

const jobs = [
  {
    descriptions: [
      'Add comments on GitHub issue with "+1", "This is not Stack Overflow", and "Closed because irrelevant"',
      "Push a commit everyday by removing/adding a space to make repository seems active.",
      "Copy paste entire content of a random logs file and use it to raise GitHub issue on competitor's repository to create the perception of bugginess of the library.",
    ],
    requirements: [
      "Master degree or outstanding writing skill is required.",
      "Good sense of humour.",
    ],
    _id: "60f1bf2ddcd48a001f4f9e57",
    title: "GitHub Issue Commentor",
    department: "Engineering",
    level: "internship",
    summary:
      "The Engineering teams at Shopit is the core competency of Shopit by utilizing next-gen Blockchain virtual currency and display them in an interactive platform using VR/AR best practices.",
    headcount: 2,
    createdAt: "2021-07-16T17:17:33.144Z",
    updatedAt: "2021-07-16T17:17:33.144Z",
    __v: 0,
  },

  {
    descriptions: [
      "Primarily handle inquiries pertaining to orders, payments, shipping, vouchers and etc from both sellers and buyers via live chat",
      "Level 1 Customer Service is expected to provide First Contact Resolution (FCR) according to standard operating procedures. In the event of non-FCR, you are expected to follow up and respond back to users via callback or email",
      "Update case details appropriately, i.e. Gdocx, Salesforce and etc",
      "To meet Key Performance Indicators such as average handling time, FCR rate, email/chat response rate, customer satisfaction score and etc",
      "Communicate effectively by providing accurate information to Shopee users and external partners such as Poslaju and iPay88, where appropriate",
      "Communicate effectively with team members",
      "Take on ad-hoc projects/assignments",
    ],
    requirements: [
      "Passionate Diploma holder and fresh graduates are welcome to apply",
      "Business writing skill is mandatory",
      "Good typing skill",
      "Ability to work independently, flexible and adaptable",
      "Ability to multi-task, prioritize and manage time effectively",
      "Demonstrate teamwork all the time",
    ],
    _id: "60f1bf2ddcd48a001f4f9e43",
    title: "Customer Service Agent",
    department: "Operations",
    level: "entry",
    summary:
      "The Operation teams at Shopit covers the operational end-to-end process, from when the buyer searches for a product listed on the Shopit platform, to the moment the buyer receives the products. The team analyses and monitors operational KPIs across the region and conducts root cause analysis when operation performance fluctuates. The Operations team comprises Customer Service, Payment, Listings, Warehouse, Logistics, Seller Operations and Fraud.",
    headcount: 10,
    createdAt: "2021-07-16T17:17:33.112Z",
    updatedAt: "2021-07-16T17:17:33.112Z",
    __v: 0,
  },
  {
    descriptions: [
      "Explore and optimize the visual design work flow/method and help team improving the efficiency of cooperation",
      "Act as a designer and one of the decision maker to define and design the key visual and guidance of each request from marketing and product, for better execution around the world",
      "Optimize and maintain the brand identity for each Shopit brands by using scientific and efficient methods",
    ],
    requirements: [
      "Bachelor degree or outstanding design skills with more than 2 years experience in marketing design / web design / mobile design",
      "Solid design philosophy, deep understanding and practical experience in marketing/branding design, user experience design and related fields",
      "Excellent communication and teamwork skills",
      "Passionate and detail-oriented",
      "Experience in design for e-commerce is a plus",
      "Experience in designing for global/regional/local markets is a plus",
      "Experience in project management is a plus",
      "Experience in photography/graphic design/motion design is a plus",
    ],
    _id: "60f1bf2ddcd48a001f4f9e38",
    title: "Web Designer",
    department: "UI / UX Design",
    level: "experienced",
    summary:
      "The Design team plays an important role in Shopit. The team covers the entire range of product UI/UX design, including the user-growth, promotion, wallet and payment, checkout, retention, listings and users, search and recommendation etc. The team is also responsible for the branding visual identities and elements of Shopit, including logos, mascots, stickers, and internal physical products.",
    headcount: 5,
    createdAt: "2021-07-16T17:17:33.086Z",
    updatedAt: "2021-07-16T17:17:33.086Z",
    __v: 0,
  },
];


const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }

const CareerForm = (props) => {
  const [formData, setFormData] = useReducer(formReducer, {});
  // const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = React.useState(1);

  const handleSubmit = event => {
    event.preventDefault();
    // setSubmitting(true);

    alert(`
    title : ${formData.title} \n
    level : ${formData.level} \n
    dept  : ${formData.department} \n
    summary: ${formData.summary} \n
    headcount : ${formData.headcount}
    `)

    // setTimeout(() => {
    //   setSubmitting(false);
    // }, 3000)

    if (!formData) return;
    props.addJobs(formData);
  }

  const handleChange = event => {
    // alert(event.target.name)
    if (event.target.name === "summary") {
      alert(document.getElementById("summary").innerText)
      setFormData({
        name: event.target.name,
        value: document.getElementById("summary").innerText
      })
    } else {
      setFormData({
        name: event.target.name,
        value: event.target.value
      })
    }


  }


  return (
    <div class="max-w-6xl mx-auto px-3 py-12 space-y-6">
      <div class="mb-8">
        <div>
          <h1 class="text-6xl mb-4 font-extrabold">Careers</h1>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-3">
        <div class="md:w-1/2">
          <form onSubmit={handleSubmit}>
            <div class="
              bg-white
              overflow-hidden
              shadow
              rounded-lg
              divide-y divide-gray-200
            ">
              <div class="px-4 py-5 sm:px-6 text-lg">Add Job Posting</div>
              <div class="px-4 py-5 sm:p-6">
                <div class="space-y-5">
                  <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                    <label for="job-title" class="
                      block
                      text-sm
                      font-medium
                      text-gray-700
                      sm:mt-px sm:pt-2
                    ">
                      Job Title
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <input type="text" name="title" id="job-title" required="" class="
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        focus:ring-pink-500 focus:border-pink-500
                        border-gray-300
                        rounded-md
                      "
                      value={formData.title || ''}
                      onChange={handleChange}
                       />
                    </div>
                  </div>

                  <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                    <label for="job-level" class="
                      block
                      text-sm
                      font-medium
                      text-gray-700
                      sm:mt-px sm:pt-2
                    ">
                      Level
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <select id="job-level" name="level" required="" class="
                        block
                        w-full
                        pl-3
                        pr-10
                        py-2
                        text-base
                        border-gray-300
                        focus:outline-none
                        focus:ring-pink-500
                        focus:border-pink-500
                        sm:text-sm
                        rounded-md
                      "
                      value = {formData.level || 'internship'}
                      onChange = {handleChange}
                      >
                        <option value="internship">Internship</option>
                        <option value="entry">Entry</option>
                        <option value="experienced">Experienced</option>
                        <option value="manager">Manager</option>
                      </select>
                    </div>
                  </div>

                  <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                    <label for="job-department" class="
                      block
                      text-sm
                      font-medium
                      text-gray-700
                      sm:mt-px sm:pt-2
                    ">
                      Department
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <input type="text" name="department" id="job-department" required="" placeholder="e.g. Engineering" class="
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        focus:ring-pink-500 focus:border-pink-500
                        border-gray-300
                        rounded-md
                      "
                      value={formData.department || ''}
                      onChange={handleChange}
                       />
                    </div>
                  </div>

                  <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                    <label for="job-summary" class="
                      block
                      text-sm
                      font-medium
                      text-gray-700
                      sm:mt-px sm:pt-2
                    ">
                      Summary
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <textarea id="job-summary" name="summary" rows="4" required="" class="
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        focus:ring-pink-500 focus:border-pink-500
                        border border-gray-300
                        rounded-md
                      "
                      // value = {formData.summary}
                      onchange = {handleChange}
                      />
                    </div>
                  </div>

                  <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                    <label for="headcount" class="
                      block
                      text-sm
                      font-medium
                      text-gray-700
                      sm:mt-px sm:pt-2
                    ">
                      Headcount
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="relative w-32">
                        <button type="button" class="
                          absolute
                          left-0
                          inset-y-0
                          px-1.5
                          text-gray-400
                        " id="headcount-minus-btn"
                        onClick={() => {
                          if (value > 1) {
                            setValue(value -1)
                            setFormData({
                              name: "headcount",
                              value: value -1
                            })
                          }
                        }}
                        >
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                          </svg>
                        </button>
                        <input type="text" name="headcount" id="headcount" required="" class="
                          block
                          w-full
                          px-9
                          text-center
                          shadow-sm
                          sm:text-sm
                          focus:ring-pink-500 focus:border-pink-500
                          border-gray-300
                          rounded-md
                        " 
                        value= {value}
                        readonly="" />
                        <button type="button" class="
                          absolute
                          right-0
                          inset-y-0
                          px-1.5
                          text-gray-400
                        " id="headcount-plus-btn"
                        name = "headcount"
                        onClick={() => {
                          setValue(value + 1)
                          setFormData({
                            name: "headcount",
                            value: value +1
                          })
                        }}
                        >
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                          </svg>
                        </button>
                      </div>
                      <div id="headcount-error" class="text-red-500 text-xs pt-1 hidden"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-4 sm:px-6 text-right">
                <button class="
                  inline-flex
                  justify-center
                  py-2
                  px-4
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-pink-600
                  hover:bg-pink-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-pink-500
                ">
                  ADD
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
};


export const Career = () => {
  const [jobsItems, setjobsItems] = useState(jobs);

  const addJobs = (newJobsItem) => {
    console.log(`[DEBUG] addJobs function ...`)
    const newJobs = [...jobsItems, newJobsItem];
    setjobsItems(newJobs);
  };

  const updateJob = (index) => {
    alert(`updateJobs index : ${index}`)
    // const newJobs = [...jobsItems];
    // newJobs.splice(index, 1);
    // setjobsItems(newJobs);
  };


  const removeJob = (index) => {
    // alert(`removeJobs index : ${index}`)
    const newJobs = [...jobsItems];
    newJobs.splice(index, 1);
    setjobsItems(newJobs);
  };


  return (
    <main class="bg-gray-50">
      <CareerForm addJobs={addJobs}/>
      {/* <CareerForm addJobs={addJobs}/> */}
      {/* <ShowCareerItems /> */}
      <div className="max-w-xl mx-auto p-6 space-y-5">
      {jobsItems.map((job,index) => (
        <CareerItem
          index={index}
          title={job.title}
          department={job.department}
          level={job.level}
          onEdit={updateJob}
          onDelete={removeJob}
          key={job._id}
        />
      ))}
    </div>
    </main>
  );
};
