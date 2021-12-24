import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { postRecommend } from "../../utils/helper/helpers";
import RecommendModal from "./RecommendModal";
import Link from "next/link";
import Loading from "../Loading";
function RecommentComponent() {
  const [selectedImage, setSelectedImage] = useState();
  const [statusCaption, setStatusCaption] = useState({
    status: "ide",
    loading: false,
    error: false,
    result: null
  });
  const [resultData, setResultData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const _handleSubmit = (data, e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("num_cap", 5);
    document.getElementById("recommend-captions").scrollIntoView({behavior: "smooth"});
    setResultData(null)
    
    try {
      setStatusCaption((prev) => ({
        ...prev,
        status: "loading",
        loading: true,
        result: null
      }));
      postRecommend(formData).then((data) => {
        setStatusCaption((prev) => ({
          ...prev,
          status: "fullfilled",
          loading: false,
          result: {
            captions: data.data.captions,
            lameCaption: data.data.describe_image,
            emotion: data.data.emotion
          }
        }));
        reset();
      });
    } catch (e) {
      console.log(e.message);
      setStatusCaption((prev) => ({
        ...prev,
        status: "rejected",
        loading: false,
        error: true
      }));
      reset();
    }
  };
  const handleChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  const _getSelectedCaption = (caption) => {
    const result = {
      caption: caption,
      image: selectedImage
    };
    setResultData(result);
  };
  return (
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
                {/* <div class="icon-element shadow-sm flex-shrink-0 mr-3 border border-gray lh-55">
                  <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px" fill="#2d86eb"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
              </div> */}
                <h2 className="section-title fs-30">Gợi ý caption cho bạn</h2>
              </div>
              {/* end hero-content */}
            </div>
            {/* end col-lg-8 */}
            <div className="col-lg-4">
              {/* <div className="hero-btn-box text-right py-3">
                <a
                  href="user-profile.html"
                  className="btn theme-btn theme-btn-outline theme-btn-outline-gray"
                >
                  <i className="la la-user mr-1" />
                  View Profile
                </a>
              </div> */}
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
                Gợi ý theo ảnh
              </a>
            </li>
          </ul>
        </div>
        {/* end container */}
      </section>
      {/*======================================
  END HERO AREA
======================================*/}
      {/* ================================
   START USER DETAILS AREA
================================= */}
      <section className="user-details-area pt-40px pb-40px">
        <div className="container">
          <div className={`row ${!resultData && "justify-content-center"}`}>
            <div className="col-lg-8">
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
                        <h3 className="fs-17">
                          Gửi 1 tấm ảnh bạn định up lên mạng xã hội, chúng tôi
                          sẽ gợi ý những caption hay nhất dành cho bạn
                        </h3>
                      </div>
                      <form
                        method="post"
                        className="pt-35px"
                        onSubmit={handleSubmit(_handleSubmit)}
                      >
                        <div className="settings-item mb-10px">
                          <h4 className="fs-14 pb-2 text-gray text-uppercase">
                            Ảnh
                          </h4>
                          <div className="divider">
                            <span />
                          </div>
                          <div className="row pt-4 mb-5">
                            <div className="col-lg-6">
                              <div className="edit-profile-photo d-flex flex-wrap ">
                                {selectedImage && (
                                  <div style={{ width: "100%", height: "100%" }}>
                                    <img
                                      src={
                                        (selectedImage &&
                                          URL?.createObjectURL(selectedImage)) ||
                                        "images/team.jpg"
                                      }
                                      alt="user avatar"
                                      className="profile-img"
                                      style={{
                                        width: "100%",
                                        objectFit: "cover"
                                      }}
                                    />
                                  </div>
                                )}
                                <div style={{ width: "100%", marginTop: "34px" }}>
                                  <div
                                    className="file-upload-wrap file--upload-wrap"
                                    style={{ width: "100%" }}
                                  >
                                    <input
                                      {...register("image", {
                                        required: true
                                      })}
                                      // ref={register}
                                      type="file"
                                      name="image"
                                      className="multi file-upload-input"
                                      onChange={handleChange}
                                    />
                                    {errors.image?.type === "required" && (
                                      <span className="text-danger">
                                        This field is required
                                      </span>
                                    )}
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
                            <div className="col-lg-6" id="recommend-captions">
                              <div className="input-box">
                                <label className="fs-13 text-black lh-20 fw-medium">
                                  Tên bạn là
                                </label>
                                <div className="form-group">
                                  <input
                                    {...register("name", {
                                      // required: true
                                    })}
                                    className="form-control form--control"
                                    type="text"
                                    name="name"
                                    placeholder="Eg. Arden Smith"
                                  />
                                  {errors.name?.type === "required" && (
                                    <span className="text-danger">
                                      This field is required
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="submit-btn-box pt-3">
                                <button
                                  className={`btn theme-btn ${
                                    statusCaption.loading && "disabled"
                                  }`}
                                  type="submit"
                                  onSubmit={handleSubmit(_handleSubmit)}
                                >
                                  Gợi ý
                                </button>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            {/* end col-lg-12 */}
                          </div>
                          {/* end row */}
                        </div>
                        {/* end settings-item */}
                        {statusCaption.loading && (
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "center"
                            }}
                          >
                            <Loading />
                          </div>
                        )}
                        {statusCaption.result && (
                          <div className="settings-item" >
                            <h4 className="fs-14 pb-2 text-gray text-uppercase">
                              Captions cho bạn
                            </h4>
                            <div className="divider">
                              <span />
                            </div>
                            <div className="row pt-4">
                              <div className="col-lg-12 mb-1">
                              <label className="fs-15 text-black lh-20 fw-medium">
                                    Mô tả: 
                                  </label>{" "}
                                  <label className="lh-20 fs-15">{statusCaption.result.lameCaption}</label>
                                </div>
                              <div className="col-lg-12 mb-3">
                              <label className="fs-15 text-black lh-20 fw-medium">
                                    Tâm trạng ảnh: 
                                  </label>{" "}
                                  <label className="lh-20 fs-15">{statusCaption.result.emotion === "sad" ? "so deep 😔": "vui 😙"}</label>
                                </div>
                              <div className="col-lg-12">
                                <table className="table generic-table">
                                  <thead>
                                    <tr>
                                      <th scope="col">Caption</th>
                                      <th scope="col">Similarity</th>
                                      <th scope="col">Tags</th>
                                      <th scope="col">Action</th>
                                    </tr>
                                  </thead>
                                  
                                  {statusCaption.result &&
                                    statusCaption.result.captions.map((caption) => {
                                      return (
                                        <tbody key={caption.id}>
                                          <tr>
                                            <th scope="row">
                                              <div className="media media-card align-items-center shadow-none p-0 mb-0 rounded-0 bg-transparent">
                                                {/* <a href="#" class="media-img d-block media-img-sm">
                                                                <img src="images/product-img.jpg" alt="Product image">
                                                            </a> */}
                                                <div className="media-body">
                                                  <h5 className="fs-15 fw-medium">
                                                    <Link
                                                      href={`/caption/${caption.id}`}
                                                    >
                                                      <a>{caption.content}</a>
                                                    </Link>
                                                  </h5>
                                                </div>
                                              </div>
                                            </th>
                                            <td>
                                              <div className="tags">
                                                {Math.round(caption.point * 100) / 100}
                                              </div>
                                            </td>
                                            <td>
                                              <div className="tags">
                                                {caption.tags.map((tag) => (
                                                  <Link key={tag.id} href={"#"}>
                                                    <a className="tag-link">
                                                      {tag.name}
                                                    </a>
                                                  </Link>
                                                ))}
                                              </div>
                                            </td>
                                            <td>
                                              <a
                                                className="btn theme-btn theme-btn-sm"
                                                style={{
                                                  color: "white"
                                                }}
                                                onClick={_getSelectedCaption.bind(
                                                  this,
                                                  caption.content
                                                )}
                                              >
                                                Chọn
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      );
                                    })}
                                </table>
                              </div>
                              {/* end col-lg-6 */}
                            </div>
                            {/* end row */}
                          </div>
                        )}
                        {/* end settings-item */}
                      </form>
                    </div>
                    {/* end user-panel */}
                  </div>
                  {/* end user-panel-main-bar */}
                </div>
                {/* end tab-pane */}
              </div>
            </div>
            {/* end col-lg-9 */}
            {resultData && (
              <RecommendModal resultData={resultData} />
            ) }

            {/* end col-lg-3 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end user-details-area */}
    </div>
  );
}

export default RecommentComponent;
