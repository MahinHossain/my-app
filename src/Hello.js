import React, { useState } from "react";
import ShowInfo from "./ShowInfo";

const Hello = () => {
    const [state, setState] = useState({
        id: null,
        name: null,
        email: null,
        designation: "",
        list: [],
    });


    const [editStatus, seteditStatus] = useState(false);


    const dataReceive = (value, name) => {
        let stateData = { ...state };
        stateData[name] = value;
        setState(stateData);
    };

    const handleSubmit = (e) => {



        e.preventDefault();
        let listClone = { ...state };
        let obj = {
            name: state.name,
            email: state.email,
            designation: state.designation,
        };
        listClone.list.push(obj);
        setState(listClone);

        e.target.reset()
    };

    console.log("state :>> ", state);

    const handleDelete = (index) => {
        const cloneSt = { ...state };
        cloneSt.list.splice(index, 1);
        setState(cloneSt);
    };
    const handleUpdate = (data, index) => {

        seteditStatus(true)

        let listClone = { ...state };

        listClone.name = data.name
        listClone.email = data.email
        listClone.designation = data.designation

        //listClone.list.push(obj);
        setState(listClone);
        //console.log(listClone)




    };
    const handleEditUpdate = (e) => {

        const clonelist = { ...state }

        alert("Data Updated")


        e.preventDefault();


    }

    return (
        <div className="">
            <div className="col-md-4 offset-md-4">
                <form className="" onSubmit={(e) => !editStatus ? handleSubmit(e) : handleEditUpdate(e)}>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            onChange={(e) => dataReceive(e.target.value, "name")}
                            name="name"
                            placeholder="Enter Your Name"
                            value={state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label for="email">Email </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Your Email Address"
                            name="email"
                            value={state.email}

                            onChange={(e) => dataReceive(e.target.value, "email")}
                        />
                    </div>
                    <div className="form-group">
                        <label for="designation">Designation</label>
                        <input
                            type="text"
                            className="form-control"
                            id="designation"
                            name="designation"
                            placeholder="Designation"
                            onChange={(e) => dataReceive(e.target.value, "designation")}
                            value={state.designation}

                        />
                    </div>
                    {

                        editStatus ? <button type="submit" className="btn btn-primary" > update</button> : <button type="submit" className="btn btn-success"> Submit
          </button>
                    }
                </form>
            </div>

            <div>
                {state.list.map((data, index) => (
                    <ShowInfo
                        id={index}
                        data={data}
                        handleDelete={() => handleDelete(index)}
                        handleUpdate={() => handleUpdate(data, index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hello;
