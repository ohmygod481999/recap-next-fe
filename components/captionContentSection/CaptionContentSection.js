import React from "react";

function CaptionContentSection() {
  return (
    <section className="question-area pt-40px pb-40px">
      <div className="container">
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="jobs"
            role="tabpanel"
            aria-labelledby="jobs-tab"
          >
            <form
              method="post"
              className="search-form p-0 rounded-0 bg-transparent shadow-none position-relative z-index-1"
            >
              <div className="d-flex flex-wrap align-items-center">
                <div className="d-flex flex-wrap align-items-center flex-grow-1">
                  <div className="form-group mr-3 flex-grow-1">
                    <input
                      className="form-control form--control pl-40px"
                      type="text"
                      name="text"
                      placeholder="Search all jobs"
                    />
                    <span className="la la-search input-icon" />
                  </div>
                  <div className="form-group mr-3 flex-grow-1">
                    <input
                      className="form-control form--control pl-40px"
                      type="text"
                      name="text"
                      placeholder="Located anywhere"
                    />
                    <span className="la la-map-marker input-icon" />
                    <div className="km-select-wrap">
                      <select className="custom-select custom--select">
                        <option value={5}>within 5 km</option>
                        <option value={10}>within 10 km</option>
                        <option value={20} selected>
                          within 20 km
                        </option>
                        <option value={50}>within 50 km</option>
                        <option value={100}>within 100 km</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* end d-flex */}
                <div className="search-btn-box mb-3">
                  <button className="btn theme-btn">
                    Search <i className="la la-search ml-1" />
                  </button>
                </div>
                {/* end search-btn-box */}
              </div>
              <div className="filter-btn-group d-flex flex-wrap align-items-center">
                <div className="btn border border-gray bg-white lh-26 text-gray pl-40px custom-control custom-checkbox fs-14 d-inline-block mr-2 mb-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="r"
                  />
                  <label
                    className="custom-control-label custom--control-label"
                    htmlFor="r"
                  >
                    Remote
                  </label>
                </div>
                {/* end btn */}
                <div className="btn-group mr-2 mb-2">
                  <button
                    className="btn border border-gray dropdown-toggle lh-26 text-gray fs-14"
                    type="button"
                    id="techDropdownMenu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      className="mr-1"
                      width={16}
                      height={16}
                      viewBox="0 0 18 18"
                      fill="#6c727c"
                    >
                      <path d="M8 4.41 6.59 3l-6 6 6 6L8 13.59 3.41 9 8 4.41zm2 0L11.41 3l6 6-6 6L10 13.59 14.59 9 10 4.41z" />
                    </svg>
                    Tech
                  </button>
                  <div
                    className="dropdown-menu dropdown--menu dropdown--menu-2 keep-open mt-3"
                    aria-labelledby="techDropdownMenu"
                  >
                    <div className="py-3 px-4">
                      <div className="form-group mb-2">
                        <label className="fs-14 text-black fw-medium lh-18">
                          Tech you like
                          <span className="fs-13 lh-18 d-block fw-regular text-gray">
                            Add up to 5 tech tags
                          </span>
                        </label>
                        <input
                          className="input-tags"
                          type="text"
                          name="text"
                          placeholder="e.g. javascript"
                        />
                      </div>
                      {/* end form-group */}
                      <div className="form-group mb-2">
                        <label className="fs-14 text-black fw-medium lh-18">
                          Tech you dislike
                          <span className="fs-13 lh-18 d-block fw-regular text-gray">
                            Add up to 5 tech tags
                          </span>
                        </label>
                        <input
                          className="input-tags"
                          type="text"
                          name="text"
                          placeholder="e.g. c, php"
                        />
                      </div>
                      {/* end form-group */}
                      <button
                        type="button"
                        className="btn theme-btn theme-btn-sm"
                      >
                        Apply filters
                      </button>
                    </div>
                  </div>
                  {/* end dropdown-menu */}
                </div>
                {/* end btn-group */}
                <div className="btn-group mr-2 mb-2">
                  <button
                    className="btn border border-gray dropdown-toggle lh-26 text-gray fs-14"
                    type="button"
                    id="compensationDropdownMenu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      className="mr-1"
                      width={16}
                      height={16}
                      viewBox="0 0 18 18"
                    >
                      <path
                        d="M13.92 3H4c.07-.6.62-1.05 1.22-1h7.48c.6-.05 1.15.4 1.22 1zm.57 1c.6-.05 1.15.4 1.22 1H2.29c.07-.6.6-1.04 1.2-1h11zM1 7h16a1.14 1.14 0 00-1.22-1H2.22c-.6-.05-1.15.4-1.22 1zm1.5 1C1.67 8 1 8.67 1 9.5v5c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-13zM5 15a3 3 0 110-6h8a3 3 0 110 6H5z"
                        fill="#6c727c"
                      />
                      <path d="M9 13.9a1.9 1.9 0 100-3.8 1.9 1.9 0 0 0 0 3.8z" />
                    </svg>
                    Compensation
                  </button>
                  <div
                    className="dropdown-menu dropdown--menu dropdown--menu-2 keep-open mt-3"
                    aria-labelledby="compensationDropdownMenu"
                  >
                    <div className="py-3 px-4">
                      <div className="form-group mb-2">
                        <label className="fs-14 text-black fw-medium lh-18">
                          Minimum Annual Salary
                        </label>
                        <input
                          className="form-control form--control mb-2 form-control-sm"
                          type="text"
                          name="text"
                        />
                        <select className="select-container">
                          <option selected="selected" value="BDT">
                            BDT
                          </option>
                          <option value="USD">USD ($)</option>
                          <option value="EUR">EUR (€)</option>
                          <option value="GBP">GBP (£)</option>
                          <option value="CAD">CAD (C$)</option>
                          <option value="AUD">AUD (A$)</option>
                          <option value="INR">INR (₹)</option>
                          <option value="SEK">SEK (kr)</option>
                          <option value="PLN">PLN (zł)</option>
                          <option value="CHF">CHF</option>
                          <option value="DKK">DKK</option>
                          <option value="NZD">NZD</option>
                        </select>
                      </div>
                      {/* end form-group */}
                      <div className="form-group">
                        <label className="fs-14 text-black fw-medium lh-18">
                          Other Compensation
                        </label>
                        <div className="custom-control custom-checkbox fs-14">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="OffersEquity"
                          />
                          <label
                            className="custom-control-label custom--control-label"
                            htmlFor="OffersEquity"
                          >
                            Offers Equity
                          </label>
                        </div>
                      </div>
                      {/* end form-group */}
                      <button
                        type="button"
                        className="btn theme-btn theme-btn-sm"
                      >
                        Apply filters
                      </button>
                    </div>
                  </div>
                  {/* end dropdown-menu */}
                </div>
                {/* end btn-group */}
                <div className="btn-group mr-2 mb-2">
                  <button
                    className="btn border border-gray dropdown-toggle lh-26 text-gray fs-14"
                    type="button"
                    id="perksDropdownMenu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      className="mr-1"
                      width={16}
                      height={16}
                      viewBox="0 0 18 18"
                    >
                      <path
                        d="m11.56 10.13-1.43 1.43L15.57 17 17 15.57l-5.44-5.44z"
                        fill="#6c727c"
                      />
                      <path
                        d="m16.27 3.63-2.53 2.53a9.86 9.86 0 00-10.1-2.54 8.93 8.93 0 0 1 12.63.01zm-12.65.01a8.93 8.93 0 00.01 12.63l2.53-2.53a9.86 9.86 0 01-2.54-10.1z"
                        fill="#6c727c"
                      />
                      <path
                        d="M3.62 3.63h.01c2.66-.34 6.09 1.03 8.85 3.8l-5.06 5.05C4.66 9.7 3.3 6.29 3.62 3.63z"
                        fill="#6c727c"
                      />
                    </svg>
                    Perks
                  </button>
                  <div
                    className="dropdown-menu dropdown--menu dropdown--menu-2 keep-open mt-3"
                    aria-labelledby="perksDropdownMenu"
                  >
                    <div className="py-3 px-4">
                      <div className="form-group">
                        <label className="fs-14 text-black fw-medium lh-18">
                          Location options
                        </label>
                        <div className="custom-control custom-checkbox fs-14">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Visa-sponsor"
                          />
                          <label
                            className="custom-control-label custom--control-label"
                            htmlFor="Visa-sponsor"
                          >
                            Visa sponsor
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox fs-14">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Offers-relocation"
                          />
                          <label
                            className="custom-control-label custom--control-label"
                            htmlFor="Offers-relocation"
                          >
                            Offers relocation
                          </label>
                        </div>
                      </div>
                      {/* end form-group */}
                      <div className="form-group">
                        <label className="fs-14 text-black fw-medium lh-18">
                          Perks
                        </label>
                        <div className="custom-control custom-checkbox fs-14">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Education-and-tuition-benefits"
                          />
                          <label
                            className="custom-control-label custom--control-label"
                            htmlFor="Education-and-tuition-benefits"
                          >
                            Education and tuition benefits
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox fs-14">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="10+vacation-days"
                          />
                          <label
                            className="custom-control-label custom--control-label"
                            htmlFor="10+vacation-days"
                          >
                            10+ vacation days
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox fs-14">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Great-engineering-culture"
                          />
                          <label
                            className="custom-control-label custom--control-label"
                            htmlFor="Great-engineering-culture"
                          >
                            Great engineering culture
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox fs-14">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Gym-and-fitness-perks"
                          />
                          <label
                            className="custom-control-label custom--control-label"
                            htmlFor="Gym-and-fitness-perks"
                          >
                            Gym and fitness perks
                          </label>
                        </div>
                      </div>
                      {/* end form-group */}
                      <button
                        type="button"
                        className="btn theme-btn theme-btn-sm"
                      >
                        Apply filters
                      </button>
                    </div>
                  </div>
                  {/* end dropdown-menu */}
                </div>
                {/* end btn-group */}
                <div className="btn-group mr-2 mb-2">
                  <button
                    className="btn border border-gray dropdown-toggle lh-26 text-gray fs-14"
                    type="button"
                    id="backgroundDropdownMenu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      className="mr-1"
                      width={16}
                      height={16}
                      viewBox="0 0 18 18"
                      fill="#6c727c"
                    >
                      <path d="M5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h7a2 2 0 002-2V5a2 2 0 00-2-2H5zm2 3a1 1 0 11-2 0 1 1 0 0 1 2 0zm-2 4.5c0-.28.22-.5.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm.5 1.5h6a.5.5 0 010 1h-6a.5.5 0 010-1zM5 14.5c0-.28.22-.5.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z" />
                      <path
                        opacity=".4"
                        d="M5.9 2h6.35A2.75 2.75 0 0115 4.75v9.35c.62-.6 1-1.43 1-2.35v-7.5C16 2.45 14.54 1 12.75 1h-4.5c-.92 0-1.75.38-2.35 1z"
                      />
                    </svg>
                    Background
                  </button>
                  <div
                    className="dropdown-menu dropdown--menu dropdown--menu-2 keep-open mt-3"
                    aria-labelledby="backgroundDropdownMenu"
                  >
                    <div className="py-3 px-4">
                      <div className="form-group mb-2">
                        <label className="fs-14 text-black fw-medium lh-18">
                          Experience Level
                        </label>
                        <select className="select-container">
                          <option selected="selected" value>
                            Select experience
                          </option>
                          <option value="Student">Student</option>
                          <option value="Junior">Junior</option>
                          <option value="MidLevel">Mid-Level</option>
                          <option value="Senior">Senior</option>
                          <option value="Lead">Lead</option>
                          <option value="Manager">Manager</option>
                        </select>
                      </div>
                      {/* end form-group */}
                      <div className="form-group mb-2">
                        <label className="fs-14 text-black fw-medium lh-18">
                          Role
                          <span className="fs-13 lh-18 d-block fw-regular text-gray">
                            Add up to 5 roles
                          </span>
                        </label>
                        <select className="limit-select">
                          <option selected value>
                            e.g. Full Stack Developer
                          </option>
                          <option value="BackendDeveloper">
                            Backend Developer
                          </option>
                          <option value="DataScientist">Data Scientist</option>
                          <option value="DatabaseAdministrator">
                            Database Administrator
                          </option>
                          <option value="Designer">Designer</option>
                          <option value="DesktopDeveloper">
                            Desktop Developer
                          </option>
                          <option value="DevOpsDeveloper">DevOps</option>
                          <option value="EmbeddedDeveloper">
                            Embedded Developer
                          </option>
                          <option value="FrontendDeveloper">
                            Frontend Developer
                          </option>
                          <option value="FullStackDeveloper">
                            Full Stack Developer
                          </option>
                          <option value="GameDeveloper">
                            Graphics/Game Developer
                          </option>
                          <option value="MobileDeveloper">
                            Mobile Developer
                          </option>
                          <option value="ProductManager">
                            Product Manager
                          </option>
                          <option value="QATestDeveloper">
                            QA/Test Developer
                          </option>
                          <option value="SystemAdministrator">
                            System Administrator
                          </option>
                        </select>
                      </div>
                      {/* end form-group */}
                      <div className="form-group">
                        <label className="fs-14 text-black fw-medium lh-18">
                          Job Type
                        </label>
                        <div className="custom-control custom-checkbox fs-14">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Full-time"
                          />
                          <label
                            className="custom-control-label custom--control-label"
                            htmlFor="Full-time"
                          >
                            Full-time
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox fs-14">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Contract"
                          />
                          <label
                            className="custom-control-label custom--control-label"
                            htmlFor="Contract"
                          >
                            Contact
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox fs-14">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Internship"
                          />
                          <label
                            className="custom-control-label custom--control-label"
                            htmlFor="Internship"
                          >
                            Internship
                          </label>
                        </div>
                      </div>
                      {/* end form-group */}
                      <button
                        type="button"
                        className="btn theme-btn theme-btn-sm"
                      >
                        Apply filters
                      </button>
                    </div>
                  </div>
                  {/* end dropdown-menu */}
                </div>
                {/* end btn-group */}
                <div className="btn-group mr-2 mb-2">
                  <button
                    className="btn border border-gray dropdown-toggle lh-26 text-gray fs-14"
                    type="button"
                    id="moreDropdownMenu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      className="mr-1"
                      width={16}
                      height={16}
                      viewBox="0 0 17 18"
                      fill="#6c727c"
                    >
                      <path d="M3.5 10a1.5 1.5 0 110-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 0 1 0 3zM12 8.5a1.5 1.5 0 103 0 1.5 1.5 0 0 0-3 0z" />
                    </svg>
                    More
                  </button>
                  <div
                    className="dropdown-menu dropdown--menu dropdown--menu-2 keep-open mt-3"
                    aria-labelledby="moreDropdownMenu"
                  >
                    <div className="py-3 px-4">
                      <div className="form-group">
                        <label className="fs-14 text-black fw-medium lh-18">
                          Job Features
                        </label>
                        <div className="custom-control custom-checkbox fs-14">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Be-one-of-the-first-applicants"
                          />
                          <label
                            className="custom-control-label custom--control-label"
                            htmlFor="Be-one-of-the-first-applicants"
                          >
                            Be one of the first applicants
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox fs-14">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="High-response-rate"
                          />
                          <label
                            className="custom-control-label custom--control-label"
                            htmlFor="High-response-rate"
                          >
                            High response rate
                          </label>
                        </div>
                      </div>
                      {/* end form-group */}
                      <div className="form-group mb-2">
                        <label className="fs-14 text-black fw-medium lh-18">
                          Companies to include
                          <span className="fs-13 lh-18 d-block fw-regular text-gray">
                            Add up to 5 companies
                          </span>
                        </label>
                        <input
                          type="text"
                          className="input-tags px-0"
                          placeholder="e.g. Initrode"
                        />
                      </div>
                      {/* end form-group */}
                      <div className="form-group mb-2">
                        <label className="fs-14 text-black fw-medium lh-18">
                          Companies to exclude
                          <span className="fs-13 lh-18 d-block fw-regular text-gray">
                            Add up to 5 companies
                          </span>
                        </label>
                        <input
                          type="text"
                          className="input-tags px-0"
                          placeholder="e.g. Initech"
                        />
                      </div>
                      {/* end form-group */}
                      <div className="form-group mb-2">
                        <label className="fs-14 text-black fw-medium lh-18">
                          Industry
                          <span className="fs-13 lh-18 d-block fw-regular text-gray">
                            Add up to 5 Industries
                          </span>
                        </label>
                        <select
                          className="limit-select"
                          multiple
                          data-placeholder="e.g. Finance"
                        >
                          <option value>e.g. Finance</option>
                          <option value="Accounting">Accounting</option>
                          <option value="Advertising">Advertising</option>
                          <option value="Aerospace">Aerospace</option>
                          <option value="Agriculture">Agriculture</option>
                          <option value="Architecture">Architecture</option>
                          <option value="Arts">Arts</option>
                          <option value="Automotive">Automotive</option>
                          <option value="Beauty">Beauty</option>
                          <option value="Business Intelligence">
                            Business Intelligence
                          </option>
                          <option value="Charity">Charity</option>
                          <option value="Chemicals">Chemicals</option>
                          <option value="Collaboration Tools">
                            Collaboration Tools
                          </option>
                          <option value="Communications">Communications</option>
                          <option value="Construction">Construction</option>
                          <option value="Consulting">Consulting</option>
                          <option value="Customer Service">
                            Customer Service
                          </option>
                          <option value="Data & Analytics">
                            Data &amp; Analytics
                          </option>
                          <option value="Dating">Dating</option>
                          <option value="Design">Design</option>
                          <option value="Education">Education</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Energy & Utilities">
                            Energy &amp; Utilities
                          </option>
                          <option value="Enterprise">Enterprise</option>
                          <option value="Entertainment">Entertainment</option>
                          <option value="Events">Events</option>
                          <option value="Fashion">Fashion</option>
                          <option value="Finance">Finance</option>
                          <option value="Food & Beverage">
                            Food &amp; Beverage
                          </option>
                          <option value="Gambling">Gambling</option>
                          <option value="Gaming">Gaming</option>
                          <option value="Geophysics">Geophysics</option>
                          <option value="Government">Government</option>
                          <option value="Hardware">Hardware</option>
                          <option value="Health & Fitness">
                            Health &amp; Fitness
                          </option>
                          <option value="Health Care">Health Care</option>
                          <option value="Home and Garden">
                            Home and Garden
                          </option>
                          <option value="Hospitality">Hospitality</option>
                          <option value="Information Technology">
                            Information Technology
                          </option>
                          <option value="Insurance">Insurance</option>
                          <option value="Language Services">
                            Language Services
                          </option>
                          <option value="Legal">Legal</option>
                          <option value="Life Sciences">Life Sciences</option>
                          <option value="Location Services">
                            Location Services
                          </option>
                          <option value="Logistics & Distribution">
                            Logistics &amp; Distribution
                          </option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Media">Media</option>
                          <option value="Meteorology">Meteorology</option>
                          <option value="Military">Military</option>
                          <option value="Mobile">Mobile</option>
                          <option value="Pets">Pets</option>
                          <option value="Platforms">Platforms</option>
                          <option value="Politics">Politics</option>
                          <option value="Price Comparison">
                            Price Comparison
                          </option>
                          <option value="Printing">Printing</option>
                          <option value="Publishing">Publishing</option>
                          <option value="Q&A">Q&amp;A</option>
                          <option value="Real Estate">Real Estate</option>
                          <option value="Recreation & Leisure">
                            Recreation &amp; Leisure
                          </option>
                          <option value="Recruiting">Recruiting</option>
                          <option value="Retail">Retail</option>
                          <option value="Reviews">Reviews</option>
                          <option value="Science">Science</option>
                          <option value="Search">Search</option>
                          <option value="Security">Security</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Software Development">
                            Software Development
                          </option>
                          <option value="Sports">Sports</option>
                          <option value="Telecommunications">
                            Telecommunications
                          </option>
                          <option value="Transportation">Transportation</option>
                          <option value="Travel & Tourism">
                            Travel &amp; Tourism
                          </option>
                        </select>
                      </div>
                      {/* end form-group */}
                      <button
                        type="button"
                        className="btn theme-btn theme-btn-sm"
                      >
                        Apply filters
                      </button>
                    </div>
                  </div>
                  {/* end dropdown-menu */}
                </div>
                {/* end btn-group */}
                <button
                  className="btn lh-26 text-gray fs-14 hover-bg-gray mb-2"
                  type="button"
                  data-toggle="modal"
                  data-target="#alertModal"
                >
                  <svg
                    className="mr-1"
                    width={16}
                    height={16}
                    viewBox="0 0 18 18"
                    fill="#6c727c"
                  >
                    <path d="M16 13v1H2v-1l.73-.58c.77-.77.81-3.55 1.19-5.42C4.69 3.23 8 2 8 2a1 1 0 011-1 1 1 0 0 1 1 1s3.39 1.23 4.16 5c.38 1.88.42 4.66 1.19 5.42l.66.58H16zm-7 4a2 2 0 002-2H7a2 2 0 002 2z" />
                  </svg>
                  Create Alert
                </button>
              </div>
              {/* end filter-btn-group */}
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <p className="fs-14 fw-medium">682 jobs founded</p>
                <div className="d-flex align-items-center lh-1">
                  <label htmlFor="sort" className="mb-0 mr-2 fs-13">
                    Sort by:
                  </label>
                  <select id="sort" className="custom-select w-100px">
                    <option value="i" selected>
                      Matches
                    </option>
                    <option value="p">Newest</option>
                    <option value="y">Salary</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="row mt-4">
              <div className="col-lg-9">
                <div className="jobs-snippet">
                  <div className="media media-card media--card align-items-center">
                    <div className="media-body border-left-0">
                      <h5 className="pb-1">
                        <a href="career-details.html">
                          React Native Engineer at sustainable mobility Start-up
                          (m/f/x)
                        </a>
                      </h5>
                      <small className="meta d-block lh-20 pb-1">
                        <span className="author text-gray">Canva</span>
                        <span className="px-1">-</span>
                        <span> Amsterdam, Netherlands</span>
                        <span className="px-1">-</span>
                        <span>20 mins ago</span>
                        <span className="px-1">-</span>
                        <span className="text-success fw-medium">
                          High response rate
                        </span>
                      </small>
                      <small className="meta d-block lh-20">
                        <span className="pr-1 text-success fw-medium">
                          £30k - 50k
                        </span>
                        <span className="pr-1 text-success">| Equity</span>
                        <span className="pr-1 text-danger">Visa sponsor</span>
                        <span className="text-info">Paid relocation</span>
                      </small>
                      <div className="tags pt-2">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          react-native
                        </a>
                        <a href="#" className="tag-link">
                          typescript
                        </a>
                        <a href="#" className="tag-link">
                          node.js
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card media--card align-items-center">
                    <div className="media-body border-left-0">
                      <h5 className="pb-1">
                        <a href="career-details.html">
                          Senior Software Engineer - Core Platforms &amp;
                          Libraries (Java)
                        </a>
                      </h5>
                      <small className="meta d-block lh-20 pb-1">
                        <span className="author text-gray">Canva</span>
                        <span className="px-1">-</span>
                        <span> Amsterdam, Netherlands</span>
                        <span className="px-1">-</span>
                        <span>20 mins ago</span>
                      </small>
                      <small className="meta d-block lh-20">
                        <span className="pr-1 text-success fw-medium">
                          £30k - 50k
                        </span>
                        <span className="pr-1 text-success">| Equity</span>
                        <span className="pr-1 text-danger">Visa sponsor</span>
                        <span className="text-info">Paid relocation</span>
                      </small>
                      <div className="tags pt-2">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          react-native
                        </a>
                        <a href="#" className="tag-link">
                          typescript
                        </a>
                        <a href="#" className="tag-link">
                          node.js
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card media--card align-items-center">
                    <div className="media-body border-left-0">
                      <h5 className="pb-1">
                        <a href="career-details.html">
                          React Native Engineer at sustainable mobility Start-up
                          (m/f/x)
                        </a>
                      </h5>
                      <small className="meta d-block lh-20 pb-1">
                        <span className="author text-gray">Canva</span>
                        <span className="px-1">-</span>
                        <span> Amsterdam, Netherlands</span>
                        <span className="px-1">-</span>
                        <span>20 mins ago</span>
                        <span className="px-1">-</span>
                        <span className="text-success fw-medium">
                          High response rate
                        </span>
                      </small>
                      <small className="meta d-block lh-20">
                        <span className="pr-1 text-success fw-medium">
                          £30k - 50k
                        </span>
                        <span className="pr-1 text-success">| Equity</span>
                        <span className="pr-1 text-danger">Visa sponsor</span>
                        <span className="text-info">Paid relocation</span>
                      </small>
                      <div className="tags pt-2">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          react-native
                        </a>
                        <a href="#" className="tag-link">
                          typescript
                        </a>
                        <a href="#" className="tag-link">
                          node.js
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card media--card align-items-center">
                    <div className="media-body border-left-0">
                      <h5 className="pb-1">
                        <a href="career-details.html">
                          Senior Software Engineer - Core Platforms &amp;
                          Libraries (Java)
                        </a>
                      </h5>
                      <small className="meta d-block lh-20 pb-1">
                        <span className="author text-gray">Canva</span>
                        <span className="px-1">-</span>
                        <span> Amsterdam, Netherlands</span>
                        <span className="px-1">-</span>
                        <span>20 mins ago</span>
                      </small>
                      <small className="meta d-block lh-20">
                        <span className="pr-1 text-success fw-medium">
                          £30k - 50k
                        </span>
                        <span className="pr-1 text-success">| Equity</span>
                        <span className="pr-1 text-danger">Visa sponsor</span>
                        <span className="text-info">Paid relocation</span>
                      </small>
                      <div className="tags pt-2">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          react-native
                        </a>
                        <a href="#" className="tag-link">
                          typescript
                        </a>
                        <a href="#" className="tag-link">
                          node.js
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card media--card align-items-center">
                    <div className="media-body border-left-0">
                      <h5 className="pb-1">
                        <a href="career-details.html">
                          React Native Engineer at sustainable mobility Start-up
                          (m/f/x)
                        </a>
                      </h5>
                      <small className="meta d-block lh-20 pb-1">
                        <span className="author text-gray">Canva</span>
                        <span className="px-1">-</span>
                        <span> Amsterdam, Netherlands</span>
                        <span className="px-1">-</span>
                        <span>20 mins ago</span>
                        <span className="px-1">-</span>
                        <span className="text-success fw-medium">
                          High response rate
                        </span>
                      </small>
                      <small className="meta d-block lh-20">
                        <span className="pr-1 text-success fw-medium">
                          £30k - 50k
                        </span>
                        <span className="pr-1 text-success">| Equity</span>
                        <span className="pr-1 text-danger">Visa sponsor</span>
                        <span className="text-info">Paid relocation</span>
                      </small>
                      <div className="tags pt-2">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          react-native
                        </a>
                        <a href="#" className="tag-link">
                          typescript
                        </a>
                        <a href="#" className="tag-link">
                          node.js
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card media--card align-items-center">
                    <div className="media-body border-left-0">
                      <h5 className="pb-1">
                        <a href="career-details.html">
                          Senior Software Engineer - Core Platforms &amp;
                          Libraries (Java)
                        </a>
                      </h5>
                      <small className="meta d-block lh-20 pb-1">
                        <span className="author text-gray">Canva</span>
                        <span className="px-1">-</span>
                        <span> Amsterdam, Netherlands</span>
                        <span className="px-1">-</span>
                        <span>20 mins ago</span>
                      </small>
                      <small className="meta d-block lh-20">
                        <span className="pr-1 text-success fw-medium">
                          £30k - 50k
                        </span>
                        <span className="pr-1 text-success">| Equity</span>
                        <span className="pr-1 text-danger">Visa sponsor</span>
                        <span className="text-info">Paid relocation</span>
                      </small>
                      <div className="tags pt-2">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          react-native
                        </a>
                        <a href="#" className="tag-link">
                          typescript
                        </a>
                        <a href="#" className="tag-link">
                          node.js
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card media--card align-items-center">
                    <div className="media-body border-left-0">
                      <h5 className="pb-1">
                        <a href="career-details.html">
                          React Native Engineer at sustainable mobility Start-up
                          (m/f/x)
                        </a>
                      </h5>
                      <small className="meta d-block lh-20 pb-1">
                        <span className="author text-gray">Canva</span>
                        <span className="px-1">-</span>
                        <span> Amsterdam, Netherlands</span>
                        <span className="px-1">-</span>
                        <span>20 mins ago</span>
                        <span className="px-1">-</span>
                        <span className="text-success fw-medium">
                          High response rate
                        </span>
                      </small>
                      <small className="meta d-block lh-20">
                        <span className="pr-1 text-success fw-medium">
                          £30k - 50k
                        </span>
                        <span className="pr-1 text-success">| Equity</span>
                        <span className="pr-1 text-danger">Visa sponsor</span>
                        <span className="text-info">Paid relocation</span>
                      </small>
                      <div className="tags pt-2">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          react-native
                        </a>
                        <a href="#" className="tag-link">
                          typescript
                        </a>
                        <a href="#" className="tag-link">
                          node.js
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card media--card align-items-center">
                    <div className="media-body border-left-0">
                      <h5 className="pb-1">
                        <a href="career-details.html">
                          Senior Software Engineer - Core Platforms &amp;
                          Libraries (Java)
                        </a>
                      </h5>
                      <small className="meta d-block lh-20 pb-1">
                        <span className="author text-gray">Canva</span>
                        <span className="px-1">-</span>
                        <span> Amsterdam, Netherlands</span>
                        <span className="px-1">-</span>
                        <span>20 mins ago</span>
                      </small>
                      <small className="meta d-block lh-20">
                        <span className="pr-1 text-success fw-medium">
                          £30k - 50k
                        </span>
                        <span className="pr-1 text-success">| Equity</span>
                        <span className="pr-1 text-danger">Visa sponsor</span>
                        <span className="text-info">Paid relocation</span>
                      </small>
                      <div className="tags pt-2">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          react-native
                        </a>
                        <a href="#" className="tag-link">
                          typescript
                        </a>
                        <a href="#" className="tag-link">
                          node.js
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                </div>
                <div className="pager pt-4">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination generic-pagination pr-1">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">
                            <i className="la la-arrow-left" />
                          </span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">
                            <i className="la la-arrow-right" />
                          </span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* end pager */}
              </div>
              {/* end col-lg-9 */}
              <div className="col-lg-3">
                <div className="sidebar">
                  <div className="card card-item">
                    <div className="card-body">
                      <h3 className="fs-17 pb-3">Number Achievement</h3>
                      <div className="divider">
                        <span />
                      </div>
                      <div className="row no-gutters text-center">
                        <div className="col-lg-6 responsive-column-half">
                          <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color">
                              980k
                            </span>
                            <p className="fs-14">Questions</p>
                          </div>
                          {/* end icon-box */}
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-6 responsive-column-half">
                          <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color-2">
                              610k
                            </span>
                            <p className="fs-14">Answers</p>
                          </div>
                          {/* end icon-box */}
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-6 responsive-column-half">
                          <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color-3">
                              650k
                            </span>
                            <p className="fs-14">Answer accepted</p>
                          </div>
                          {/* end icon-box */}
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-6 responsive-column-half">
                          <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color-4">
                              320k
                            </span>
                            <p className="fs-14">Users</p>
                          </div>
                          {/* end icon-box */}
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-12 pt-3">
                          <p className="fs-14">
                            To get answer of question{" "}
                            <a
                              href="signup.html"
                              className="text-color hover-underline"
                            >
                              Join
                              <i className="la la-arrow-right ml-1" />
                            </a>
                          </p>
                        </div>
                      </div>
                      {/* end row */}
                    </div>
                  </div>
                  {/* end card */}
                  <div className="ad-card">
                    <h4 className="text-gray text-uppercase fs-13 pb-3 text-center">
                      Advertisements
                    </h4>
                    <div className="ad-banner mb-4 mx-auto">
                      <span className="ad-text">290x500</span>
                    </div>
                  </div>
                  {/* end ad-card */}
                </div>
              </div>
              {/* end col-lg-3 */}
            </div>
            {/* end row */}
          </div>
          {/* end tab-pane */}
          <div
            className="tab-pane fade"
            id="companies"
            role="tabpanel"
            aria-labelledby="companies-tab"
          >
            <form
              method="post"
              className="search-form p-0 rounded-0 bg-transparent shadow-none position-relative z-index-1"
            >
              <div className="d-flex flex-wrap align-items-center">
                <div className="d-flex flex-wrap align-items-center flex-grow-1">
                  <div className="form-group mr-3 flex-grow-1">
                    <input
                      className="form-control form--control pl-40px"
                      type="text"
                      name="text"
                      placeholder="Search all companies"
                    />
                    <span className="la la-search input-icon" />
                  </div>
                  <div className="form-group mr-3 flex-grow-1">
                    <input
                      className="form-control form--control pl-40px"
                      type="text"
                      name="text"
                      placeholder="Located anywhere"
                    />
                    <span className="la la-map-marker input-icon" />
                    <div className="km-select-wrap">
                      <select className="custom-select custom--select">
                        <option value={5}>within 5 km</option>
                        <option value={10}>within 10 km</option>
                        <option value={20} selected>
                          within 20 km
                        </option>
                        <option value={50}>within 50 km</option>
                        <option value={100}>within 100 km</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* end d-flex */}
                <div className="search-btn-box mb-3">
                  <button className="btn theme-btn">
                    Search <i className="la la-search ml-1" />
                  </button>
                </div>
                {/* end search-btn-box */}
              </div>
              <div className="filter-btn-group d-flex flex-wrap align-items-center">
                <div className="btn border border-gray bg-white lh-26 text-gray pl-40px custom-control custom-checkbox fs-14 d-inline-block mr-2 mb-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="r2"
                  />
                  <label
                    className="custom-control-label custom--control-label"
                    htmlFor="r2"
                  >
                    Remote
                  </label>
                </div>
                {/* end btn */}
                <div className="btn border border-gray bg-white lh-26 text-gray pl-40px custom-control custom-checkbox fs-14 d-inline-block mr-2 mb-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="v"
                  />
                  <label
                    className="custom-control-label custom--control-label"
                    htmlFor="v"
                  >
                    Visa sponsor
                  </label>
                </div>
                {/* end btn */}
                <div className="btn border border-gray bg-white lh-26 text-gray pl-40px custom-control custom-checkbox fs-14 d-inline-block mr-2 mb-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="o"
                  />
                  <label
                    className="custom-control-label custom--control-label"
                    htmlFor="o"
                  >
                    Offers relocation
                  </label>
                </div>
                {/* end btn */}
                <div className="btn-group mr-2 mb-2">
                  <button
                    className="btn border border-gray dropdown-toggle lh-26 text-gray fs-14"
                    type="button"
                    id="techDropdownMenuTwo"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      className="mr-1"
                      width={16}
                      height={16}
                      viewBox="0 0 18 18"
                      fill="#6c727c"
                    >
                      <path d="M8 4.41 6.59 3l-6 6 6 6L8 13.59 3.41 9 8 4.41zm2 0L11.41 3l6 6-6 6L10 13.59 14.59 9 10 4.41z" />
                    </svg>
                    Tech
                  </button>
                  <div
                    className="dropdown-menu dropdown--menu dropdown--menu-2 keep-open mt-3"
                    aria-labelledby="techDropdownMenuTwo"
                  >
                    <div className="py-3 px-4">
                      <div className="form-group mb-2">
                        <label className="fs-14 text-black fw-medium lh-18">
                          Tech Stack
                          <span className="fs-13 lh-18 d-block fw-regular text-gray">
                            Add up to 5 tech tags
                          </span>
                        </label>
                        <input
                          className="input-tags"
                          type="text"
                          name="text"
                          placeholder="e.g. html, c#"
                        />
                      </div>
                      {/* end form-group */}
                      <button
                        type="button"
                        className="btn theme-btn theme-btn-sm"
                      >
                        Apply filters
                      </button>
                    </div>
                  </div>
                  {/* end dropdown-menu */}
                </div>
                {/* end btn-group */}
              </div>
              {/* end filter-btn-group */}
              <p className="fs-14 fw-medium">1,464 results</p>
            </form>
            <div className="row mt-4">
              <div className="col-lg-9">
                <div className="jobs-snippet">
                  <div className="media media-card">
                    <a
                      href="company-details.html"
                      className="media-img d-block"
                    >
                      <img src="images/company-logo.png" alt="company logo" />
                    </a>
                    <div className="media-body border-left-0">
                      <h5 className="pb-1 fs-16 fw-medium">
                        <a href="company-details.html">Sector Labs</a>
                      </h5>
                      <small className="meta d-block lh-20 pb-1">
                        <span className="pr-1">
                          <i className="la la-map-marker mr-1" />
                          Sydney
                        </span>
                        <span>
                          <i className="la la-building mr-1" />
                          Internet Classifieds, Real Estate, Web Development
                        </span>
                      </small>
                      <p className="lh-20 fs-13 text-black-50 truncate">
                        Offering the best and hoping to get the same in return:
                        we chose a location in the heart of the city so you can
                        have access to a bunch of good restaurants, we let you
                        chose your hardware to work on, we buy top-of-the-line
                        chairs from Herman Miller and Steelcase (your choice)
                        and standing desks and will keep on trying to make the
                        workplace better than our homes. Auton...
                      </p>
                      <div className="tags pt-2">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          python
                        </a>
                        <a href="#" className="tag-link">
                          reactjs
                        </a>
                        <a href="#" className="tag-link">
                          node.js
                        </a>
                        <a href="#" className="tag-link active">
                          2 jobs
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card">
                    <a
                      href="company-details.html"
                      className="media-img d-block"
                    >
                      <img src="images/company-logo2.png" alt="company logo" />
                    </a>
                    <div className="media-body border-left-0">
                      <h5 className="pb-1 fs-16 fw-medium">
                        <a href="company-details.html">Canva labs</a>
                      </h5>
                      <small className="meta d-block lh-20 pb-1">
                        <span className="pr-1">
                          <i className="la la-map-marker mr-1" />
                          Sydney
                        </span>
                        <span>
                          <i className="la la-building mr-1" />
                          Internet Classifieds, Real Estate, Web Development
                        </span>
                      </small>
                      <p className="lh-20 fs-13 text-black-50 truncate">
                        Offering the best and hoping to get the same in return:
                        we chose a location in the heart of the city so you can
                        have access to a bunch of good restaurants, we let you
                        chose your hardware to work on, we buy top-of-the-line
                        chairs from Herman Miller and Steelcase (your choice)
                        and standing desks and will keep on trying to make the
                        workplace better than our homes. Auton...
                      </p>
                      <div className="tags pt-2">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          python
                        </a>
                        <a href="#" className="tag-link">
                          reactjs
                        </a>
                        <a href="#" className="tag-link">
                          node.js
                        </a>
                        <a href="#" className="tag-link active">
                          22 jobs
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card">
                    <a
                      href="company-details.html"
                      className="media-img d-block"
                    >
                      <img src="images/company-logo3.jpg" alt="company logo" />
                    </a>
                    <div className="media-body border-left-0">
                      <h5 className="pb-1 fs-16 fw-medium">
                        <a href="company-details.html">Shogun Inc</a>
                      </h5>
                      <small className="meta d-block lh-20 pb-1">
                        <span className="pr-1">
                          <i className="la la-map-marker mr-1" />
                          Sydney
                        </span>
                        <span>
                          <i className="la la-building mr-1" />
                          Internet Classifieds, Real Estate, Web Development
                        </span>
                      </small>
                      <p className="lh-20 fs-13 text-black-50 truncate">
                        Offering the best and hoping to get the same in return:
                        we chose a location in the heart of the city so you can
                        have access to a bunch of good restaurants, we let you
                        chose your hardware to work on, we buy top-of-the-line
                        chairs from Herman Miller and Steelcase (your choice)
                        and standing desks and will keep on trying to make the
                        workplace better than our homes. Auton...
                      </p>
                      <div className="tags pt-2">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          python
                        </a>
                        <a href="#" className="tag-link">
                          reactjs
                        </a>
                        <a href="#" className="tag-link">
                          node.js
                        </a>
                        <a href="#" className="tag-link active">
                          33 jobs
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card">
                    <a
                      href="company-details.html"
                      className="media-img d-block"
                    >
                      <img src="images/company-logo4.png" alt="company logo" />
                    </a>
                    <div className="media-body border-left-0">
                      <h5 className="pb-1 fs-16 fw-medium d-flex align-items-center">
                        <a href="company-details.html">Outliant</a>
                        <span className="badge border border-gray fw-regular ml-2 text-black-50">
                          <svg
                            aria-hidden="true"
                            className="mr-1"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                          >
                            <path
                              fill="#5eba7d"
                              d="M11 4l2.29 2.29L10.5 9l-3-3L1 12.5 2.5 14l5-5 3 3 4.21-4.29L17 10V4h-6z"
                            />
                          </svg>
                          High response rate
                        </span>
                      </h5>
                      <small className="meta d-block lh-20 pb-1">
                        <span className="pr-1">
                          <i className="la la-map-marker mr-1" />
                          Sydney
                        </span>
                        <span>
                          <i className="la la-building mr-1" />
                          Internet Classifieds, Real Estate, Web Development
                        </span>
                      </small>
                      <p className="lh-20 fs-13 text-black-50 truncate">
                        Offering the best and hoping to get the same in return:
                        we chose a location in the heart of the city so you can
                        have access to a bunch of good restaurants, we let you
                        chose your hardware to work on, we buy top-of-the-line
                        chairs from Herman Miller and Steelcase (your choice)
                        and standing desks and will keep on trying to make the
                        workplace better than our homes. Auton...
                      </p>
                      <div className="tags pt-2">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          python
                        </a>
                        <a href="#" className="tag-link">
                          reactjs
                        </a>
                        <a href="#" className="tag-link">
                          node.js
                        </a>
                        <a href="#" className="tag-link active">
                          1 job
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card">
                    <a
                      href="company-details.html"
                      className="media-img d-block"
                    >
                      <img src="images/company-logo.png" alt="company logo" />
                    </a>
                    <div className="media-body border-left-0">
                      <h5 className="pb-1 fs-16 fw-medium">
                        <a href="company-details.html">Sector Labs</a>
                      </h5>
                      <small className="meta d-block lh-20 pb-1">
                        <span className="pr-1">
                          <i className="la la-map-marker mr-1" />
                          Sydney
                        </span>
                        <span>
                          <i className="la la-building mr-1" />
                          Internet Classifieds, Real Estate, Web Development
                        </span>
                      </small>
                      <p className="lh-20 fs-13 text-black-50 truncate">
                        Offering the best and hoping to get the same in return:
                        we chose a location in the heart of the city so you can
                        have access to a bunch of good restaurants, we let you
                        chose your hardware to work on, we buy top-of-the-line
                        chairs from Herman Miller and Steelcase (your choice)
                        and standing desks and will keep on trying to make the
                        workplace better than our homes. Auton...
                      </p>
                      <div className="tags pt-2">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          python
                        </a>
                        <a href="#" className="tag-link">
                          reactjs
                        </a>
                        <a href="#" className="tag-link">
                          node.js
                        </a>
                        <a href="#" className="tag-link active">
                          2 jobs
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card">
                    <a
                      href="company-details.html"
                      className="media-img d-block"
                    >
                      <img src="images/company-logo2.png" alt="company logo" />
                    </a>
                    <div className="media-body border-left-0">
                      <h5 className="pb-1 fs-16 fw-medium">
                        <a href="company-details.html">Canva labs</a>
                      </h5>
                      <small className="meta d-block lh-20 pb-1">
                        <span className="pr-1">
                          <i className="la la-map-marker mr-1" />
                          Sydney
                        </span>
                        <span>
                          <i className="la la-building mr-1" />
                          Internet Classifieds, Real Estate, Web Development
                        </span>
                      </small>
                      <p className="lh-20 fs-13 text-black-50 truncate">
                        Offering the best and hoping to get the same in return:
                        we chose a location in the heart of the city so you can
                        have access to a bunch of good restaurants, we let you
                        chose your hardware to work on, we buy top-of-the-line
                        chairs from Herman Miller and Steelcase (your choice)
                        and standing desks and will keep on trying to make the
                        workplace better than our homes. Auton...
                      </p>
                      <div className="tags pt-2">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          python
                        </a>
                        <a href="#" className="tag-link">
                          reactjs
                        </a>
                        <a href="#" className="tag-link">
                          node.js
                        </a>
                        <a href="#" className="tag-link active">
                          22 jobs
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card">
                    <a
                      href="company-details.html"
                      className="media-img d-block"
                    >
                      <img src="images/company-logo3.jpg" alt="company logo" />
                    </a>
                    <div className="media-body border-left-0">
                      <h5 className="pb-1 fs-16 fw-medium">
                        <a href="company-details.html">Shogun Inc</a>
                      </h5>
                      <small className="meta d-block lh-20 pb-1">
                        <span className="pr-1">
                          <i className="la la-map-marker mr-1" />
                          Sydney
                        </span>
                        <span>
                          <i className="la la-building mr-1" />
                          Internet Classifieds, Real Estate, Web Development
                        </span>
                      </small>
                      <p className="lh-20 fs-13 text-black-50 truncate">
                        Offering the best and hoping to get the same in return:
                        we chose a location in the heart of the city so you can
                        have access to a bunch of good restaurants, we let you
                        chose your hardware to work on, we buy top-of-the-line
                        chairs from Herman Miller and Steelcase (your choice)
                        and standing desks and will keep on trying to make the
                        workplace better than our homes. Auton...
                      </p>
                      <div className="tags pt-2">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          python
                        </a>
                        <a href="#" className="tag-link">
                          reactjs
                        </a>
                        <a href="#" className="tag-link">
                          node.js
                        </a>
                        <a href="#" className="tag-link active">
                          33 jobs
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card">
                    <a
                      href="company-details.html"
                      className="media-img d-block"
                    >
                      <img src="images/company-logo4.png" alt="company logo" />
                    </a>
                    <div className="media-body border-left-0">
                      <h5 className="pb-1 fs-16 fw-medium d-flex align-items-center">
                        <a href="company-details.html">Outliant</a>
                        <span className="badge border border-gray fw-regular ml-2 text-black-50">
                          <svg
                            aria-hidden="true"
                            className="mr-1"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                          >
                            <path
                              fill="#5eba7d"
                              d="M11 4l2.29 2.29L10.5 9l-3-3L1 12.5 2.5 14l5-5 3 3 4.21-4.29L17 10V4h-6z"
                            />
                          </svg>
                          High response rate
                        </span>
                      </h5>
                      <small className="meta d-block lh-20 pb-1">
                        <span className="pr-1">
                          <i className="la la-map-marker mr-1" />
                          Sydney
                        </span>
                        <span>
                          <i className="la la-building mr-1" />
                          Internet Classifieds, Real Estate, Web Development
                        </span>
                      </small>
                      <p className="lh-20 fs-13 text-black-50 truncate">
                        Offering the best and hoping to get the same in return:
                        we chose a location in the heart of the city so you can
                        have access to a bunch of good restaurants, we let you
                        chose your hardware to work on, we buy top-of-the-line
                        chairs from Herman Miller and Steelcase (your choice)
                        and standing desks and will keep on trying to make the
                        workplace better than our homes. Auton...
                      </p>
                      <div className="tags pt-2">
                        <a href="#" className="tag-link">
                          javascript
                        </a>
                        <a href="#" className="tag-link">
                          python
                        </a>
                        <a href="#" className="tag-link">
                          reactjs
                        </a>
                        <a href="#" className="tag-link">
                          node.js
                        </a>
                        <a href="#" className="tag-link active">
                          1 job
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end media */}
                </div>
                {/* end jobs-snippet */}
                <div className="pager pt-4">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination generic-pagination pr-1">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">
                            <i className="la la-arrow-left" />
                          </span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">
                            <i className="la la-arrow-right" />
                          </span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* end pager */}
              </div>
              {/* end col-lg-9 */}
              <div className="col-lg-3">
                <div className="sidebar">
                  <div className="card card-item">
                    <div className="card-body">
                      <h3 className="fs-17 pb-3">Number Achievement</h3>
                      <div className="divider">
                        <span />
                      </div>
                      <div className="row no-gutters text-center">
                        <div className="col-lg-6 responsive-column-half">
                          <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color">
                              980k
                            </span>
                            <p className="fs-14">Questions</p>
                          </div>
                          {/* end icon-box */}
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-6 responsive-column-half">
                          <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color-2">
                              610k
                            </span>
                            <p className="fs-14">Answers</p>
                          </div>
                          {/* end icon-box */}
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-6 responsive-column-half">
                          <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color-3">
                              650k
                            </span>
                            <p className="fs-14">Answer accepted</p>
                          </div>
                          {/* end icon-box */}
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-6 responsive-column-half">
                          <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color-4">
                              320k
                            </span>
                            <p className="fs-14">Users</p>
                          </div>
                          {/* end icon-box */}
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-12 pt-3">
                          <p className="fs-14">
                            To get answer of question{" "}
                            <a
                              href="signup.html"
                              className="text-color hover-underline"
                            >
                              Join
                              <i className="la la-arrow-right ml-1" />
                            </a>
                          </p>
                        </div>
                      </div>
                      {/* end row */}
                    </div>
                  </div>
                  {/* end card */}
                  <div className="ad-card">
                    <h4 className="text-gray text-uppercase fs-13 pb-3 text-center">
                      Advertisements
                    </h4>
                    <div className="ad-banner mb-4 mx-auto">
                      <span className="ad-text">290x500</span>
                    </div>
                  </div>
                  {/* end ad-card */}
                </div>
              </div>
              {/* end col-lg-3 */}
            </div>
            {/* end row */}
          </div>
          {/* end tab-pane */}
        </div>
        {/* end tab-content */}
      </div>
      {/* end container */}
    </section>
  );
}

export default CaptionContentSection;
