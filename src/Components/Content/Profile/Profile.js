import React from "react";
import "./Profile.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import {
    faExclamationTriangle,
    faEye,
    faHome, faPhone,
    faSignOutAlt,
    faUserCog,
    faUserPlus,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import person from "../../../person.jpg";
import InputField from "../../Field/Inputfield";
import {Link, Route} from "react-router-dom";
import Previewprofile from "./Previewprofile";
import Owndetails from "./Owndetails";
import Primarydetails from "./Primarydetails";
import Contactdetails from "./Contactdetails";

export default function Profile() {
    return (
        <>
            <div className="button-group mb-2">
                <Link to="/newuser" type="button" className="btn btn-labeled btn-labeled-left btn-success mr-2 mb-1">
                    <b>
                        <FontAwesomeIcon icon={faUserPlus} className="icon"/>
                    </b>
                    Yeni istifadəçi əlavə et
                </Link>
                <Link to="/userlist" type="button" className="btn btn-labeled btn-labeled-left btn-info mr-2 mb-1">
                    <b>
                        <FontAwesomeIcon icon={faUsers} className="icon"/>
                    </b>
                    İstifadəçilərin siyahısı
                </Link>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card sidebar sidebar-light sidebar-component sidebar-component-left d-flex">
                        <div className="card-header">
                            <div className="card-header-body">
                                <div className="card-header-body-image">
                                    <img src={person} alt="image" className="card-header-body-image--img"/>
                                </div>
                                <div className="card-header-body-content">
                                    <h1 className="card-header-body-content--header">
                                        Əli Mahmudlu
                                    </h1>
                                    <span className="card-header-body-content--description">
                                        Admin
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <ul className="nav nav-sidebar mb-2">
                                <li className="nav-item-header">Navigation</li>
                                <li className="nav-item">
                                    <Link to="/profile/" className="nav-link">
                                        <FontAwesomeIcon icon={faEye} className="icon"/>
                                        Önizləmə
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/profile/owndetails" className="nav-link">
                                        <FontAwesomeIcon icon={faUserCog} className="icon"/>
                                        Şəxsi Məlumatlar
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/profile/primarydetails" className="nav-link">
                                        <FontAwesomeIcon icon={faExclamationTriangle} className="icon"/>
                                        Əsas Məlumatlar
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/profile/contactdetails" className="nav-link">
                                        <FontAwesomeIcon icon={faPhone} className="icon"/>
                                        Əlaqə Məlumatları
                                    </Link>
                                </li>
                                <li className="nav-item-divider"></li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link">
                                        <FontAwesomeIcon icon={faSignOutAlt} className="icon"/>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <Route exact path="/profile/">
                        <Previewprofile/>
                    </Route>
                    <Route path="/profile/owndetails">
                        <Owndetails/>
                    </Route>
                    <Route path="/profile/primarydetails">
                        <Primarydetails/>
                    </Route>
                    <Route path="/profile/contactdetails">
                        <Contactdetails/>
                    </Route>
                </div>
            </div>
        </>
    )
}