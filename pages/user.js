import React from "react";
import {
  useLazyQuery,
  useMutation,
  useQuery,
  useReactiveVar
} from "@apollo/client";
import { authVar } from "../utils/apollo/entities/auth";
import { useForm } from "react-hook-form";
import { ModalLoading } from "../components/Loading";
import {
  ref,
  uploadBytesResumable,
  getStorage,
  getDownloadURL
} from "firebase/storage";
import { useState, useEffect, useMemo } from "react";
import { UPDATE_INFO_USER } from "../utils/apollo/entities/caption/operations/caption.mutations";
import { useRouter } from "next/router";
import { GET_CAPTION_OF_USER } from "../utils/apollo/entities/caption/operations/caption.queries";
import Pagingnation from "../components/Pagingnation";
import CaptionAdmin from "../components/captionContentSection/CaptionAdmin";
function uploadFile(data, setImage, setCheckLoad) {
  const metadata = {
    contentType: "image/jpeg"
  };
  const storage = getStorage();
  const storageRef = ref(storage, `/${data.name}`);
  const uploadTask = uploadBytesResumable(storageRef, data, metadata);
  // Listen for state changes of the upload.
  uploadTask.on("state_changed", function () {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then(function (downloadURL) {
      setImage(downloadURL);
      setCheckLoad(false);
    });
  });
}
function User() {
  let PageSize = 5;
  const router = useRouter();
  const authDataCahe = useReactiveVar(authVar) || {};
  const [image, setImage] = useState(authDataCahe?.user?.photoURL || null);
  const [checkLoad, setCheckLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const [updateUser, { loading, data }] = useMutation(UPDATE_INFO_USER);
  const [callCaptionOfUser, captionsOfUser] = useLazyQuery(
    GET_CAPTION_OF_USER,
    {
      variables: {
        author_id: authDataCahe?.id
      }
    }
  );
  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return captionsOfUser?.data?.caption.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, captionsOfUser?.data?.caption]);

  const _handleSubmit = (data, e) => {
    e.preventDefault();
    updateUser({
      variables: {
        uid: authDataCahe?.user?.uid,
        photo_url: image || authDataCahe?.user?.photoURL,
        display_name: data.name || authDataCahe?.user?.displayName
      }
    });
  };
  const _handleChange = (e) => {
    setCheckLoad(!checkLoad);
    uploadFile(e.target.files[0], setImage, setCheckLoad);
  };
  useEffect(() => {
    if (authDataCahe) {
      setImage(authDataCahe?.user?.photoURL);
    }
  }, [authDataCahe?.user]);
  useEffect(() => {
    if (data) {
      router.reload();
    }
  }, [data]);
  useEffect(() => {
    if (authDataCahe && authDataCahe?.user) {
      callCaptionOfUser({
        variables: {
          author_id: authDataCahe.id
        }
      });
    }
  }, [authDataCahe]);
  return (
    <div>
      {checkLoad && <ModalLoading />}
      {loading && <ModalLoading />}
      <div>
        <section className="hero-area bg-white shadow-sm overflow-hidden pt-60px">
          <span className="stroke-shape stroke-shape-1" />
          <span className="stroke-shape stroke-shape-2" />
          <span className="stroke-shape stroke-shape-3" />
          <span className="stroke-shape stroke-shape-4" />
          <span className="stroke-shape stroke-shape-5" />
          <span className="stroke-shape stroke-shape-6" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="hero-content d-flex align-items-center">
                  <div className="icon-element shadow-sm flex-shrink-0 mr-3 border border-gray lh-55">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="32px"
                      viewBox="0 0 24 24"
                      width="32px"
                      fill="#2d86eb"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                    </svg>
                  </div>
                  <h2 className="section-title fs-30">Settings</h2>
                </div>
                {/* end hero-content */}
              </div>
              {/* end col-lg-8 */}
              <div className="col-lg-4">
                <div className="hero-btn-box text-right py-3">
                  <a
                    href="user-profile.html"
                    className="btn theme-btn theme-btn-outline theme-btn-outline-gray"
                  >
                    <i className="la la-user mr-1" />
                    View Profile
                  </a>
                </div>
              </div>
              {/* end col-lg-4 */}
            </div>
            {/* end row */}
            <ul
              className="nav nav-tabs generic-tabs generic--tabs generic--tabs-2 mt-4"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="edit-profile-tab"
                  data-toggle="tab"
                  href="#edit-profile"
                  role="tab"
                  aria-controls="edit-profile"
                  aria-selected="true"
                >
                  Edit Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="change-password-tab"
                  data-toggle="tab"
                  href="#change-password"
                  role="tab"
                  aria-controls="change-password"
                  aria-selected="false"
                >
                  Your captions
                </a>
              </li>
            </ul>
          </div>
          {/* end container */}
        </section>

        <section className="user-details-area pt-40px pb-40px">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="tab-content mb-50px" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="edit-profile"
                    role="tabpanel"
                    aria-labelledby="edit-profile-tab"
                  >
                    <div className="user-panel-main-bar">
                      <div className="user-panel">
                        <div className="bg-gray p-3 rounded-rounded">
                          <h3 className="fs-17">Edit your profile</h3>
                        </div>
                        <form
                          method="post"
                          className="pt-35px"
                          onSubmit={handleSubmit(_handleSubmit)}
                        >
                          <div className="settings-item mb-10px">
                            <h4 className="fs-14 pb-2 text-gray text-uppercase">
                              Public information
                            </h4>
                            <div className="divider">
                              <span />
                            </div>
                            <div className="row pt-4 align-items-center">
                              <div className="col-lg-6">
                                <div className="edit-profile-photo d-flex flex-wrap align-items-center">
                                  <img
                                    src={image ? image : "images/team.jpg"}
                                    alt="user avatar"
                                    className="profile-img mr-4"
                                  />
                                  <div>
                                    <div className="file-upload-wrap file--upload-wrap">
                                      <input
                                        {...register("image", {})}
                                        type="file"
                                        name="image"
                                        className="multi file-upload-input"
                                        onChange={_handleChange}
                                      />
                                      <span className="file-upload-text">
                                        <i className="la la-photo mr-2" />
                                        Upload Photo
                                      </span>
                                    </div>
                                    <p className="fs-14">
                                      Maximum file size: 10 MB.
                                    </p>
                                  </div>
                                </div>
                                {/* end edit-profile-photo */}
                              </div>
                              {/* end col-lg-6 */}
                              <div className="col-lg-6">
                                <div className="input-box">
                                  <label className="fs-13 text-black lh-20 fw-medium">
                                    Display name
                                  </label>
                                  <div className="form-group">
                                    <input
                                      {...register("name")}
                                      className="form-control form--control"
                                      type="text"
                                      name="name"
                                      defaultValue={
                                        authDataCahe
                                          ? authDataCahe?.user?.displayName
                                          : ""
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* end row */}
                          </div>
                          {/* end settings-item */}
                          <div className="settings-item">
                            <div className="col-lg-12">
                              <div className="submit-btn-box pt-3">
                                <button className="btn theme-btn" type="submit">
                                  Save changes
                                </button>
                              </div>
                            </div>
                            {/* end col-lg-12 */}
                          </div>
                          {/* end row */}

                          {/* end settings-item */}
                        </form>
                      </div>
                      {/* end user-panel */}
                    </div>
                    {/* end user-panel-main-bar */}
                  </div>
                  {/* end tab-pane */}
                  <div
                    className="tab-pane fade"
                    id="change-password"
                    role="tabpanel"
                    aria-labelledby="change-password-tab"
                  >
                    <div className="user-panel-main-bar">
                      <div className="user-panel mb-3">
                        <div className="bg-gray p-3 rounded-rounded">
                          <h3 className="fs-17">Your captions</h3>
                        </div>
                      </div>
                      {currentData &&
                        currentData.map((cap) => (
                          <CaptionAdmin
                            captionData={{}}
                            captionRejected={cap}
                            key={cap.id}
                          />
                        ))}
                      {/* end user-panel */}
                    </div>
                    {/* end user-panel-main-bar */}
                    <div className="pager pt-4">
                    <nav aria-label="Page navigation example">
                      <Pagingnation
                        onPageChange={(page) => setCurrentPage(page)}
                        totalCount={captionsOfUser?.data?.caption.length}
                        siblingCount={1}
                        currentPage={currentPage}
                        pageSize={PageSize}
                      />
                    </nav>
                  </div>
                  </div>
                  
                  {/* end tab-pane */}
                  <div
                    className="tab-pane fade"
                    id="email-settings"
                    role="tabpanel"
                    aria-labelledby="email-settings-tab"
                  >
                    <div className="user-panel-main-bar">
                      <div className="user-panel">
                        <div className="bg-gray p-3 rounded-rounded">
                          <h3 className="fs-17">Email Settings</h3>
                        </div>
                        <form method="post" className="pt-20px">
                          <div className="settings-item mb-30px border-bottom border-bottom-gray pb-30px">
                            <label className="fs-13 text-black lh-20 fw-medium">
                              Email Address
                            </label>
                            <div className="input-group">
                              <input
                                className="form-control form--control"
                                type="email"
                                name="email"
                                defaultValue="ardensmith81@gmail.com"
                              />
                              <div className="input-group-append">
                                <button className="btn theme-btn" type="button">
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* end settings-item */}
                          <div className="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                            <div className="input-box">
                              <label className="fs-14 text-black lh-20 fw-medium mb-0">
                                Features &amp; Announcements
                              </label>
                              <span className="fs-13 d-block lh-18 pb-3">
                                New products and feature updates, as well as
                                occasional company announcements
                              </span>
                              <div className="form-group">
                                <div
                                  className="btn-group btn--group btn-group-toggle"
                                  data-toggle="buttons"
                                >
                                  <label className="btn active">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option1"
                                      defaultChecked
                                    />{" "}
                                    Off
                                  </label>
                                  <label className="btn">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option2"
                                    />{" "}
                                    On
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end settings-item */}
                          <div className="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                            <div className="input-box">
                              <label className="fs-14 text-black lh-20 fw-medium mb-0">
                                The Disilab
                              </label>
                              <span className="fs-13 d-block lh-18 pb-3">
                                An email rounding up the best news,
                                entertainment, and culture from the world of
                                software development
                              </span>
                              <div className="form-group">
                                <div
                                  className="btn-group btn--group btn-group-toggle"
                                  data-toggle="buttons"
                                >
                                  <label className="btn active">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option3"
                                      defaultChecked
                                    />{" "}
                                    Off
                                  </label>
                                  <label className="btn">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option4"
                                    />{" "}
                                    On
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end settings-item */}
                          <div className="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                            <div className="input-box">
                              <label className="fs-14 text-black lh-20 fw-medium mb-0">
                                Tips &amp; Reminders
                              </label>
                              <span className="fs-13 d-block lh-18 pb-3">
                                Timely advice and reminders to help you make the
                                most of our features
                              </span>
                              <div className="form-group">
                                <div
                                  className="btn-group btn--group btn-group-toggle"
                                  data-toggle="buttons"
                                >
                                  <label className="btn">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option5"
                                    />{" "}
                                    Off
                                  </label>
                                  <label className="btn active">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option6"
                                      defaultChecked
                                    />{" "}
                                    On
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end settings-item */}
                          <div className="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                            <div className="input-box">
                              <label className="fs-14 text-black lh-20 fw-medium mb-0">
                                Inbox
                              </label>
                              <span className="fs-13 d-block lh-18 pb-3">
                                Answers to your questions, comments, chat
                                notifications, and more
                              </span>
                              <div className="form-group">
                                <div
                                  className="btn-group btn--group btn-group-toggle"
                                  data-toggle="buttons"
                                >
                                  <label className="btn">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option7"
                                    />{" "}
                                    Off
                                  </label>
                                  <label className="btn">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option8"
                                      defaultChecked
                                    />{" "}
                                    Weekly
                                  </label>
                                  <label className="btn active">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option9"
                                    />{" "}
                                    Daily
                                  </label>
                                  <label className="btn">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option10"
                                    />{" "}
                                    3 hrs
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end settings-item */}
                          <div className="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                            <div className="input-box">
                              <label className="fs-14 text-black lh-20 fw-medium mb-0">
                                Community Milestones
                              </label>
                              <span className="fs-13 d-block lh-18 pb-3">
                                Notifications about bounties, reputation and
                                more. Hint: sometimes involves swag.
                              </span>
                              <div className="form-group">
                                <div
                                  className="btn-group btn--group btn-group-toggle"
                                  data-toggle="buttons"
                                >
                                  <label className="btn">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option11"
                                    />{" "}
                                    Off
                                  </label>
                                  <label className="btn active">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option12"
                                      defaultChecked
                                    />{" "}
                                    On
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end settings-item */}
                          <div className="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                            <div className="input-box">
                              <label className="fs-14 text-black lh-20 fw-medium mb-0">
                                Research
                              </label>
                              <span className="fs-13 d-block lh-18 pb-3">
                                Invitations to participate in surveys, usability
                                tests, and more. Only a few per year.
                              </span>
                              <div className="form-group">
                                <div
                                  className="btn-group btn--group btn-group-toggle"
                                  data-toggle="buttons"
                                >
                                  <label className="btn active">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option13"
                                      defaultChecked
                                    />{" "}
                                    Off
                                  </label>
                                  <label className="btn">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option14"
                                    />{" "}
                                    On
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end settings-item */}
                          <div className="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                            <div className="input-box">
                              <label className="fs-14 text-black lh-20 fw-medium mb-0">
                                Recommended Jobs
                              </label>
                              <span className="fs-13 d-block lh-18 pb-3">
                                Occasional emails highlighting special jobs and
                                companies
                              </span>
                              <div className="form-group">
                                <div
                                  className="btn-group btn--group btn-group-toggle"
                                  data-toggle="buttons"
                                >
                                  <label className="btn active">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option15"
                                      defaultChecked
                                    />{" "}
                                    Off
                                  </label>
                                  <label className="btn">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option16"
                                    />{" "}
                                    On
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end settings-item */}
                          <div className="settings-item">
                            <div className="input-box">
                              <label className="fs-14 text-black lh-20 fw-medium mb-0">
                                Company Alerts
                              </label>
                              <span className="fs-13 d-block lh-18 pb-3">
                                Content from companies you follow
                              </span>
                              <div className="form-group">
                                <div
                                  className="btn-group btn--group btn-group-toggle"
                                  data-toggle="buttons"
                                >
                                  <label className="btn active">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option17"
                                      defaultChecked
                                    />{" "}
                                    Off
                                  </label>
                                  <label className="btn">
                                    <input
                                      type="radio"
                                      name="options"
                                      id="option18"
                                    />{" "}
                                    Weekly
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end settings-item */}
                        </form>
                      </div>
                      {/* end user-panel */}
                    </div>
                    {/* end user-panel-main-bar */}
                  </div>
                  {/* end tab-pane */}
                  <div
                    className="tab-pane fade"
                    id="privacy"
                    role="tabpanel"
                    aria-labelledby="privacy-tab"
                  >
                    <div className="user-panel-main-bar">
                      <div className="user-panel">
                        <div className="bg-gray p-3 rounded-rounded">
                          <h3 className="fs-17">Privacy Settings</h3>
                          <p className="fs-13">
                            Select who may see your profile details
                          </p>
                        </div>
                        <form method="post" className="pt-20px">
                          <div className="settings-item">
                            <div className="input-box">
                              <label className="fs-13 text-black lh-20 fw-medium">
                                Profile Picture
                              </label>
                              <div className="form-group">
                                <select className="custom-select custom--select">
                                  <option selected="selected" value="public">
                                    Public
                                  </option>
                                  <option value="followers">Followers</option>
                                  <option value="me">Only me</option>
                                </select>
                              </div>
                            </div>
                            <div className="input-box">
                              <label className="fs-13 text-black lh-20 fw-medium">
                                Email
                              </label>
                              <div className="form-group">
                                <select className="custom-select custom--select">
                                  <option selected="selected" value="public">
                                    Public
                                  </option>
                                  <option value="followers">Followers</option>
                                  <option value="me">Only me</option>
                                </select>
                              </div>
                            </div>
                            <div className="input-box">
                              <label className="fs-13 text-black lh-20 fw-medium">
                                Country
                              </label>
                              <div className="form-group">
                                <select className="custom-select custom--select">
                                  <option selected="selected" value="public">
                                    Public
                                  </option>
                                  <option value="followers">Followers</option>
                                  <option value="me">Only me</option>
                                </select>
                              </div>
                            </div>
                            <div className="input-box">
                              <label className="fs-13 text-black lh-20 fw-medium">
                                Biography
                              </label>
                              <div className="form-group">
                                <select className="custom-select custom--select">
                                  <option selected="selected" value="public">
                                    Public
                                  </option>
                                  <option value="followers">Followers</option>
                                  <option value="me">Only me</option>
                                </select>
                              </div>
                            </div>
                            <div className="input-box">
                              <label className="fs-13 text-black lh-20 fw-medium">
                                Social links
                              </label>
                              <div className="form-group">
                                <select className="custom-select custom--select">
                                  <option selected="selected" value="public">
                                    Public
                                  </option>
                                  <option value="followers">Followers</option>
                                  <option value="me">Only me</option>
                                </select>
                              </div>
                            </div>
                            <div className="submit-btn-box pt-3">
                              <button className="btn theme-btn" type="button">
                                Save changes
                              </button>
                            </div>
                          </div>
                          {/* end settings-item */}
                        </form>
                      </div>
                      {/* end user-panel */}
                    </div>
                    {/* end user-panel-main-bar */}
                  </div>
                  {/* end tab-pane */}
                  <div
                    className="tab-pane fade"
                    id="delete-account"
                    role="tabpanel"
                    aria-labelledby="delete-account-tab"
                  >
                    <div className="user-panel-main-bar">
                      <div className="user-panel">
                        <div className="delete-account-info card card-item border border-danger">
                          <div className="card-body">
                            <h3 className="fs-22 text-danger fw-bold">
                              Delete Account
                            </h3>
                            <p className="pb-3 pt-2 lh-22 fs-15">
                              Before confirming that you would like your profile
                              deleted, weFaboutmed like to take a moment to
                              explain the implications of deletion:
                            </p>
                            <ul className="generic-list-item generic-list-item-bullet fs-15">
                              <li>
                                Deletion is irreversible, and you will have no
                                way to regain any of your original content,
                                should this deletion be carried out and you
                                change your mind later on.
                              </li>
                              <li>
                                Your questions and answers will remain on the
                                site, but will be disassociated and anonymized
                                (the author will be listed as user15319675 and
                                will not indicate your authorship even if you
                                later return to the site.
                              </li>
                            </ul>
                            <p className="pb-3 pt-2 lh-22 fs-15">
                              Once you delete your account, there is no going
                              back. Please be certain.
                            </p>
                            <div className="custom-control custom-checkbox fs-15 mb-4">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="delete-terms"
                              />
                              <label
                                className="custom-control-label custom--control-label lh-22"
                                htmlFor="delete-terms"
                              >
                                I have read the information stated above and
                                understand the implications of having my profile
                                deleted. I wish to proceed with the deletion of
                                my profile.
                              </label>
                            </div>
                            <button
                              type="button"
                              className="btn btn-danger fw-medium"
                              data-toggle="modal"
                              data-target="#deleteModal"
                              id="delete-button"
                              disabled
                            >
                              <i className="la la-trash mr-1" /> Delete your
                              account
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* end user-panel */}
                    </div>
                    {/* end user-panel-main-bar */}
                  </div>
                  {/* end tab-pane */}
                </div>
              </div>
              {/* end col-lg-9 */}
              <div className="col-lg-3">
                {/* end sidebar */}
              </div>
              {/* end col-lg-3 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end user-details-area */}
      </div>
      ;
    </div>
  );
}

export default User;
