import { useEffect, useState } from "react";

import userService from "../../services/userService";

import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import UserListItem from "./UserListItem/UserListItem";
import UserCreateEdit from "./UserCreateEdit/UserCreateEdit";
import UserDetails from "./UserDetails/UserDetails";
import UserDelete from "./UserDelete/UserDelete";
import NoContentOverlap from "./NoContentOverlap/NoContentOverlap";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [userIdDetails, setUserIdDetails] = useState(null);
    const [userIdDelete, setUserIdDelete] = useState(null);
    const [userIdEdit, setUserIdEdit] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(5);

    const [searchQuery, setSearchQuery] = useState("");
    const [searchCriteria, setSearchCriteria] = useState("");

    const [sortCriteria, setSortCriteria] = useState("");
    const [sortDirection, setSortDirection] = useState("asc");

    useEffect(() => {
        userService
            .getAll()
            .then((result) => {
                setUsers(result);
                setFilteredUsers(result);
            })
            //TODO
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        const filtered = users.filter((user) => {
            if (!searchQuery || !searchCriteria) return true;

            const userValue = user[searchCriteria]?.toString().toLowerCase();
            return userValue?.includes(searchQuery.toLowerCase());
        });

        setFilteredUsers(filtered);
        setCurrentPage(1);
    }, [searchQuery, searchCriteria, users]);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;

    const sortedUsers = [...filteredUsers].sort((a, b) => {
        if (a[sortCriteria] < b[sortCriteria]) {
            return sortDirection === "asc" ? -1 : 1;
        }
        if (a[sortCriteria] > b[sortCriteria]) {
            return sortDirection === "asc" ? 1 : -1;
        }
        return 0;
    });

    const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

    const handleSort = (field) => {
        if (sortCriteria === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortCriteria(field);
            setSortDirection("asc");
        }
    };
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleUsersPerPageChange = (e) => {
        const selectedValue = Number(e.target.value);
        setUsersPerPage(selectedValue);
        setCurrentPage(1);
    };

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const handelSearchCriteriaChange = (e) => {
        setSearchCriteria(e.target.value);
    };
    const createUserClickHandler = () => {
        setShowCreate(true);
    };

    const closeCreateUserClickHandler = () => {
        setShowCreate(false);
        setUserIdEdit(null);
    };

    const saveCreateUserClikHandler = async (e) => {
        //stop default behaviour(refresh)
        e.preventDefault();
        //get form data
        const formData = new FormData(e.target.parentElement.parentElement);
        const userData = Object.fromEntries(formData);

        //send form data to backend service and create user on server
        const newUser = await userService.create(userData);
        //TODO error handling
        //updtae local state
        setUsers((users) => [...users, newUser]);

        //close modal
        setShowCreate(false);
    };

    const userDetailsClickHandler = (userId) => {
        setUserIdDetails(userId);
    };

    const closeUserDetailsClickHandler = () => {
        setUserIdDetails(null);
    };

    const userDeleteClickHandler = (userId) => {
        setUserIdDelete(userId);
    };

    const closeUserDeleteClickHandler = () => {
        setUserIdDelete(null);
    };
    const userDeleteHandler = async () => {
        try {
            //Delete reqwest to server
            await userService.delete(userIdDelete);

            //delete from local state
            setUsers((users) =>
                users.filter((user) => user._id !== userIdDelete)
            );

            //close modal
            setUserIdDelete(null);
        } catch (error) {
            console.error(error); //TODO
        }
    };

    const userEditClickHandler = (userId) => {
        setUserIdEdit(userId);
    };

    const saveEditUserClikHandler = async (e) => {
        const userId = userIdEdit;
        //stop default behaviour(refresh)
        e.preventDefault();
        //get form data
        const formData = new FormData(e.target.parentElement.parentElement);
        const userData = Object.fromEntries(formData);

        //send form data to backend service and edit user on server
        const editedUser = await userService.update(userId, userData);
        //TODO error handling
        //updtae local state
        setUsers((users) =>
            users.map((user) => {
                if (user._id === editedUser._id) {
                    return editedUser;
                }
                return user;
            })
        );

        //close modal
        setUserIdEdit(null);
    };

    return (
        <section className="card users-container">
            <Search
                searchQuery={searchQuery}
                onSearchQueryChange={handleSearchQueryChange}
                searchCriteria={searchCriteria}
                onSearchCriteriaChange={handelSearchCriteriaChange}
            />
            {showCreate && (
                <UserCreateEdit
                    onClose={closeCreateUserClickHandler}
                    onSave={saveCreateUserClikHandler}
                />
            )}

            {userIdDetails && (
                <UserDetails
                    userId={userIdDetails}
                    onClose={closeUserDetailsClickHandler}
                />
            )}

            {userIdDelete && (
                <UserDelete
                    onClose={closeUserDeleteClickHandler}
                    onDelete={userDeleteHandler}
                />
            )}

            {userIdEdit && (
                <UserCreateEdit
                    userId={userIdEdit}
                    onClose={closeCreateUserClickHandler}
                    onSave={saveCreateUserClikHandler}
                    onEdit={saveEditUserClikHandler}
                />
            )}

            {/* <!-- Table component --> */}
            <div className="table-wrapper">
                <div className="overlays">
                    {/* <!-- Overlap components  --> */}
                    <div className="loading-shade">
                        {filteredUsers.length === 0 && <NoContentOverlap />}
                        {/* <!-- Loading spinner  --> */}
                        {/* <!-- <div className="spinner"></div> --> */}
                        {/* <!--  */}
                        {/* No users added yet  --> */}

                        {/* <div className="table-overlap">
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="triangle-exclamation"
    className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
    ></path>
  </svg>
  <h2>There is no users yet.</h2>
</div>  */}

                        {/* <!-- On error overlap component  --> */}

                        {/* <!-- <div className="table-overlap">
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="triangle-exclamation"
    className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
    ></path>
  </svg>
  <h2>Failed to fetch</h2>
</div> --> */}
                    </div>
                </div>
                {filteredUsers.length > 0 && (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th onClick={() => handleSort("firstName")}>
                                    First name
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="arrow-down"
                                        className={`icon svg-inline--fa fa-arrow-down Table_icon__+HHgn ${
                                            sortCriteria === "firstName"
                                                ? "active-icon"
                                                : ""
                                        }`}
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                        style={{
                                            transform:
                                                sortCriteria === "firstName" &&
                                                sortDirection === "desc"
                                                    ? "rotate(180deg)"
                                                    : "none",
                                            opacity:
                                                sortCriteria === "firstName"
                                                    ? 1
                                                    : 0,
                                        }}
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                        ></path>
                                    </svg>
                                </th>
                                <th onClick={() => handleSort("lastName")}>
                                    Last name
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="arrow-down"
                                        className={`icon svg-inline--fa fa-arrow-down Table_icon__+HHgn ${
                                            sortCriteria === "lastName"
                                                ? "active-icon"
                                                : ""
                                        }`}
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                        style={{
                                            transform:
                                                sortCriteria === "lastName" &&
                                                sortDirection === "desc"
                                                    ? "rotate(180deg)"
                                                    : "none",
                                            opacity:
                                                sortCriteria === "lastName"
                                                    ? 1
                                                    : 0,
                                        }}
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                        ></path>
                                    </svg>
                                </th>
                                <th onClick={() => handleSort("email")}>
                                    Email
                                    <svg
                                        className={`icon svg-inline--fa fa-arrow-down Table_icon__+HHgn ${
                                            sortCriteria === "email"
                                                ? "active-icon"
                                                : ""
                                        }`}
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="arrow-down"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                        style={{
                                            transform:
                                                sortCriteria === "email" &&
                                                sortDirection === "desc"
                                                    ? "rotate(180deg)"
                                                    : "none",
                                            opacity:
                                                sortCriteria === "email"
                                                    ? 1
                                                    : 0,
                                        }}
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                        ></path>
                                    </svg>
                                </th>
                                <th onClick={() => handleSort("phone")}>
                                    Phone
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="arrow-down"
                                        className={`icon svg-inline--fa fa-arrow-down Table_icon__+HHgn ${
                                            sortCriteria === "phone"
                                                ? "active-icon"
                                                : ""
                                        }`}
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                        style={{
                                            transform:
                                                sortCriteria === "phone" &&
                                                sortDirection === "desc"
                                                    ? "rotate(180deg)"
                                                    : "none",
                                            opacity:
                                                sortCriteria === "phone"
                                                    ? 1
                                                    : 0,
                                        }}
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                        ></path>
                                    </svg>
                                </th>
                                <th onClick={() => handleSort("created")}>
                                    Created
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="arrow-down"
                                        className={`icon svg-inline--fa fa-arrow-down Table_icon__+HHgn ${
                                            sortCriteria === "created"
                                                ? "active-icon"
                                                : ""
                                        }`}
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                        style={{
                                            transform:
                                                sortCriteria === "created" &&
                                                sortDirection === "desc"
                                                    ? "rotate(180deg)"
                                                    : "none",
                                            opacity:
                                                sortCriteria === "created"
                                                    ? 1
                                                    : 0,
                                        }}
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                        ></path>
                                    </svg>
                                </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUsers.map((user) => (
                                <UserListItem
                                    key={user._id}
                                    onInfoClick={userDetailsClickHandler}
                                    onDeleteClick={userDeleteClickHandler}
                                    onEditClick={userEditClickHandler}
                                    {...user}
                                />
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* <!-- New user button  --> */}
            <button className="btn-add btn" onClick={createUserClickHandler}>
                Add new user
            </button>

            <Pagination
                usersPerPage={usersPerPage}
                totalUsers={filteredUsers.length}
                paginate={paginate}
                currentPage={currentPage}
                handleUsersPerPageChange={handleUsersPerPageChange}
                indexOfFirstUser={indexOfFirstUser}
                indexOfLastUser={indexOfLastUser}
            />
        </section>
    );
}
